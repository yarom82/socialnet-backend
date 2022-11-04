import express, { Express } from 'express';

import { SocialnetServer } from './setupServer';
import databaseConnection from './setupDatabase';

class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: SocialnetServer = new SocialnetServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
