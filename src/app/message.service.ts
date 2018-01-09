import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  getMessages() {
    return this.messages;
  }

  constructor(messages) {
    this.messages = messages;
  }

}
