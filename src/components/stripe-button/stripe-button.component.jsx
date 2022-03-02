import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { defaultEqualityCheck } from 'reselect';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51KYwerHC1ZQeuGJFMGF9b5rfc8DkUCjEfRDzxHtylJyXPKxGtni39K2qvKjz7rh2zvzzpxR8Cl5NX4LC65fz1O9v00CTrO6jBG';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/enp.svg'
      description={`Your total is $${price}`}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
