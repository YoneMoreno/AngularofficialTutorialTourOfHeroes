import {MessageService} from '../message.service';

describe('MessageService', () => {

  describe('addMessage', () => {
    it('should add the message to the array', () => {
      let messages: string[] = [];
      const messageService = new MessageService(messages);

      messageService.add('Hero message');

      expect(messageService.getMessages().length).toBe(1);
    });
  });
});
