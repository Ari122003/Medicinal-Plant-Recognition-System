from flask import Flask, request
import argparse
import io
from PIL import Image
import cv2
import os
from ultralytics import YOLO
from flask_cors import CORS






app = Flask("Charakagiki")
CORS(app)


@app.route("/upload", methods=["GET","POST"])
def predict():
    
    if(request.method == "POST"):
        f = request.files['file']
        basepath = os.path.dirname(__file__)
        filepath = os.path.join(basepath, 'Uploads', f.filename)
        
        f.save(filepath)
        global imgpath
        predict.imgpath = f.filename
        
        file_extension = f.filename.rsplit('.', 1)[1].lower()

    # Process

    img = cv2.imread(filepath)
    frame = cv2.imencode('.jpg', cv2.UMat(img))[1].tobytes()

    image = Image.open(io.BytesIO(frame))

    yolo = YOLO('C:/Users/Hp/OneDrive/Desktop/Program files/SIH/Server/best.pt')
    prediction = yolo.predict(image, show=True)
    print("Aritra1")
    names= ['Tulsi','tamarind','Aloevera','Aloeavera long','Papaya',] 
    result_position = (prediction[0].boxes.cls.tolist())[0]
    position_int=int(result_position)
    result_json={"result": names[position_int]}

    

    return result_json,200




if __name__ == "__main__":
    
    parser=argparse.ArgumentParser(description="MEDICAL PLANT DETECTION")
    parser.add_argument("--port",default=5000,type=int,help="port number")
    args=parser.parse_args()

    app.run()
