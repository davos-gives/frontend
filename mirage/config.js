export default function () {

  this.get('/users');
  this.get('/users/:id');
  this.post('/users')

  this.get('/organizations');
  this.post('/organizations')

}
