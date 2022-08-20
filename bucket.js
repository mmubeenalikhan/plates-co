const products = require('./data.json');

class Bucket {
  constructor(_products = products) {
    this.selected_products = [];
    this.products = _products;
  }

  add(product_code) {
    const result = this.products.find(product => product.code === product_code);
    if (!result) {
      console.log('Given product code did not matched to any of product');
      return;
    }
    this.selected_products.push(result);
  }
  
  total() {
    const red_plates_count = this.selected_products.filter(product => product.code === 'R01').length;
    let total_amount = this.selected_products.reduce((a, b) => a + b.price, 0);
    const red_plate = this.products.find(product => product.code === 'R01');
  
    // minus half of the price of red plate for every second plate
    for (let i = 0; i < parseInt(red_plates_count / 2); i++) {
      total_amount -= parseFloat((red_plate.price / 2).toFixed(2));
    }

    // adding delivery cost
    if (total_amount < 50) {
      total_amount += 4.95
    } else if (total_amount < 90) {
      total_amount += 2.95
    }

    return parseFloat(total_amount.toFixed(2));
  }
}

module.exports = Bucket;