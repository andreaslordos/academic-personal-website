import json

INDEX_FILE = 'src/index.template.html'
CONFIG_FILE = 'src/config.json'
OUTPUT_FILE = 'public/index.html'

# Opening JSON file
try:
  config = open(CONFIG_FILE)
  configData = json.load(config)
  config.close()

  # Read in the file
  with open(INDEX_FILE, 'r') as file :
    filedata = file.read()

  filedata = filedata.replace('REPLACE_TITLE', configData['name']).replace('REPLACE_DESCRIPTION', configData['metaDescription'])

  with open(OUTPUT_FILE, 'w') as file:
    file.write(filedata)
  print("Setup complete")
except:
  print("Error in writing index.html")