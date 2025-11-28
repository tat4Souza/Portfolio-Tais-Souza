from flask import Flask, render_template
from data import data_array, courses_array, certificates_array

app = Flask(__name__)

@app.route('/')
def about():
    return render_template('about.html', data = data_array)

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/education')
def education():
    return render_template('education.html', data = courses_array, certificates = certificates_array)

if __name__ == "__main__":
    app.run()