import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = props => {
  const { price } = props;
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_weQaHTBG9jbqzPqhDRaZ5RWO00P6xzwrfV";
  const onToken = token => {
    console.log(token);
    alert("Payment Successfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Wechuli Clothing Line"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    ></StripeCheckout>
  );
};

export default StripeButton;
