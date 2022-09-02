import random
import os
from flask import Flask, send_from_directory, request
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return ("Server is working")

@app.route('/render', methods=['POST'])
def render_md_to_pdf():
    num = random.random()
    md_data = request.data.decode('ascii')
    with open(f"/tmp/{num}.md", 'w') as f:
        f.write(md_data)

    os.system(f"/usr/bin/pandoc -o /tmp/{num}.pdf /tmp/{num}.md")
    return send_from_directory('/', f"tmp/{num}.pdf")

if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0')