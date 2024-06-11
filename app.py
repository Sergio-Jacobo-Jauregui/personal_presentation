from flask import Flask, send_from_directory, render_template

app = Flask(__name__)
app.static_folder = 'static'

# Rutas
@app.route('/hc')
def health_check():
    return 'ok'

@app.route('/')
def serve_index():
    return render_template('principal_index.html')

@app.route('/reactFront/')
def serve_react():
    return send_from_directory('front_examples/reactFront/out', 'index.html')

@app.route('/vueFront/')
def serve_vue():
    return send_from_directory('front_examples/vueFront/dist', 'index.html')

@app.route("/assets/<path:filename>")
def serve_vue_assets(filename):
    return send_from_directory('front_examples/vueFront/dist/assets', filename)

@app.route('/tailwindFront/')
def serve_tailwind():
    return send_from_directory('front_examples/tailwind', 'index.html')

@app.route('/bootstrapFront/')
def serve_bootstrap():
    return send_from_directory('front_examples/bootstrap', 'index.html')

# if __name__ == "__main__":
#     app.run(debug=True)