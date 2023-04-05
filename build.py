import json
import os
import shutil
import subprocess
import glob

print('Installing dependencies')
subprocess.call('cargo install mdbook mdbook-admonish mdbook-mermaid hbs-cli', shell=True)

with open('guides.json') as guides_file:
  guides = json.load(guides_file)['guides']

shutil.rmtree('build', ignore_errors=True)
os.mkdir('build')

for file in glob.glob('site/**.hbs'):
    file_base = os.path.splitext(file[len('site/'):])[0] + '.html'
    os.system('hbs-cli guides.json {} -o build/{}'.format(file, file_base))

non_hbs = list(set(glob.glob("site/**")) - set(glob.glob("site/**.hbs")))
for file in non_hbs:
    shutil.copyfile(file, 'build/' + file[len('site/'):])

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