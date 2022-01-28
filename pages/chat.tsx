import { FormEvent, useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from 'react-query';
import { IoMdSend } from 'react-icons/io';
import { Message } from '../src/components/Message/Message';
import { StickersCard } from '../src/components/StickersCard/StickersCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMessagesService } from '../src/services/supabase/get-messages';
import { sendMessageService } from '../src/services/supabase/send-message';
import { deleteMessageService } from '../src/services/supabase/delete-message';
import { 
  listenMessagesInRealTimeService 
} from '../src/services/supabase/listen-messages-in-real-time';
import { useCustomToast } from '../src/hooks/useCustomToast';
import { useGithubUser } from '../src/hooks/useGithubUser';
import { Message as MessageType } from '../src/types/message';

import {
  ChatPageContainer,
  ChatWrapper,
  Header,
  Chat,
  Footer
} from "../src/styles/chat-styles";

export default function ChatPage() {
  const [messageInput, setMessageInput] = useState('');
  const [messageList, setMessageList] = useState<MessageType[]>([]);

  const router = useRouter();

  const { errorToast, promiseToast } = useCustomToast();
  const { username, userImageUrl, setUsername, setUserImageUrl } = useGithubUser();

  const { isLoading, isError, error, data } = useQuery('messages', getMessagesService);

  useEffect(() => {
    if (isError) {
      console.log('Return error in get messages: ' + error);

      return;
    }

    if (data) {
      setMessageList(data)
    }
  }, [isError, error, data]);

  const { 
    mutate: mutateSendMessage,
    isLoading: isLoadingSendMessage,
  } = useMutation(sendMessageService, {
    onSuccess: (data) => {
      setMessageList([data, ...messageList]);
      listenMessagesInRealTimeService(messageList, setMessageList);
      setMessageInput('');
    },
    onError: (error) => console.log('Return error in send message: ' + error),
  });

  function sendMessage(stickerUrl: string) {
    const message = {
      username,
      user_image_url: userImageUrl,
      message: stickerUrl ? `:sticker:${stickerUrl}` : messageInput,
    }

    mutateSendMessage(message);
  }

  function onSubmitSendMessage(event: FormEvent) {
    event.preventDefault();

    if (!messageInput) {
      errorToast('Campo mensagem é obrigatório.');

      return
    }

    sendMessage('');
  }

  const { mutateAsync: mutateAsyncDeleteMessage } = useMutation(deleteMessageService, {
    onSuccess: (data) => {
      const newMessageList = messageList.filter(message => message.id !== data.id);

      setMessageList([...newMessageList]);

      listenMessagesInRealTimeService(newMessageList, setMessageList);
    },
    onError: (error) => console.log('Return error in delete message: ' + error),
  });

  function handleDeleteMessage(messageId: number) {
    promiseToast(mutateAsyncDeleteMessage(messageId), {
      messagePending: 'Deletando mensagem...',
      messageSuccess: 'Mensagem deletada.',
      messageError: 'Falha ao deletar mensagem.',
    })
  }

  function handleLogout() {
    setUsername('');
    setUserImageUrl('');

    router.push('/');
  }

  return (
    <>
      <ToastContainer />

      <Head>
        <title>Chat | Star Wars Cord</title>
      </Head>

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
                username={message.username}
                message={message.message}
                userImageUrl={message.user_image_url}
                deleteMessage={() => handleDeleteMessage(message.id)}
                createdAt={message.created_at}
              />
            ))}
            
            {isLoading && (
              <div className='loading_container'>
                <img src="/assets/images/loading.gif" alt="loading" />
              </div>
            )}
          </Chat>

          <Footer onSubmit={onSubmitSendMessage}>
            <input
              type="text"
              placeholder="Insira sua mensagem aqui"
              value={messageInput}
              onChange={({ target }) => setMessageInput(target.value)}
            />
            <StickersCard
              onSendStickerMessage={(stickerUrl) => sendMessage(stickerUrl)} 
              isLoadingSendMessage={isLoadingSendMessage}
            />
            <button 
              type="submit" 
              className={`button ${isLoadingSendMessage ? 'is_loading' : ''}`}
              disabled={isLoadingSendMessage}
            >
              {!isLoadingSendMessage && <IoMdSend />}
            </button>
          </Footer>
        </ChatWrapper>
      </ChatPageContainer>
    </>
  );
}