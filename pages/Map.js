import React, { useRef, useState } from "react";
import { Button, View } from "react-native";
import BackButton from "../src/components/BackButton";
import Header from "../src/components/Header";
import Background from "../src/components/Background";
import MapView, { Marker, Callout, Geojson, Polyline } from "react-native-maps";

const INITIAL_REGION = {
  latitude: 45.48,
  longitude: 21.3,
  latitudeDelta: 3.5,
  longitudeDelta: 3.5,
};
const App = ({ navigation, route }) => {
  const { coords } = route.params;
  const mapRef = useRef();
  const [tooltip, setTooltip] = useState(false);
  console.log(coords, coords.latitude, coords.longitude);
  const Cars_region = [
    { latitude: coords.latitude, longitude: coords.longitude },
  ];

  const animateToRegion = () => {
    const region = {
      latitude: coords.latitude + 0.5,
      longitude: coords.longitude + 0.5,
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
      <Header>
        <BackButton goBack={navigation.goBack} />
      </Header>
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
