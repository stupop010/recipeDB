from flask import Blueprint, render_template, abort, jsonify
from jinja2 import TemplateNotFound
from app import app
import requests



@app.route('/')
def get_sample():
    return render_template('index.html')
   
@app.route('/api')
def fetchData():
    r = requests.get('https://api.edamam.com/search?q=chicken&app_id=$a7e67afa2bbbb7e691fac00c8b0145d6&app_key=$893fb8f6&from=0&to=3')
    print(r.json())
    return jsonify(r.json())

# a7e67afa2bbbb7e691fac00c8b0145d6	
# 893fb8f6
# https://api.edamam.com/search?q=chicken&app_id=$a7e67afa2bbbb7e691fac00c8b0145d6&app_key=$893fb8f6&from=0&to=3