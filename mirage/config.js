export default function () {

  this.get('/users');
  this.get('/users/:id');
  this.post('/users')

  this.get('/organizations');
  this.get('/organizations/:id');
  this.post('/organizations');

  this.get('/campaigns');
  this.get('/campaigns/:id');
  this.post('/campaigns');

  this.get('/donations');
  this.get('/donations/:id');
  this.get('/receipts');
  this.get('/receipts/:id');
  this.get('/slugs');

  this.get('signatures');
  this.get('signatures/:id')
}
