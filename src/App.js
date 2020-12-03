import React from "react";
import CheckoutForm from "./Components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BrowserRouter, Route } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51HrSm0Bo4zZxROJmIqJAXL5NsnKhkRNA3aYQNXncEsnqpSGbWMBSWIYlVV8vLtMTTonXwXnqFHxToX9ln7P0GYRj00STdT5ZX3"
);
const App = () => {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={(props) => (
          <Elements stripe={stripePromise}>
            <CheckoutForm {...props} />
          </Elements>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
