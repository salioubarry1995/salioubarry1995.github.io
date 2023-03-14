from flask import Flask, render_template, request , url_for
from flask_sqlalchemy import SQLAlchemy
import os
# import cv2 as cv
# import numpy as np


# DirPath = '..\images'

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:admin@localhost/tourism_info'
db = SQLAlchemy(app)


class Data(db.Model):
   __tablename__="contact_info"
   id = db.Column(db.Integer,primary_key=True)
   fname = db.Column(db.String(120))
   lname = db.Column(db.String(120))
   email = db.Column(db.String(120),unique=True)
   phoneno = db.Column(db.Integer)
   comments = db.Column(db.String(500))

   def __init__(self, fname_, lname_, email_, phoneno_, comments_):
       self.fname = fname_
       self.lname = lname_
       self.email = email_
       self.phoneno = phoneno_
       self.comments = comments_

with app.app_context():
     db.create_all()
       
@app.route('/home')
@app.route('/')
def home():
 return render_template("index.html")

@app.route('/northernLights')
def northernLights():
    return render_template("northernLights.html")

@app.route('/hiking')
def hiking():
    return render_template('hiking.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route("/thankyou" , methods=['POST'])
def thankyou():
       
       if request.method =='POST':
        fname=request.form["first_name"]
        lname=request.form["last_name"]
        email=request.form["email_name"]
        phoneno=request.form["cellphn_no"]
        comments=request.form["Comments"]
        print(request.form)

        data=Data(fname,lname,email,phoneno,comments)
        db.session.add(data)
        db.session.commit()
        return render_template("thankyou.html")
       
       
if __name__== '__main__':
    app.debug=True
    app.run()

