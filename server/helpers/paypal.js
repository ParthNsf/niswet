// const paypal = require('@paypal/checkout-server-sdk');

// // Environment setup (sandbox or live)
// let environment = new paypal.core.SandboxEnvironment(
//   "", // your client ID
//   "" // your client secret
// );

// let client = new paypal.core.PayPalHttpClient(environment);

// module.exports = { client };



const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', // or 'live' for production
  client_id: "ARQb3DGUSOQO3MmxxD7IvptvEYSwhPXjXQrQq_kopxQpQHQp96kB6pVwi0dsvKRJEzKOhWH2cs-DIjhL",
  client_secret: "ELdfzHFWnDVTGKrfBtt3nZ7LkHw9CpfsxroOFuEYBOfLUaIMMlorfyKPk7fBuOwRjrEnQ4jG8DF21ket",
});

module.exports = paypal;
