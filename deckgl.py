# -*- coding: utf-8 -*-

'''
Deck.gl visualizations in Jupyter Notebook
'''

'''
importing ipython
'''
from importlib import import_module

ipython_display = import_module('IPython.display')

'''
Displaying
'''

from IPython.display import Javascript
import json

def draw_hexagon_layer(lngs, lats):
    text_to_insert = include_mapbox()
    text_to_insert += "<div id=\"root\"></div>"
    text_to_insert += insert_coords(lngs, lats)
    text_to_insert += load_hexagon_layer_from_file()

    display_bundle = {
        "text/html": text_to_insert
    }

    ipython_display.display(display_bundle, raw=True)

def insert_coords(lngs, lats):
    return """
    <script type=\"text/javascript\">
      window.coords={0}
    </script>
    """.format(convert_coords(lngs, lats))

def convert_coords(lngs, lats):
    return json.dumps(list(zip(lngs, lats)))

import os
import fnmatch
def load_hexagon_layer_from_file():
    heatmap_js_dir = "./hexagon-layer/build/static/js/"
    try:
        filename = fnmatch.filter(os.listdir(heatmap_js_dir), "main.*.js")[0]
    except:
        print("There was an error loading the external JS files.")
        raise

    with open(heatmap_js_dir + filename, "r") as f:
        react_js_app = f.read()

    return "<script type=\"text/javascript\">" + react_js_app + "</script>"

def include_mapbox():
    return "<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.2/mapbox-gl.css' rel='stylesheet' />"
