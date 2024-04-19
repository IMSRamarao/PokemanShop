import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CommonHeader from '../src/components/CommonHeader';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CartProduct from '../src/components/CartProduct';
import FormattedPrice from '../src/components/FormattedPrice';
import {resetCart} from '../redux/AmazonSlice';
import PokeCartProduct from '../src/components/PokeCartProduct';

const Cart = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.amazon.products);
  const itemsData = useSelector((state: any) => state.amazon.items);
  const navigation = useNavigation();
  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: any) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);

  return (
    <View>
      {productData.length > 0 || itemsData.length > 0 ? (
        <View>
          <FlatList
            data={productData}
            renderItem={({item}) => (
              <View>
                <CartProduct item={item} />
              </View>
            )}
            keyExtractor={item => item.id}
          />
          <FlatList
            data={itemsData}
            renderItem={({item}) => (
              <View>
                <PokeCartProduct item={item} />
              </View>
            )}
            keyExtractor={item => item.id}
          />
          <View style={styles.total_Cont}>
            <Text style={styles.total_text}>
              Total Amount:{' '}
              <Text style={styles.total_cost}>
                <FormattedPrice amount={totalAmt} />
              </Text>
            </Text>
          </View>
          <View style={styles.buttons_Cont}>
            <View>
              <TouchableOpacity
                onPress={() => dispatch(resetCart())}
                style={styles.resetButton}>
                <Text style={styles.resetButtonText}>Reset cart</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                // @ts-ignore
                onPress={() => navigation.navigate('Payment')}
                style={styles.procedeButton}>
                <Text style={styles.procedeButtonText}>
                  Proceed to Checkout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.cartContainer}>
          <Text style={styles.emptyCart}>Your cart is Empty!</Text>

          <TouchableOpacity
            // @ts-ignore
            style={styles.procedeButton}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.procedeButtonText}>Go to Shopping</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  total_Cont: {
    alignItems: 'flex-end',
    padding: 10,
  },
  total_text: {
    fontWeight: '500',
  },
  total_cost: {
    fontWeight: 'bold',
  },
  buttons_Cont: {
    alignItems: 'center',
    padding: 10,
  },
  resetButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  resetButtonText: {
    color: 'white',
  },
  procedeButton: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  procedeButtonText: {
    color: 'white',
  },
  cartContainer: {
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  emptyCart: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Cart;
