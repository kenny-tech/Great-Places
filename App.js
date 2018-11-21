import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/flower.jpg';
import placeDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends React.Component {
  state = {
      placeName: '',
      places: []
  };

  placeNameChangedHandler = val => {
    this.setState({
        placeName: val,
    });
  };

  placeAddedHandler = () => {
      if(this.state.placeName.trim === ""){
        return;
      }

      this.setState(prevState => {
          return {
              places: prevState.places.concat({
                key: Math.random(),
                name: this.state.placeName,
                image: placeImage
              }),
          }
      });
  };

  placeSelectedHandler = key => {
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== key;
    //     })
    //   };
    // });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail />
            <PlaceInput onPlaceNameChanged={this.placeNameChangedHandler} onPlaceSumbit={this.placeAddedHandler}/>
            <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
