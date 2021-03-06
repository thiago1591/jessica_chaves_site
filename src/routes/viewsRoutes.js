const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.status(200).render("html/home.html")
})
routes.get('/register', (req, res) => {
    return res.render("html/ebook/register.html")
})
routes.get('/payments/success', (req, res) => {
    return res.render("html/ebook/success.html")
})
routes.get('/payments/pending', (req, res) => {
    return res.render("html/ebook/pending.html")
})
routes.get('/payments/failure', (req, res) => {
    return res.render("html/ebook/failure.html")
})

routes.get('/ebook', (req, res) => {
    return res.status(200).render("html/ebook/home.html")
})

//testing
routes.get('/teste', (req, res) => {
    return res.status(200).render("html/teste_ebook.html")
})


module.exports = routes;