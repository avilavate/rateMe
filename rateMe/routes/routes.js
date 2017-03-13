
module.exports = (app) => {
    app.get('/', function (req, res) {
        res.render('index', { 'title': 'RateMe || Index' });
    });
    app.get('/index', function (req, res) {
        res.render('index', { 'title': 'RateMe || Index' });
    });
    app.get('/user', function (req, res) {
        res.render('user', { 'title': 'RateMe || user' });
    });
    app.get('/signup', function (req, res) {
        res.render('signup', { 'title': 'RateMe || signup' });
    });
}


