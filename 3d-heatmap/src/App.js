import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

import HeatmapOverlay from './heatmap-overlay.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        ...HeatmapOverlay.defaultViewport,
        height: 500,
        width: 500
      },
      data: props.data || []
    };
  }

  render() {
    const {viewport, data} = this.state;

    return (<ReactMapGL
            {...viewport}
            onViewportChange={(viewport) => this.setState(viewport)}
            mapboxApiAccessToken={this.props.mapboxToken}
        >
            <HeatmapOverlay viewport={viewport} data={data}/>
      </ReactMapGL>
    );
  }
}

export default App;
