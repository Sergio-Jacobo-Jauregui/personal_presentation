# This server is only for dev, I need a server to load my json file c:
from flask import Flask, send_from_directory, render_template

app = Flask(__name__)
app.static_folder = 'static'

# ======= Rutas ========
# ------ General Rutes ------
@app.route('/vars.json')
def serve_tailwind_json():
    return send_from_directory('.', 'vars.json')

@app.route('/front_examples/in-construction.html')
def serve_tailwind_in_construccion():
    return send_from_directory('front_examples', 'in-construction.html')

@app.route('/hc/')
def health_check():
    return 'ok'

@app.route('/images/sleepy_cat.jpeg')
def sleepy_cat_image():
    return send_from_directory('images', 'sleepy_cat.jpeg')

# Ruta principal
@app.route('/')
def serve_index():
    return send_from_directory('.', 'principal_index.html')

@app.route('/style.css')
def serve_principal_css():
    return send_from_directory('.', 'style.css')

@app.route('/script.js')
def serve_principal_js():
    return send_from_directory('.', 'script.js')

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

@app.route('/images/cat_compressed.jpg')
def serve_tailwind_image():
    return send_from_directory('images', 'cat_compressed.jpg')

    # Tailwind template routes
@app.route('/front_examples/tailwind/index.html/css/bootstrap.css')
def serve_tailwind_template_css1():
    return send_from_directory('front_examples/tailwind/css', 'bootstrap.css')

@app.route('/front_examples/tailwind/index.html/css/style.css')
def serve_tailwind_template_css2():
    return send_from_directory('front_examples/tailwind/css', 'style.css')

@app.route('/front_examples/tailwind/index.html/css/font-awesome.min.css')
def serve_tailwind_template_css3():
    return send_from_directory('front_examples/tailwind/css', 'font-awesome.min.css')

@app.route('/front_examples/tailwind/index.html/css/responsive.css')
def serve_tailwind_template_css4():
    return send_from_directory('front_examples/tailwind/css', 'responsive.css')

@app.route('/front_examples/tailwind/index.html/images/hero-bg.png')
def serve_tailwind_template_css5():
    return send_from_directory('front_examples/tailwind/images', 'hero-bg.png')

@app.route('/bootstrap/')
def serve_bootstrap():
    return send_from_directory('front_examples/bootstrap', 'index.html')

# Acerca de mi
@app.route('/acerca-de-mi/index.html')
def serve_about_me():
    return send_from_directory('acerca-de-mi', 'index.html')

@app.route('/acerca-de-mi/style.css')
def serve_about_me_css():
    return send_from_directory('acerca-de-mi', 'style.css')

@app.route('/acerca-de-mi/acerca-de-mi.js')
def serve_about_me_js():
    return send_from_directory('acerca-de-mi', 'acerca-de-mi.js')

@app.route('/images/personal-presentation.drawio.png')
def serve_about_me_image():
    return send_from_directory('images', 'personal-presentation.drawio.png')


if __name__ == "__main__":
    app.run(debug=True)