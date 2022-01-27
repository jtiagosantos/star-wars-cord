import { supabase } from './supabase-client';

export interface Message {
  id: string;
  username: string;
  user_image_url: string;
  message: string;
  created_at: Date;
}

export async function getMessagesService() {
  const { data, error } = await supabase.from('messages').select('*');

  if (error) {
    throw error;
  }

  return data as unknown as Message[];
}