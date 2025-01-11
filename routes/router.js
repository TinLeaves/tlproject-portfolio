const express = require('express');

class Router {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', this.renderHomePage);
    this.router.get('/projects', this.renderProjectsPage);
    this.router.get('/contact', this.renderContactPage);
  }

  renderHomePage(req, res) {
    res.render('pages/home', { title: 'Home' });
  }

  renderProjectsPage(req, res) {
    res.render('pages/projects', { title: 'Projects' });
  }

  renderContactPage(req, res) {
    res.render('pages/contact', { title: 'Contact' });
  }

  getRouter() {
    return this.router;
  }
}

module.exports = new Router().getRouter();
