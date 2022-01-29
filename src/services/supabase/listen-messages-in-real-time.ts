import { Dispatch, SetStateAction } from 'react';
import { supabase } from './supabase-client';
import { Message } from '../../types/message';

export function listenMessagesInRealTimeService(
  messageList: Message[],
  setMessageList: Dispatch<SetStateAction<Message[]>>
) {
  return supabase.from('messages').on('*', (data) => {
    if (data.eventType === 'INSERT') {
      setMessageList(() => {
        return [
          data.new,
          ...messageList,
        ];
      });

      return
    }

    if (data.eventType === 'DELETE') {
      setMessageList(() => {
        return [
          ...messageList,
        ];
      });
    }

  }).subscribe();
}