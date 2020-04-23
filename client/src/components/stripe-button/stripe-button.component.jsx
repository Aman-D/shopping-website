import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishKey = "pk_test_79VOEetptZBG6keJc6umqHEd00iTo6L9YV";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: stripePrice,
        token,
      },
    })
      .then((response) => alert("Payment Successful"))
      .catch((err) => {
        console.log(JSON.parse(err));
        alert("Payment was unsuccessful. PLease check your card details");
      });
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
