var express = require('express');

app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/store', function(req, res, next) {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.get('/store', function(req, res) {
    res.send('To jest sklep');
});

app.get('/first-template', function(req, res) {
    res.render('first-template');
}); 

app.get('/dynamic-view', function(req, res) {
    res.render('dynamic-view', {
        name: 'Moja dynamiczna strona',
        url: 'http://google.com'
    });
});

app.get('/dynamic-view2', function(req, res) {
    res.render('dynamic-view2', {
        user: {
            name: 'Radek',
            age: "27"
        }
    });
});

app.get('/content', function(req, res) {
    res.render('content');
})

app.listen(3000);
app.use(function(req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy znaleźć tego czego szukasz!');
});
