export default function () {
  this.get('/users');

  this.get('/users/me', (schema, request) => {
    return schema.users.find(1);
  })
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

  this.post('session', () => {
    return { "renewal_token": 1345, "access_token": 12345 }
  });



  this.passthrough("https://api.cloudinary.com/v1_1/davos-gives/image/upload");
}
