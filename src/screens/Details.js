import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import Colors from '../constant/Colors';
import {convertDate} from '../helper/helper';

const DetailsScreen = props => {
    const data =  props?.navigation?.getParam('data');
    const {item} = data;
    const {trackName,artworkUrl100,artistName,collectionPrice,releaseDate,collectionName} = item;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.flexView}>
          <Image style={styles.imageStyle} source={{uri: artworkUrl100}}></Image>
          <View style={styles.subContainer}>
          <Text style={styles.titleStyle}>{trackName}</Text>
          <Text style={styles.subTitleStyle}>Collection: {collectionName}</Text>
          <Text style={styles.subTitleStyle}>Artist: {artistName}</Text>
          <View style={styles.dateViewStyle}>
            <Text style={[styles.subTitleStyle,styles.flexView]}>Release Date: {convertDate(releaseDate)}</Text>
            <Text style={[styles.subTitleStyle,styles.priceTextView]}>Price: {collectionPrice} $</Text>
          </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

DetailsScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Details',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer:{
    marginHorizontal:15
  },
  imageStyle: {
    width: '100%',
    height: 150,
  },
  titleStyle: {
    fontSize: 17,
    color: Colors.black,
    marginTop: 10,
    fontWeight: '700',
  },
  subTitleStyle: {
    fontSize: 15,
    color: Colors.black,
    marginTop: 10,
    fontWeight: '600',
  },
  dateViewStyle: {
      flexDirection: 'row'
    },
  flexView:{
      flex:2
  },
  priceTextView:{
      flex: 1, 
      textAlign: 'right'
    }
});

export default DetailsScreen;
