import { FormEvent, useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from 'react-query';
import { IoMdSend } from 'react-icons/io';
import { HiOutlineLogout } from 'react-icons/hi';
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
import { Button } from '../src/components/Button/Button';

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
  const { 
    username, 
    userId, 
    userImageUrl, 
    setUsername, 
    setUserImageUrl 
  } = useGithubUser();

  const { isLoading, isError, error, data } = useQuery('messages', getMessagesService);

  useEffect(() => {
    if (!username) {
      router.push('/401');
      
      return
    }
    
    if (isError) {
      console.log('Return error in get messages: ' + error);

      return;
    }

    if (data) setMessageList(data)
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
      user_id: userId,
      username,
      user_image_url: userImageUrl,
      message: stickerUrl ? `:sticker:${stickerUrl}` : messageInput,
    }

    mutateSendMessage(message);
  }

  function onSubmitSendMessage(event: FormEvent) {
    event.preventDefault();

    if (!messageInput) {
      errorToast('Campo mensagem ?? obrigat??rio.');

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
        <title>Bate-papo | Star Wars Cord</title>
      </Head>

      <ChatPageContainer>
        <ChatWrapper>
          <Header>
            <p>Bate-papo</p>
            <div>
              <img src={userImageUrl} alt={username} />
              <p onClick={handleLogout}>Sair <HiOutlineLogout /></p>
            </div>
          </Header>

          <Chat>
            {messageList.map((message) => (
              <Message
                key={message.id}
                username={message.username}
                userId={message.user_id}
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
            />
            <Button 
              backgroundColor='#3F9142'
              colorSvg='#FFFFFF'
              sizeSvg={1.7}
              type="submit" 
              className={isLoadingSendMessage ? 'is_loading' : ''}
              disabled={isLoadingSendMessage}
            >
              {!isLoadingSendMessage && <IoMdSend />}
            </Button>
          </Footer>
        </ChatWrapper>
      </ChatPageContainer>
    </>
  );
}