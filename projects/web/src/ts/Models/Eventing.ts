import { Callback } from './Type';

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  //registering event in events object
  on  = (eventName: string, callback: Callback) => {
    const handler = this.events[eventName] || [];
    handler.push(callback);
    this.events[eventName] = handler;
  }

  //trigger event using foreach
  trigger = (eventName: string): void => {
    const handler = this.events[eventName];

    if (!handler || handler.length === 0) {
      throw new Error('event doesnt exists: custom Error');
    }

    handler.forEach((callback: Callback) => {
      callback();
    });
  }
}
