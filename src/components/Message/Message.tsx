import { RiDeleteBin2Fill } from 'react-icons/ri'
import { MessageContainer, MessageInfo } from "./styles";

export interface MessageProps {
  username: string;
  userImageUrl: string;
  message: string;
  deleteMessage: () => void;
  createdAt: Date;
}

export function Message({ 
  username, 
  userImageUrl, 
  message, 
  deleteMessage,
  createdAt,
}: MessageProps) {
  return (
    <MessageContainer>
      <div>
        <MessageInfo>
          <img src={userImageUrl} alt={username} />
          <p className='username'>{username}</p>
          <p className='date'>
            {new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))}
          </p>
        </MessageInfo>
        <p className='message_text'>{message}</p>
      </div>
      <RiDeleteBin2Fill onClick={deleteMessage} />
    </MessageContainer>
  );
}