from flask import render_template, jsonify, request
from app import app
import requests



@app.route('/')
def get_sample():
    return render_template('index.html')
   
@app.route('/api' , methods=['GET', 'POST'])
def fetchData():
    content = request.args.get('data')
    URL = 'https://api.edamam.com/search?q={}&app_id=$a7e67afa2bbbb7e691fac00c8b0145d6&app_key=$893fb8f6&from=0&to=10'.format(content)
    print(URL)
    r = requests.get(URL)
    return jsonify(r.json())
 

# a7e67afa2bbbb7e691fac00c8b0145d6	
# 893fb8f6
# https://api.edamam.com/search?q=chicken&app_id=$a7e67afa2bbbb7e691fac00c8b0145d6&app_key=$893fb8f6&from=0&to=3