from flask import Flask, render_template
from data import data_array, courses_array, certificates_array, projects_array

app = Flask(__name__)

@app.route('/')
def about():
    return render_template('about.html', data = data_array)

@app.route('/projetos')
def projects():
    return render_template('projects.jinja2', projects = projects_array)

@app.route('/formacao')
def education():
    return render_template('education.html', data = courses_array, certificates = certificates_array)

if __name__ == "__main__":
    app.run()