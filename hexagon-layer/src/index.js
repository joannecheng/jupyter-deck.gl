import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const data = [];

const MAPBOX_TOKEN = 'pk.eyJ1Ijoiam9hbm5lY2hlbmciLCJhIjoiYV9YSTdaZyJ9.tOevZpArPItdszzQl_GLJQ';

ReactDOM.render(<App data={data} mapboxToken={MAPBOX_TOKEN}  />, document.getElementById('root'));
registerServiceWorker();
