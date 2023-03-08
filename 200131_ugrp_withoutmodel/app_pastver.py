import tensorflow as tf
import keras
from keras import models   
from sklearn.ensemble import RandomForestClassifier
from util import decode_base64
import joblib
import os
import numpy as np
import cv2
import json
import codecs, base64
import sqlite3
from keras_vggface import utils
import requests
from flask import Flask
from flask import request, render_template, jsonify, redirect
from werkzeug.utils import secure_filename
from preprocess import preprocessing
from PIL import Image
from multiprocessing import Value

ALLOWED_EXTENSIONS = set(['jpg', 'jpeg', 'png', 'bmp', 'JPG', 'JPEG', 'PNG', 'BMP'])
global VGG
counter = Value('i', 0)
app = Flask(__name__)
# 딥러닝 모델 VGG-Randomforest model

print(("* Loading Keras model and Flask staring server..." "please wait until server has fully started"))
personality = ['ENFJ', 'ENFP', 'ENTJ', 'ENTP', 'ESFJ', 'ESFP', 'ESTJ', 'ESTP', 'INFJ', 'INFP',
                    'INTJ', 'INTP', 'ISFJ', 'ISFP', 'ISTJ', 'ISTP']
VGG = models.load_model("./VGG.h5")
RandomForest = joblib.load("./RandomForestClassifier.pkl")

face_cascade = cv2.CascadeClassifier("./haarcascade_frontalface_default.xml")
eye_cascade = cv2.CascadeClassifier("./haarcascade_eye.xml")


conn = sqlite3.connect("user4.db")
cur = conn.cursor()
#num = cur.execute("DELETE FROM user").rowcount
#counter = num + 1
#cur.execute("create table user(id int, model_mbti text, user_mbti text)")

def get_MBTI(path):
    img = keras.preprocessing.image.load_img(path, target_size=(300, 300))
    x = keras.preprocessing.image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = utils.preprocess_input(x, version=2)
    x = VGG.predict(x)
    x = x.reshape(1, -1)
    x = RandomForest.predict(x)
    return personality[x[0]]


##초기 홈페이지 렌더링
@app.route('/')
def index():
    return render_template('./index.html')

@app.route('/agree')
def agree():
    return render_template('./agree.html')

@app.route('/photo')
def photo():
    return render_template('./photo.html')

@app.route('/input')
def input():
    return render_template('./input.html')

@app.route('/result')
def result():
    return render_template('./result.html')


@app.route('/agreewith')
def agreewith():
    #db에 값 저장(1로 저장)
    return render_template('./Yes.html', alert = "정면 사진을 넣어 주세요.")

@app.route('/disagree')
def disagree():
    #db에 값 저장(0으로 저장)
    return render_template('./Yes.html', alert = "정면 사진을 넣어 주세요.")



##파일 업로드 및 예측
@app.route('/predict', methods=['GET', 'POST'])
def predict():
    if request.method == 'POST':
        with counter.get_lock():
            counter.value += 1
            pic_num = counter.value
        
        raw_data = request.json['data']

        with open("test", "wb") as f:
            f.write(raw_data.encode('utf-8'))
        
        print(len(raw_data.encode('utf-8')))
        decodeit = open('./static/'+ str(pic_num) +'.jpg', 'wb')
        print("pic_num: " , pic_num)
        #decodeit.write(base64.b64decode(raw_data.encode('utf-8') + b'=' * (-len(raw_data) %4)))
        decodeit.write(decode_base64(raw_data.split(",")[1].encode('utf-8')))
        decodeit.close()
        #prediction = get_MBTI('./static/'+ str(pic_num) +'.jpg')
        prediction = "ENFJ"
        print(prediction)
        
        #connect DB
        conn = sqlite3.connect("user4.db")
        cur = conn.cursor()
        cur.execute("INSERT INTO user values (?, ?, ?)", (pic_num, prediction, None))
        conn.commit()
        
        return render_template(('./input.html'), mbti_result = prediction)
    else :
        return render_template('Yes.html', alert="이미지 파일만 업로드하세요.")

@app.route('/mbti', methods=['GET', 'POST'])
def mbti():
    #temp = request.args.get('usermbti')
    temp = request.form['usermbti']
    
    #write
    conn = sqlite3.connect("user4.db")
    cur = conn.cursor()
    cur.execute('UPDATE user SET user_mbti = ? WHERE id = ? ', (temp, counter.value))
    conn.commit()

    #read
    cur.execute('SELECT model_mbti FROM user WHERE id = ?', (counter.value, ))
    rows = cur.fetchall() #전체 row retrieve
    
    #values = rows[id]
    print("rows: ")
    print(rows)
    print(counter.value)
    return render_template('result.html', mbti_result = rows[0][0], user_result = temp, userid = '1') #str(counter.value)

## 서버 실행
if __name__ == '__main__':
        
    #load_model() # 한 번만 모델을 불러오도록 설계.

    app.run(host='0.0.0.0', port=8888, debug=True)
