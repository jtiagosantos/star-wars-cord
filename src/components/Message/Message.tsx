import { RiDeleteBin2Fill } from 'react-icons/ri'
import { MessageContainer, MessageInfo } from "./styles";

export interface MessageProps {
  username: string;
  userImageUrl: string;
  message: string;
}

export function Message({ username, userImageUrl, message }: MessageProps) {
  return (
    <MessageContainer>
      <div>
        <MessageInfo>
          <img src={userImageUrl} alt={username} />
          <p className='username'>{username}</p>
          <p className='date'>{new Date().toLocaleDateString()}</p>
        </MessageInfo>
        <p className='message_text'>{message}</p>
      </div>
      <RiDeleteBin2Fill />
    </MessageContainer>
  );
}