import { config } from '@root/config';
import { BaseQueue } from '@service/queues/base.queue';
import Logger from 'bunyan';
import { userWorker } from '@worker/user.worker';

const log: Logger = config.createLogger('userQueue');

class UserQueue extends BaseQueue {
  constructor() {
    super('user');
    this.processJob('addUserToDB', 5, userWorker.addUserToDB);
  }

  public addUserJob(name: string, data: any): void {
    log.info(`addUserJob: name: ${name}`);
    this.addJob(name, data);
  }
}

export const userQueue: UserQueue = new UserQueue();
