import cors from 'cors';
import express from 'express';
import compression from 'compression';
import './env';
import routes from './routes';
import initializer from './initializer';

import { APP_HOST, APP_PORT, BASE_URL } from './config/configs';

initializer().then(() => {
  const app = express();

  app.set('port', APP_PORT);
  app.set('host', APP_HOST);
  app.locals.title = process.env.APP_NAME;
  app.locals.version = process.env.APP_VERSION;

  app.use(cors());
  app.use(compression());

  app.use(express.json());

  // routes
  app.use(BASE_URL, routes);

  app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Server started at http://${app.get('host')}:${app.get('port')}${BASE_URL}`);
  });

  process.on('unhandledRejection', (err) => {
    console.error('Unhandled rejection', err);
    process.exit(1);
  });

  process.on('uncaughtException', (err) => {
    console.error('Uncaught exception', err);
    process.exit(1);
  });
});
