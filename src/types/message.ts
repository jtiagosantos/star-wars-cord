export interface Message {
  id: number;
  user_id: number;
  username: string;
  user_image_url: string;
  message: string;
  created_at: Date;
}