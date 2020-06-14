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

  this.get('/signatures');
  this.get('/signatures/:id');
  this.post('/signatures');

  this.get('/logos');

  this.passthrough("https://api.cloudinary.com/v1_1/davos-gives/image/upload");
}
