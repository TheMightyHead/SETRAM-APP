import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-navigation-stack';

export default function Home( { navigation }) {
    return (
     
      <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={{
       latitude: 35.18561,
       longitude: -0.65061,
       
       mapPadding :5,
       showsUserLocation:true,
        followUserLocation:true,
       zoomEnabled: true,
       pitchEnabled:true,
       showsCompass:true,
        showsBuildings:true,
        showsTraffic:true,
        showsIndoors:true,
       }}
       //mapType= 'terrain' 
       >
          <MapView.Marker
            coordinate={{latitude: 35.18530, longitude: -0.65056}}
            title ='garre routiere sud'
            pinColor = "#ffe600"
            
         />
         </MapView>
      
     </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
     left: 0,
     right:0,
     top:0,
     bottom:0,
     position:'absolute',
    }
  });