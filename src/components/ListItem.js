import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Colors from '../constant/Colors';

export const ListItem = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPressItem}>
      <View style={styles.subcontainer}>
        <Image style={styles.imageStyle} source={{uri: props.imageUrl}}></Image>
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle}>{props.title}</Text>
          <Text style={styles.subTitleStyle}>{props.artistName}</Text>
          <Text style={styles.subTitleStyle}>Price: {props.price}$</Text>
          <Text style={styles.subTitleStyle}>Release Date: {props.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 110,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  subcontainer: {
    flexDirection: 'row',
  },
  titleStyle: {
    marginTop: 10,
    fontWeight: '700',
    fontSize: 15,
  },
  subTitleStyle: {
    fontWeight: '500',
    fontSize: 14,
  },
  imageStyle: {
    height: 110,
    width: 110,
    borderRadius: 5,
  },
  infoStyle: {
    marginLeft: 10,
  },
});
