let express = require('express');
let parser = require('body-parser');

let app = express();

let products = [];

function addProducts(){
  let p1 = {id:0,name:'ost',price:45};
  let p2 = {id:1,name:'spiker',price:50};
  let p3 = {id:2,name:'smør',price:24};
  let p4 = {id:3,name:'agurk',price:12};
  let p5= {id:4,name:'sopp',price:30};

  products.push(p1);
  products.push(p2);
  products.push(p3);
  products.push(p4);
  products.push(p5);
}

app.get('/product-service',(req,res) => {
  res.status(200).json(products);
})

app.get('/product-service/:id', (req,res) => {
  res.status(200).json(products[req.params.id]);
})

let port = process.env.PORT || 8080;
app.listen(port, () => {
    addProducts();
    console.log(`Node server listening on port ${port}`);
});
