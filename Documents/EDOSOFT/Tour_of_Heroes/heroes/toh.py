import flask
from flask import jsonify, Flask, render_template
from flask_cors import CORS, cross_origin


app = Flask(__name__)
app.config["DEBUG"] = True
CORS(app)



all_heroes = [
    { 'id': 12, 'name': 'Dr. Nice' },
  { 'id': 13, 'name': 'Bombasto' },
  { 'id': 14, 'name': 'Celeritas' },
  { 'id': 15, 'name': 'Magneta' },
  { 'id': 16, 'name': 'RubberMan' },
  { 'id': 17, 'name': 'Dynama' },
  { 'id': 18, 'name': 'Dr. IQ' },
  { 'id': 19, 'name': 'Magma' },
  { 'id': 20, 'name': 'Tornado' }]

@app.route('/')
@cross_origin()
def inicio():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()

