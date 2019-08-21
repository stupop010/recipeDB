from app import create_app
from flask import Blueprint, render_template, abort

app = create_app()

from app import routes

if __name__ == '__main__':
    app.run(debug=True)

