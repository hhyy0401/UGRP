## 전처리, python code로 작성한 것이 들어가야 함.
def preprocessing(path):
    img = cv2.imread(path)
    try:
        #cv2.imshow('asdfasdf', img)
        img_original = cv2.imread(path)
        img = cv2.resize(img, (500,500))
        img_original = cv2.resize(img_original, (500,500))
        #cv2.imshow(';adfafasf', img)

        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.03, 2)  # 1.03 2

        for(x, y,  w,  h) in faces:
            cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 3)
        roi_gray = gray[y:(y+h), x:(x+w)]
        roi_color = img[y:(y+h), x:(x+w)]
        roi_gray = gray
        roi_color = img
        eyes = eye_cascade.detectMultiScale(roi_gray, 1.1, 50)  # 1.08 20This parameter means, (image, scaleFactor, minNeighbors, flags, minSize, maxSize)
        index = 0
        eye_2 = (0, 0, 0, 0)

        for (ex, ey,  ew,  eh) in eyes:
            if index == 0:
                eye_1 = (ex, ey, ew, eh)
            elif index == 1:
                eye_2 = (ex, ey, ew, eh)
            # Drawing rectangles around the eyes
            cv2.rectangle(roi_color, (ex, ey), (ex+ew, ey+eh), (0, 0, 255), 3)
            index = index + 1

        if eye_1[0] < eye_2[0]:
            left_eye = eye_1
            right_eye = eye_2
        else:
            left_eye = eye_2
            right_eye = eye_1

            # Calculating coordinates of a central points of the rectangles
        left_eye_center = (int(left_eye[0] + (left_eye[2] / 2)), int(left_eye[1] + (left_eye[3] / 2)))
        left_eye_x = left_eye_center[0]
        left_eye_y = left_eye_center[1]

        right_eye_center = (int(right_eye[0] + (right_eye[2]/2)), int(right_eye[1] + (right_eye[3]/2)))
        right_eye_x = right_eye_center[0]
        right_eye_y = right_eye_center[1]

        if (index == 0):
            print('no eyes')
            cv2.destroyAllWindows()

        if (index == 1):
            print('no eye_2')
            cv2.destroyAllWindows()


        if(abs(left_eye_x-right_eye_x) < abs(right_eye_y-left_eye_y)):
            cv2.imshow('eye_distance_image', img)
            cv2.waitKey(0)
            cv2.destroyAllWindows()


        cv2.circle(roi_color, left_eye_center, 5, (255, 255, 0) , -1)
        cv2.circle(roi_color, right_eye_center, 5, (255, 255, 0) , -1)


        cv2.line(roi_color,right_eye_center, left_eye_center,(100,100,100),3)


        if left_eye_y > right_eye_y:
            A = (right_eye_x, left_eye_y)
        # Integer -1 indicates that the image will rotate in the clockwise direction
            direction = -1
        else:
            A = (left_eye_x, right_eye_y)
                # Integer 1 indicates that image will rotate in the counter clockwise
                # direction
            direction = 1
            #cv2.imshow('calculated_image', img)
        cv2.waitKey(0)


        cv2.circle(roi_color, A, 5, (255, 255, 0) , -1)
            
        cv2.line(roi_color,right_eye_center, left_eye_center,(204,51,204),3)
        cv2.line(roi_color,left_eye_center, A,(204,51,204),3)
        cv2.line(roi_color,right_eye_center, A,(204,51,204),3)
            

        delta_x = right_eye_x - left_eye_x
        delta_y = right_eye_y - left_eye_y
        angle = np.arctan(delta_y/delta_x)
        angle = (angle * 180) / np.pi

        h, w = img.shape[:2]
        center = (w // 2, h // 2)
        M = cv2.getRotationMatrix2D(center, (angle), 1.0)
        rotated = cv2.warpAffine(img, M, (w, h))

        original_rotated = cv2.warpAffine(img_original, M, (w, h))

        al_gray = cv2.cvtColor(original_rotated, cv2.COLOR_BGR2GRAY)

            # Creating variable faces
        al_faces = face_cascade.detectMultiScale(al_gray, 1.02, 3)
            # This parameter means, (image, scaleFactor, minNeighbors, flags, minSize, maxSize)


        aligned_eyes = eye_cascade.detectMultiScale(al_gray, 1.08, 50)
        index2 = 0
            # Creating for loop in order to divide one eye from another
        for (eex, eey, eew,  eeh) in aligned_eyes:
            if index2 == 0:
                al_eye_1 = (eex, eey, eew, eeh)
                #print(al_eye_1)
            elif index2 == 1:
                al_eye_2 = (eex, eey, eew, eeh)
                #print(al_eye_2)
            index2 = index2 + 1

        if al_eye_1[0] < al_eye_2[0]:
            al_left_eye = al_eye_1
            al_right_eye = al_eye_2
        else:
            al_left_eye = al_eye_2
            al_right_eye = al_eye_1

        al_left_eye_center = (int(
        al_left_eye[0] + (al_left_eye[2] / 2)), int(al_left_eye[1] + (al_left_eye[3] / 2)))

        al_right_eye_center = (int(
            al_right_eye[0] + (al_right_eye[2]/2)), int(al_right_eye[1] + (al_right_eye[3]/2)))
        al_eyes_x_center = round(
            (al_left_eye_center[0] + al_right_eye_center[0])/2)
            #print(al_eyes_x_center)
            # 110 / al_eyes_x_center - 200 al_left_eye_center[0] - 140
        cx = abs(al_eyes_x_center - 200)
        cy = abs(al_left_eye_center[1] - 205)  # 149
        print(cx, cy)

        cropped_img = original_rotated[cy:(cy + 400), cx:(cx + 400)]

        Resize_image = cv2.resize( cropped_img, (300, 300), interpolation=cv2.INTER_AREA)
        return Resize_image
    except:
        return img