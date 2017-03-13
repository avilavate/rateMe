
module.exports = (app) => {
    app.get('/', function (req, res) {
        res.render('index', { 'title': 'RateMe || Index' });
    });
    app.get('/', function (req, res) {
        res.render('index', { 'title': 'RateMe || Index' });
    });
    app.get('/user', function (req, res) {
        res.render('user', { 'title': 'RateMe || user' });
    });
}


