import { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { IoMdSend } from 'react-icons/io';
import { v4 as uuidv4 } from 'uuid';
import { Message } from '../src/components/Message/Message';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCustomToast } from '../src/hooks/useCustomToast';
import { useGithubUser } from '../src/hooks/useGithubUser';

import { 
  ChatPageContainer, 
  ChatWrapper, 
  Header, 
  Chat, 
  Footer 
} from "../src/styles/chat-styles";

interface Message {
  id: string;
  username: string;
  userImageUrl: string;
  message: string;
}

export default function ChatPage() {
  const [messageInput, setMessageInput] = useState('');
  const [messageList, setMessageList] = useState<Message[]>([]);

  const { errorToast } = useCustomToast();
  const { username, userImageUrl, setUsername, setUserImageUrl } = useGithubUser();

  const router = useRouter();

  function onSubmitSendMessage(event: FormEvent) {
    event.preventDefault();

    if (!messageInput) {
      errorToast('Campo mensagem é obrigatório.');

      return
    }

    const formattedMessage: Message = {
      id: uuidv4(),
      username,
      userImageUrl,
      message: messageInput,
    }

    setMessageList([formattedMessage, ...messageList]);

    setMessageInput('');
  }

  function handleDeleteMessage(messageId: string) {
    const newMessageList = messageList.filter(message => message.id !== messageId);

    setMessageList([...newMessageList]);
  }

  function handleLogout() {
    setUsername('');
    setUserImageUrl('');

    router.push('/');
  }

  return (
    <>
      <ToastContainer />

      <ChatPageContainer>
        <ChatWrapper>
          <Header>
            <p>Chat</p>
            <p onClick={handleLogout}>Logout</p>
          </Header>

          <Chat>
            {messageList.map((message) => (
              <Message 
                key={message.id}
                username={username}
                message={message.message}
                userImageUrl={userImageUrl}
                deleteMessage={() => handleDeleteMessage(message.id)}
              />
            ))}
          </Chat>

          <Footer onSubmit={onSubmitSendMessage}>
            <input 
              type="text" 
              placeholder="Insira sua mensagem aqui" 
              value={messageInput}
              onChange={({ target }) => setMessageInput(target.value)}
            />
            <button type="submit">{<IoMdSend />}</button>
          </Footer>
        </ChatWrapper>
      </ChatPageContainer>
    </>
  );
}