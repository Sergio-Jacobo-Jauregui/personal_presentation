# This server is only for dev, I need a server to load my json file c:
from flask import Flask, send_from_directory, render_template

app = Flask(__name__)
app.static_folder = 'static'

# ======= Rutas ========
@app.route('/hc/')
def health_check():
    return 'ok'

# Ruta principal
@app.route('/')
def serve_index():
    return send_from_directory('.', 'principal_index.html')

@app.route('/style.css')
def serve_principal_css():
    return send_from_directory('.', 'style.css')

# ------ React archivos ------
@app.route('/reactFront/')
def serve_react():
    return send_from_directory('front_examples/reactFront/out', 'index.html')

# ------ Vue archivos ------
@app.route('/vueFront/')
def serve_vue():
    return send_from_directory('front_examples/vueFront/dist', 'index.html')

@app.route('/assets/<path:filename>')
def serve_vue_assets(filename):
    return send_from_directory('front_examples/vueFront/dist/assets', filename)

#  ------ Tailwind archivos ------ 
@app.route('/front_examples/tailwind/index.html/')
def serve_tailwind_index():
    return send_from_directory('front_examples/tailwind', 'index.html')

@app.route('/front_examples/tailwind/index.html/assets/script.js/')
def serve_tailwind_js():
    return send_from_directory('front_examples/tailwind/assets', 'script.js')

@app.route('/front_examples/tailwind/index.html/assets/output.css/')
def serve_tailwind_css():
    return send_from_directory('front_examples/tailwind/assets', 'output.css')

@app.route('/front_examples/vars.json/')
def serve_tailwind_json():
    return send_from_directory('.', 'vars.json')


@app.route('/bootstrap/')
def serve_bootstrap():
    return send_from_directory('front_examples/bootstrap', 'index.html')

if __name__ == "__main__":
    app.run(debug=True)