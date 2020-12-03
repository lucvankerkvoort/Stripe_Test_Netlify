import React from "react";
import CheckoutForm from "./Components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BrowserRouter, Route } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
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
