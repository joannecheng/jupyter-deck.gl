import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const data = {
  "GEO_LON": [
    -105.05284909999999,
    -104.88478570000001,
    -104.9868864,
    -104.97983290000002,
    -105.0141616,
    -104.96016940000001,
    -105.05274159999999,
    -104.9606418
  ],

  "GEO_LAT": [
    39.68211229999999,
    39.6530675,
    39.7371469,
    39.703898,
    39.740439,
    39.7304909,
    39.702331,
    39.7670874,
  ]
};

const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam9hbm5lY2hlbmciLCJhIjoiYV9YSTdaZyJ9.tOevZpArPItdszzQl_GLJQ';

ReactDOM.render(<App data={data} mapboxToken={MAPBOX_TOKEN}  />, document.getElementById('root'));
registerServiceWorker();
