import React, { useRef, useState } from "react";
import { Button, View } from "react-native";

import MapView, { Marker, Callout, Geojson, Polyline } from "react-native-maps";

const INITIAL_REGION = {
  latitude: 45.48,
  longitude: 21.3,
  latitudeDelta: 3.5,
  longitudeDelta: 3.5,
};
const App = () => {
  const mapRef = useRef();
  const [tooltip, setTooltip] = useState(false);

  const Cars_region = [
    { id: "dasdada", latitude: 45.48, longitude: 21.3 },
    { id: "asda", latitude: 50.4, longitude: 13.7 },
  ];
  const animateToRegion = () => {
    const region = {
      latitude: 45.48,
      longitude: 21.3,
      latitudeDelta: 1.5,
      longitudeDelta: 1.5,
    };

    mapRef.current.animateToRegion(region, 2000);
  };
  const myPlace = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Point",
          coordinates: [21.5, 45.8],
        },
      },
    ],
  };
  return (
    <>
      <MapView ref={mapRef} initialRegion={INITIAL_REGION} style={{ flex: 1 }}>
        <Geojson
          geojson={myPlace}
          strokeColor="green"
          fillColor="green"
          strokeWidth={4}
        />

        <Callout
          tooltip
          onPress={() => {
            setTooltip(!tooltip);
            console.log(tooltip);
          }}
        >
          {Cars_region.map((element, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: element.latitude,
                longitude: element.longitude,
              }}
            />
          ))}
        </Callout>
      </MapView>
      <Button onPress={animateToRegion} title="Animate" />
    </>
  );
};

export default App;
