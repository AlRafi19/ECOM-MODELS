const mongoose = require('mongoose');
const CartItem = require('../models/CartItemModel');
const Order = require('../models/OrderModel');

const removeUserAssociations = async function (userId) {
  try {
    // Remove associated cart items
    await CartItem.remove({ user: userId });

    // Remove associated orders
    await Order.remove({ user: userId });
  } catch (error) {
    throw error;
  }
};

module.exports = { removeUserAssociations };
