import AppController from '../controllers/AppController';

const SetRoutes = (app) => {
  app.get('/status', AppController.getStatus);
  app.get('/stats', AppController.getStats);
};

export default SetRoutes;
