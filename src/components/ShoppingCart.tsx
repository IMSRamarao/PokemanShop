import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ShoppingCartIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ShoppingCart = () => {
  const productData = useSelector((state: any) => state.amazon.products);
  const itemsData = useSelector((state: any) => state.amazon.items);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      // @ts-ignore
      onPress={() => navigation.navigate('Cart')}
      className="relative">
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 0,
            left: 22,
            width: 20,
            height: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            borderRadius: 100,
            zIndex: 2000,
          }}>
          {productData ? (
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
              {productData.length + itemsData.length}
            </Text>
          ) : (
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>0</Text>
          )}
          {/* <Text style={{fontSize:20,fontWeight:"bold"}}>0</Text> */}
        </View>
        <ShoppingCartIcon size={25} color="#131921" style={{marginRight: 10}} />
      </View>
    </TouchableOpacity>
  );
};

export default ShoppingCart;
