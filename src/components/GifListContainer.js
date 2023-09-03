import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = 'dolphin') => {
    const apiKey = 'F5V44Hls6i4YU4v6X3zp1JBvnitaBMVh';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const gifs = data.data.slice(0, 3); // Get the first 3 gifs
        this.setState({ gifs });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
