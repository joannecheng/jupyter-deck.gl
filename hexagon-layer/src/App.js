import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import PropTypes from 'prop-types';

import HeatmapOverlay from './heatmap-overlay';

class App extends Component {
  static get defaultViewport() {
    return {
      longitude: -104.9903,
      latitude: 39.792,
      zoom: 8.6,
      minZoom: 5,
      maxZoom: 15,
      pitch: 40.5,
      bearing: -127.396674584323023
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        ...App.defaultViewport,
        height: 500,
        width: 500
      },
      data: props.data || []
    };
  }

  render() {
    const { viewport, data } = this.state;

    return (
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={(newViewport) => this.setState(newViewport)}
        mapboxApiAccessToken={this.props.mapboxToken}
      >

        <HeatmapOverlay viewport={viewport} data={data} />

      </ReactMapGL>);
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  mapboxToken: PropTypes.string.isRequired
};

export default App;
