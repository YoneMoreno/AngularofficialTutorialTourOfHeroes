import {MessageService} from '../message.service';

describe('MessageService', () => {



  describe('getMessage', () => {
    it('should return the messages array', () => {
      const messages: string[] = ['anyMessage', 'newMessage', 'yourNewMessage'];
      const messageService = new MessageService(messages);

      expect(messageService.getMessages()).toEqual(messages);

    });
  });

  describe('addMessage', () => {
    it('should add the message to the array and to be equals to the added one', () => {
        const messages: string[] = [];
      const messageService = new MessageService(messages);

      messageService.add('Hero message');

      expect(messageService.getMessages().length).toBe(1);
      expect(messageService.getMessages()[0].toString()).toEqual('Hero message');
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
