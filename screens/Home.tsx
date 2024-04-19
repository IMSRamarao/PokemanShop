import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../src/components/Header';
import Products from '../src/components/Products';

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}
[];

const Home = () => {
  const [product, setProduct] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const resp = await fetch(
      'https://fakestoreapiserver.reactbd.com/amazonproducts',
    );
    const data = await resp.json();
    setProduct(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View >
      {loading && (
        <View style={styles.loader}>
          <Text style={styles.loadingData}>Data is loading...</Text>
        </View>
      )}

      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Pokeman Store</Text>
          <Text style={styles.app_Des}>
            This is Pokeman app to to get the data of pokeman
          </Text>
        </View>
        <View style={styles.list}>
          {product.map(item => (
            <Products key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  app_Des: {
    fontSize: 16,
    fontWeight: '400',
    padding: 10,
  },
  list: {
    width: '100%',
  },
  loadingData: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Home;
