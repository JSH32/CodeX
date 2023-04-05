import json
import os
import shutil
import subprocess

with open('guides.json') as guides_file:
  guides = json.load(guides_file)['guides']

shutil.rmtree('build', ignore_errors=True)
os.mkdir('build')

# Build index.html
os.system('hbs-cli guides.json index.hbs -o build/index.html')

# Build guides
for guide in guides:
    print('Building {}'.format(guide['title']))
    book_path = os.path.join(os.getcwd(), guide['location'])

    # Build
    subprocess.Popen(["mdbook", "build"], cwd=book_path).wait()

    # Copy to build folder
    shutil.copytree(
        os.path.join(book_path, "book"),
        os.path.join(*[os.getcwd(), "build", guide['location']])
    ) 