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

def load_react_app():
    text_to_insert = include_mapbox()
    text_to_insert += "<div id=\"root\"></div>"
    text_to_insert += load_3d_heatmap_from_file()

    display_bundle = {
        "text/html": text_to_insert
    }

    load_deck_gl()
    ipython_display.display(display_bundle, raw=True)

def load_deck_gl():
    js_obj = Javascript("$.getScript('deckgl.min.js')")
    ipython_display.display_javascript(js_obj)

import os
import fnmatch
def load_3d_heatmap_from_file():
    heatmap_js_dir = "./3d-heatmap/build/static/js/"
    try:
        filename = fnmatch.filter(os.listdir(heatmap_js_dir), "main.*.js")[0]
    except:
        print("There was an error loading the external JS files.")
        raise

    with open(heatmap_js_dir + filename, "r") as f:
        react_js_app = f.read()

    return "<script type=\"text/javascript\">" + react_js_app + "</script>"

def include_mapbox():
    mapbox_inc_lin = "<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.2/mapbox-gl.css' rel='stylesheet' />"

    return mapbox_inc_lin
