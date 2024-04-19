import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonHeader from '../src/components/CommonHeader';
import {useSelector} from 'react-redux';
import FormattedPrice from '../src/components/FormattedPrice';

const Payment = () => {
  const productData = useSelector((state: any) => state.amazon.products);
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
      <View className="p-4 gap-1">
        <Text className="text-gray-800">Your Payment details as follows:</Text>
        <Text className="text-lg text-black">
          Total amount:{' '}
          <Text className="font-bold text-amazon_blue">
            <FormattedPrice amount={totalAmt} />
          </Text>
        </Text>
        <TouchableOpacity className="w-full bg-amazon_blue p-3 rounded-lg">
          <Text className="text-white text-lg font-semibold text-center">
            Stripe Payment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;
