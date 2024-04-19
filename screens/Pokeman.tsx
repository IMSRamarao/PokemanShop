import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../src/components/Header';
import Products from '../src/components/Products';
import Items from '../src/components/Items';

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

interface PokeManItem {
  name: string;
}
[];

const Pokeman = () => {
  const [pokeCard, setPokeCard] = useState<PokeManItem[]>([]);
  const [pokeLoading, setPokeLoading] = useState(true);
  const fetchpokemanData = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await resp.json();
    setPokeCard(data?.results);
    setPokeLoading(false);
  };
  useEffect(() => {
    fetchpokemanData();
  }, []);
  console.log(pokeCard[0]?.name);
  return (
    <View>
      {pokeLoading && (
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
          {pokeCard.map((item, index) => (
            <Items key={index} item={item} />
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
    marginHorizontal: 'auto',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  loadingData: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Pokeman;
