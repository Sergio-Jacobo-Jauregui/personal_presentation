import subprocess, argparse

# Parse config
parser = argparse.ArgumentParser(description="Script para hacer commits")
parser.add_argument("commit_name", help="Nombre del commit")
args = parser.parse_args()

def open_file(filename):
  with open(filename, 'r') as file:
    content = file.read()
  return content

def write_file(filename, new_content):
  with open(filename, 'w') as file:
    file.write(new_content)

def modify_vue():
  path_to_vue_main_file = './front_examples/vueFront/dist/index.html'
  string1_to_search = '<script type="module" crossorigin src="'
  string2_to_search = '<link rel="stylesheet" crossorigin href="'

  content = open_file(path_to_vue_main_file)

  if not (string1_to_search+'.' in content):
    content = content.replace(string1_to_search, string1_to_search+'.')

  if not (string2_to_search+'.' in content):
    content = content.replace(string2_to_search, string2_to_search+'.')

  write_file(path_to_vue_main_file, content)

def make_commit():
  result = subprocess.run(f"git add . && git commit -m '{args.commit_name}' && git push origin main", capture_output=True, text=True, shell=True)
  print(result.stdout)
  print(result.stderr)

# Initializer
def modify_files():
  modify_vue()
  make_commit()
modify_files()
