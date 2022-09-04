#!/usr/bin/env python
# encoding: utf-8
import string
import subprocess
import random
import os
from flask import Flask, send_from_directory, request, render_template
app = Flask(__name__, static_folder="static/")


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html', message=" ")

@app.route('/userguide', methods=['GET'])
def userguide():
    return render_template('userguide.html')

@app.route('/read/<id>')
def load_file(id):
    return render_template('index.html', message=open(f"./uploads/{id}", 'r').read())


@app.route('/render-pdf', methods=['POST'])
def render_md_to_pdf():
    num = random.random()
    md_data = request.data.decode('ascii')
    with open(f"/tmp/{num}.md", 'w') as f:
        f.write(md_data)

    os.system(f"/usr/bin/pandoc -o /tmp/{num}.pdf /tmp/{num}.md")
    return send_from_directory('/', f"tmp/{num}.pdf")

@app.route('/render-sans-serif-pdf', methods=["POST"])
def render_md_to_pdf_sans_serif():
    num = random.random()
    md_data = request.data.decode('ascii')
    with open(f"/tmp/{num}.md", 'w') as f:
        f.write(md_data)

    os.system(f"/usr/bin/pandoc -o /tmp/{num}.pdf /tmp/{num}.md --variable=fontfamily:arev")
    return send_from_directory('/', f"tmp/{num}.pdf")


@app.route('/render-docx', methods=['POST'])
def render_md_to_docx():
    num = random.random()
    md_data = request.data.decode('ascii')
    with open(f"/tmp/{num}.md", 'w') as f:
        f.write(md_data)

    os.system(f"/usr/bin/pandoc -o /tmp/{num}.docx /tmp/{num}.md")
    return send_from_directory('/', f"tmp/{num}.docx")


@app.route('/upload', methods=['POST'])
def upload():
    filename = ''.join(random.choices(
        string.ascii_uppercase + string.digits, k=4))
    with open(f"./uploads/{filename}", 'w') as f:
        f.write(request.data.decode('ascii'))

    return f"https://easywriter.snehit.dev/read/{filename}"

@app.route('/redeploy/<uid>/<token>/<user>/<repo>')
def redeploy(uid, token, user,repo):
    key = open(f"../uid", 'r').read()
    if uid == key:
        subprocess.Popen(["./deploy.sh", token, f"{user}/{repo}"])
        return "running deploy"
    return "uid not matched"

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
