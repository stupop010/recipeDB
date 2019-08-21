from flask import Flask

app = Flask(__name__)

def create_app():
    print('cereate_app')

    return app


