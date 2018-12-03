let express = require('express');
let bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
let app = express();

let stat = "Pending";
let delivery = [];

app.get('/delivery-service',(req,res) => {
  res.status(200).json(stat);
});

app.get('/delivery-service/:id',(req,res) => {
  res.status(200).json(delivery);
});

/*app.get('/product-service/:id', (req,res) => {
  res.status(200).json(carts[req.params.id]);
})*/

app.post('/delivery-service',jsonParser,(req,res) => {
  delivery = req.body.cart;
  res.status(200).json({id:123456,status:stat});
});

app.post('/delivery-service/deliver',jsonParser,(req,res) => {
  stat = "Delivered!"
  res.status(200).json(stat);
});

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Node server listening on port ${port}`);
});
