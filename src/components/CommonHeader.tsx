import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  ArrowSmallLeftIcon,
  ShoppingCartIcon,
} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

type Title = {
  title: string;
};

const CommonHeader = ({title}: Title) => {
  const productData = useSelector((state: any) => state.amazon.products);
  const navigation = useNavigation();
  return (
    <View style={styles.titleContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.pagename}>
        <ArrowSmallLeftIcon size={20} color="#131921" />
        <Text style={styles.pageTitle}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        // @ts-ignore
        onPress={() => navigation.navigate('Cart')}
        style={styles.cartContainer}>
        <ShoppingCartIcon size={25} color="#131921" />
        <View style={styles.viewButton}>
          {productData ? (
            <Text style={styles.viewButtonText}>{productData.length}</Text>
          ) : (
            <Text style={styles.viewButtonText}>0</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingTop: 50,
    paddingLeft: 20,
  },
  pagename: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'flex-start',
  },
  pageTitle: {
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 20,
  },
  cartContainer: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  viewButton: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    marginLeft: 25,
    marginTop: 10,
    padding: 3,
    borderRadius: 100,
  },
  viewButtonText: {
    fontSize: 10,
    fontWeight: '600',
    color: 'white',
  },
});

export default CommonHeader;
