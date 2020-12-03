const stripe = require("stripe")(
  "sk_test_51HrSm0Bo4zZxROJm9NZ7UiIXDASHIOmEcB9IWljeM4QE3ivMLkYT6fjnNdiPGIZOnxJrxK6Plbjg6x1LuTqjc0O700yODooxCa"
);

exports.handler = async (event) => {
  try {
    const { paymentDetails } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1350,
      currency: "usd",
      ...paymentDetails,
      confirm: true,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
