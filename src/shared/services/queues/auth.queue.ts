import { config } from '@root/config';
import { IAuthJob } from '@auth/interfaces/auth.interface';
import { BaseQueue } from '@service/queues/base.queue';
import Logger from 'bunyan';
import { authWorker } from '@worker/auth.worker';

const log: Logger = config.createLogger('authQueue');

class AuthQueue extends BaseQueue {
  constructor() {
    super('auth');
    this.processJob('addAuthUserToDB', 5, authWorker.addAuthUserToDB);
  }

  public addAuthUserJob(name: string, data: IAuthJob) : void {
    log.info(`addAuthUserJob: name: ${name}`);
    this.addJob(name, data);
  }
}

export const authQueue: AuthQueue = new AuthQueue();
