import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ShoppingCartIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Header = () => {
  const productData = useSelector((state: any) => state.amazon.products);
  const navigation = useNavigation();
  return (
    <View className="w-full border-b-[1px] py-1 border-b-gray-400 flex-row px-4 items-center justify-between mb-4">
      <TouchableOpacity
        // @ts-ignore
        onPress={() => navigation.navigate('Home')}
        className="py-2">
        {/* <FastImage
          resizeMode="contain"
          source={require('../img/logo.png')}
          className="w-24 h-12 mt-1"
        /> */}
        <Text className="text-lg text-amazon_blue font-bold underline">
          Noorshop
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        // @ts-ignore
        onPress={() => navigation.navigate('Cart')}
        className="relative">
        <ShoppingCartIcon size={25} color="#131921" />
        <View className="absolute right-0 top-4 bg-amazon_blue w-4 h-4 rounded-full items-center justify-center">
          {productData ? (
            <Text className="text-xs text-white">{productData.length}</Text>
          ) : (
            <Text className="text-xs text-white">0</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
