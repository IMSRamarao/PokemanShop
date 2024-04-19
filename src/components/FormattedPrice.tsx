import {Text} from 'react-native';
import React from 'react';
type Amount = {
  amount: number;
};

const FormattedPrice = ({amount}: Amount) => {
  const formattedAmount = new Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  return <Text>{formattedAmount}</Text>;
};

export default FormattedPrice;
