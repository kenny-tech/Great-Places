import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const placeInput = (props) => (
  <View style={styles.inputContainer}>
     <TextInput
       style={{width: 700}}
       placeholder="An awesome place"
       value={props.placeName}
       onChangeText={props.onPlaceNameChanged}
       style={styles.placeInput}
     />
     <Button title="Add" style={styles.placeButton} onPress={props.onPlaceSumbit}/>
 </View>
);

const styles = StyleSheet.create({
  inputContainer: {
      //flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: 'center'
  },
  placeInput: {
      width: "70%"
  },
  placeButton: {
    width: "30%"
  },
});

export default placeInput;
