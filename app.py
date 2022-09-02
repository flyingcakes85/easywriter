from flask import Flask, send_from_directory, request
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return ("Server is working")

if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0')