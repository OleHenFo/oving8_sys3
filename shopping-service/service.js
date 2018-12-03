let express = require('express');
let bodyParser = require('body-parser');
let http = require('http');
var request = require('request');

let app = express();
app.use(bodyParser.json());

let cart = [];

app.get('/shopping-service',(req,res) => {
  res.status(200).json(cart);
});

app.get('/product-service/:id', (req,res) => {
  res.status(200).json(carts[req.params.id]);
})

app.post('/shopping-service',(req,res) => {
  cart.push(req.body.id);
  res.status(200).json(cart);
});

app.post('/shopping-service/send',(req,res) => {
  //request.post('/delivery-service', {cart:cart}, function(err,httpResponse,body){res.status(200).json(body);})
  res.status(200);
});

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Node server listening on port ${port}`);
});
