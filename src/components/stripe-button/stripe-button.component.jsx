import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishKey = "pk_test_79VOEetptZBG6keJc6umqHEd00iTo6L9YV";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing World"
      billingAddress
      shippingAddress
      description={`Your Total price is ${price}`}
      currency="INR"
      token={onToken}
      amount={stripePrice}
      panelLabel="Pay Now"
      stripeKey={publishKey}
    />
  );
};

export default StripeButton;
