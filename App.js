import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoicGl4ZWxibG9jay1wYiIsImEiOiJja3VzZmxibjMwcnAyMm9vZDM5N2pkeTZuIn0.v23swpuxdhMzslDRyJqFtA',
);

const App = () => {
  const [coordinates] = useState([78.9629, 20.5937]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera zoomLevel={4} centerCoordinate={coordinates} />
          <MapboxGL.PointAnnotation coordinate={coordinates} />
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'blue',
  },
  map: {
    flex: 1,
  },
});

export default App;
