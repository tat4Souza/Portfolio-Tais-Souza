from flask import Blueprint, render_template
routes_bp = Blueprint('routes_bp', __name__)

@routes_bp.route('/')
def homepage():
    return render_template('index.html')

@routes_bp.route('/teste')
def teste():
    return 'TESTE'