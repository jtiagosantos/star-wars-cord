import { supabase } from './supabase-client';
import { Message } from '../../types/message';

export async function getMessagesService() {
  const { data, error } = await supabase.from('messages').select('*');

  if (error) {
    throw error;
  }

  return data as unknown as Message[];
}