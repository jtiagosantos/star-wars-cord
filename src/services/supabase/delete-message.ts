import { Message } from '../../types/message';
import { supabase } from './supabase-client';

export async function deleteMessageService(id: number) {
  const { data, error } = await supabase.from('messages').delete().match({ id });

  if (error) {
    throw error;
  }

  const response = data as unknown as Message[];

  return response[0];
}