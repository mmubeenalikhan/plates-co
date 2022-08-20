const Bucket = require('./bucket.js');
describe('Bucket Test Suite:', () => {
  it('bucket with products (B01, G01) have to be a total amount of $37.85', () => {
    const bucket = new Bucket();
    bucket.add('B01');
    bucket.add('G01');
    const total = bucket.total();
    expect(total).toBe(37.85);
  });

  it('bucket with products (R01, R01) have to be a total amount of $54.37', () => {
    const bucket = new Bucket();
    bucket.add('R01');
    bucket.add('R01');
    const total = bucket.total();
    expect(total).toBe(54.37);
  });


  it('bucket with products (R01, G01) have to be a total amount of $60.85', () => {
    const bucket = new Bucket();
    bucket.add('R01');
    bucket.add('G01');
    const total = bucket.total();
    expect(total).toBe(60.85);
  });

  it('bucket with products (B01, B01, R01, R01, R01) have to be a total amount of $98.27', () => {
    const bucket = new Bucket();
    bucket.add('B01');
    bucket.add('B01');
    bucket.add('R01');
    bucket.add('R01');
    bucket.add('R01');
    const total = bucket.total();
    expect(total).toBe(98.27);
  });
});