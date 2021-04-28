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

const DetailsScreen = props => {
  const songTitle = props?.navigation?.getParam('title');
  const imageUrl = props?.navigation?.getParam('imageUrl');
  const artistName = props?.navigation?.getParam('artistName');
  const price = props?.navigation?.getParam('price');
  const date = props?.navigation?.getParam('date');
  const collectionName = props?.navigation?.getParam('collectionName');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.flexView}>
          <Image style={styles.imageStyle} source={{uri: imageUrl}}></Image>
          <View style={styles.subContainer}>
          <Text style={styles.titleStyle}>{songTitle}</Text>
          <Text style={styles.subTitleStyle}>Collection: {collectionName}</Text>
          <Text style={styles.subTitleStyle}>Artist: {artistName}</Text>
          <View style={styles.dateViewStyle}>
            <Text style={[styles.subTitleStyle,styles.flexView]}>Release Date: {date}</Text>
            <Text style={[styles.subTitleStyle,styles.priceTextView]}>Price: {price} $</Text>
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
