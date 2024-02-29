import express from 'express';
import { prefix } from '#root/config/index.js';
import routes from '#root/api/routes/index.js';
import bodyParser from 'body-parser';
import cors from 'cors';

export default (app) => {
  app.enable('trust proxy');
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.static('public'));
  app.disable('x-powered-by');
  app.disable('etag');

  app.use(prefix, routes);

  app.get('/', (_req, res) => {
    return res
      .status(200)
      .json({
        resultMessage: 'Test message',
      })
      .end();
  });

  app.use((_req, _res, next) => {
    const error = new Error('Endpoint could not find!');
    error.status = 404;
    next(error);
  });
};
