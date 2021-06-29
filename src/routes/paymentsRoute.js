const express = require('express');
const routes = express.Router();

const paymentsController = require('../controllers/paymentsController');

routes.get('/payments/checkout/:id/:email/:description/:amount', paymentsController.checkout)

routes.get('/success', (req, res) => {
    return res.render("html/home.html")
})

routes.get('/pending', (req, res) => {
    return res.render("html/pending.html")
})

routes.get('/failure', (req, res) => {
    return res.render("html/failure.html")
})

routes.get('/register', (req, res) => {
    return res.render("html/register.html")
})

routes.post('/', paymentsController.listenPurchase)

routes.get('/v1/payments/:id', paymentsController.getBuyerInfo)

routes.get




module.exports = routes;