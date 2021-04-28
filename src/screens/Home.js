import React, {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import * as itemActions from '../store/actions/item';
import Colors from '../constant/Colors';
import {ListItem} from '../components/ListItem';
import {convertDate} from '../helper/helper';

const HomeScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshig, setIsRefreshig] = useState(false);
  const [error, setError] = useState();
  const products = useSelector(state => state.products.songs);
  const dispatch = useDispatch();

  const loadProduct = useCallback(async () => {
    setError(null);
    setIsRefreshig(true);
    try {
      await dispatch(itemActions.fetchProducts());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshig(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadProduct().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadProduct]);

  const onItemPress = data => {
    props.navigation.navigate('detailsScreen', {
      data,
    });
  };

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error occured.</Text>
        <Button
          title="Try again"
          onPress={loadProduct}
          color={Colors.primary}></Button>
      </View>
    );
  }

  if (!isLoading && products.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No Data found.</Text>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{backgroundColor: Colors.grey}}
        data={products}
        keyExtractor={() => {
          return (
            new Date().getTime().toString() +
            Math.floor(
              Math.random() * Math.floor(new Date().getTime()),
            ).toString()
          );
        }}
        renderItem={(itemData, index) => (
          <ListItem
            onPressItem={onItemPress.bind(this, itemData)}
            imageUrl={itemData.item.artworkUrl100}
            title={itemData.item.trackName}
            artistName={itemData.item.artistName}
            price={itemData.item.collectionPrice}
            date={convertDate(itemData.item.releaseDate)}
          />
        )}></FlatList>
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Home',
    headerTitleStyle: {
      paddingHorizontal: 20,
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemFlatListStyle: {
    marginTop: 5,
  },
});

export default HomeScreen;
