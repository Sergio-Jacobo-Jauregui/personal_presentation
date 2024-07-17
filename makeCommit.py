import subprocess, argparse, re

# Vue vars 
PATH_MAIN_VUE_FILE = './front_examples/vueFront/dist/index.html'

# Next vars
PATH_MAIN_NEXT_FILE = './front_examples/next-front/out/index.html'
STRINGS_TO_SEARCH = ['/_next/', '/gray.jpeg', '/toggleColors.js', '/favicon.ico']
REPLACEMENT_STRINGS = ['./_next/', './gray.jpeg', './toggleColors.js', './favicon.ico']

# Parser config
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
  string1_to_search = '<script type="module" crossorigin src="'
  string2_to_search = '<link rel="stylesheet" crossorigin href="'

  content = open_file(PATH_MAIN_VUE_FILE)

  if not (string1_to_search+'.' in content):
    content = content.replace(string1_to_search, string1_to_search+'.')

  if not (string2_to_search+'.' in content):
    content = content.replace(string2_to_search, string2_to_search+'.')

  write_file(PATH_MAIN_VUE_FILE, content)

def modify_next():
    content = open_file(PATH_MAIN_NEXT_FILE)

    for i in range(len(STRINGS_TO_SEARCH)):
        content = re.sub(fr'{STRINGS_TO_SEARCH[i]}', fr'{REPLACEMENT_STRINGS[i]}', content)   

    write_file(PATH_MAIN_NEXT_FILE, content)

def make_commit():
  result = subprocess.run(f"git add . && git commit -m '{args.commit_name}' && git push origin main", capture_output=True, text=True, shell=True)
  print(result.stdout)
  print(result.stderr)

# Initializer
def modify_files():
  modify_vue()
  modify_next()
  make_commit()
modify_files()
