"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dashboard_1 = require("../services/dashboard");
const dashboard_routes = (app) => {
    app.get('/products-in-orders', productsInOrders);
    app.get('/users-with-orders', usersWithOrders);
    app.get('/five-most-expensive', fiveMostExpensive);
};
const dashboard = new dashboard_1.DashboardQueries();
const usersWithOrders = async (_req, res) => {
    const users = await dashboard.usersWithOrders();
    res.json(users);
};
const productsInOrders = async (_req, res) => {
    const products = await dashboard.productsInOrders();
    res.json(products);
};
const fiveMostExpensive = async (_req, res) => {
    const users = await dashboard.fiveMostExpensive();
    res.json(users);
};
exports.default = dashboard_routes;
