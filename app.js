const express = require('express');
const app = express();
const port = process.env.Port || 8000;

let items = [];

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
 let today = new Date();
 let myDate = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
 };

 let day = today.toLocaleDateString('en-US', myDate);
 res.render('task', {myDay: day, addedItem: items});
});

app.post('/', (req, res) => {
 var item = req.body.addItem;
 items.push(item);
 res.redirect('/');
})

app.listen(port, () => {
 console.log(`Server is running in port ${port}`)
});