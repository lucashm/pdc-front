import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

let api_key = '8pt714olZjTFRR5Lm9hApei7SCpt-BuqBySazIA';

function reverseString(str) {
    return str.split("").reverse().join("");
}

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: -13.3911419, lng: -44.20559552 }}
    >
        {props.isMarkerShown && 
        <Marker position={{ lat: -13.3911419, lng: -44.20559552 }} />}
    </GoogleMap>
))

class Location extends Component {
    render() {
        return (
            <div className="Location">
                <h1>Encontre-nos!</h1>
                <MyMapComponent
                    isMarkerShown
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${reverseString(api_key)}&callback=initMap`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        );
    }
}

export default Location;
