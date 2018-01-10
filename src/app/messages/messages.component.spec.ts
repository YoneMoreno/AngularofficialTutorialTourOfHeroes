import {MessageService} from '../message.service';

describe('MessageService', () => {

  describe('addMessage', () => {
    it('should add the message to the array', () => {
      const messages: string[] = [];
      const messageService = new MessageService(messages);

      messageService.add('Hero message');

      expect(messageService.getMessages().length).toBe(1);
    });

    describe('clearMessage', () => {
      it('should clear all the messages', () => {

        const messages: string[] = ['anyMessage'];
        const messageService = new MessageService(messages);

        expect(messageService.getMessages().length).toBe(1);
        messageService.clear();

        expect(messageService.getMessages().length).toBe(0);

      });
    });
  });
});
