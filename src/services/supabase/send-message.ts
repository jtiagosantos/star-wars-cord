import { supabase } from './supabase-client';
import { Message } from '../../types/message';

export async function sendMessageService(
  message: Omit<Message, 'id' | 'created_at'>
) {
  const { data, error } = await supabase.from('messages').insert([message]);

  if (error) {
    throw error;
  }

  return data as unknown as Message[];
}