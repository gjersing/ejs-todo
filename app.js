const bodyParser = require('body-parser');
const express = require('express');
const date = require(__dirname + '/date.js');

const app = express();

var items = ['Chaos Dungeons', 'Guardian Raids', 'Una Dailies'];
var workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req,res) => {
  res.render('list', {listTitle: date.getDate(), newItems: items});
});

app.post('/', (req,res) => {

  var item = req.body.newToDo;

  if (req.body.list === 'Work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);

    res.redirect('/');
  }
});

app.get('/work', (req,res) => {
  res.render('list', {listTitle: 'Work', newItems: workItems});
});

app.get('/about', (req,res) => {
  res.render('about');
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
