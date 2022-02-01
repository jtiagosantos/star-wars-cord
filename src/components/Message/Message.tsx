import { RiDeleteBin2Fill } from 'react-icons/ri'
import { useGithubUser } from '../../hooks/useGithubUser';

import { MessageContainer, MessageInfo } from "./styles";

export interface MessageProps {
  username: string;
  userId: number;
  userImageUrl: string;
  message: string;
  deleteMessage: () => void;
  createdAt: Date;
}

export function Message({ 
  username, 
  userId,
  userImageUrl, 
  message, 
  deleteMessage,
  createdAt,
}: MessageProps) {
  const { userId: githubUserId } = useGithubUser();

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
        {message.startsWith(':sticker:') ? 
          <img 
            className='message_sticker' 
            src={message.replace(':sticker:', '')} 
          />
          :
          <p className='message_text'>{message}</p>}
      </div>
      <div>
        {userId === githubUserId && <RiDeleteBin2Fill onClick={deleteMessage} />}
      </div>
    </MessageContainer>
  );
}