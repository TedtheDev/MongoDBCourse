const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  // Watch for incoming requests of method GET
  // to the route https://localhost:3050/api
  app.get('/api', DriversController.greeting);

  // Watch for incoming requests of method POST
  // to the route https://localhost:3050/api/drivers
  app.post('/api/drivers', DriversController.create);

  // Watch for incoming requests of method UPDATE
  // to the route https://localhost:3050/api/drivers
  app.put('/api/drivers/:id', DriversController.edit);

}
