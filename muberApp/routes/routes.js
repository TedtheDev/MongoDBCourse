const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  // Watch for incoming requests of method get
  // to the route https://localhost:3050/api
  app.get('/api', DriversController.greeting);
}
