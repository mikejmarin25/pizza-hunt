const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({
  pizzaName: {
    type: String,
    required: true,
    trim: true
  },
  createdBy: {
    type: String,
    required: true,
    trim: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },
 size: {
  type: String,
  required: true,
  enum: ['Personal', 'Small', 'Medium', 'Large', 'Extra Large'],
  default: 'Large'
},
  toppings: []
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;
