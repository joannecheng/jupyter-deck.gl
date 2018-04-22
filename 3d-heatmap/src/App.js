import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class DeckGLOverlay {
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

}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewport: {
        ...DeckGLOverlay.defaultViewport,
        height: 500,
        width: 500
      },
      data: null
    };
  }

  render() {
    return (<ReactMapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState(viewport)}
            mapboxApiAccessToken={this.props.mapboxToken}
        >
      </ReactMapGL>
    );
  }
}

export default App;
