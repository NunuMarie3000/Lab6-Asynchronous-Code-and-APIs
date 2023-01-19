import React, { Component } from "react";
import axios from "axios";

import Static from "./Static";
// import Weather from "./Weather";
import Yelp from "./Yelp";
import Movies from "./Movies";

export default class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: "",
      data: "",
    };
  }

  componentDidMount = () => {
    this.createMap();
    this.createWeather();
  };

  createMap = () => {
    const map = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.props.lat},${this.props.lon}&zoom=16&size=480x480&markers=icon:small-blue-cutout|${this.props.lat},${this.props.lon}`;

    this.setState({ src: map });
  };
  createWeather = async () => {
    const endpoints = [
      // `${process.env.REACT_APP_URL}weather/?lat=${this.props.lat}&lon=${this.props.lon}`,
      `${process.env.REACT_APP_URL}movie/?city=${this.props.city}`,`${process.env.REACT_APP_URL}yelp/?city=${this.props.city}`
    ];
    // axios.all() so i can make both requests concurrently/at the same time, and store all data in state
    await axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((data) => this.setState({ data }))
      .catch((err) =>
        console.log("There seems to be an error, try again", err)
      );
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0)'
        }}
      >
        <div>
          <h3>Latitude: {this.props.lat}</h3>{" "}
          <img
            style={{ width: "1rem" }}
            src={
              this.props.icon
                ? this.props.icon
                : "https://locationiq.org/static/images/mapicons/poi_boundary_administrative.p.20.png"
            }
            alt="icon"
          />{" "}
          <h3>Longitude: {this.props.lon}</h3>
        </div>
        <div>
          <h1>{this.props.display_name}</h1>

          <div className="map-and-forecast">
            {/*map and forecast info */}
            <Static title={this.props.display_name} src={this.state.src} lat={this.props.lat} lon={this.props.lon}/>

            {/* {this.state.data !== "" && <Weather weather={this.state.data[0].data} city={this.props.city}/>} */}
          </div>
            
          <div className="yelp">

          {this.state.data !== "" && <Yelp city={this.props.city} food={this.state.data[1].data}/>}
          {/* {this.state.data !== "" && <Yelp city={this.props.city} food={this.state.data[2].data}/>} */}
          </div>

          <div className="movies-container">
            {/*movies, maybe a carousel? */}
            {this.state.data !== "" && <Movies city={this.props.city} movies={this.state.data[0].data} />}
            {/* {this.state.data !== "" && <Movies city={this.props.city} movies={this.state.data[1].data} />} */}
          </div>
        </div>
      </div>
    );
  }
}