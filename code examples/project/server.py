from flask import Flask
from flask import request, render_template, jsonify, redirect


app = Flask(__name__)

#initiate
@app.route('/')
def index():
    return render_template('index.html')

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

## start server
if __name__ == '__main__':

    app.run(host='0.0.0.0', port=5000, debug=True)