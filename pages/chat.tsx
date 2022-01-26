import { useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { 
  ChatPageContainer, 
  ChatWrapper, 
  Header, 
  Chat, 
  Footer 
} from "../src/styles/chat-styles";

export default function ChatPage() {
  const [message, setMessage] = useState('');

  return (
    <ChatPageContainer>
      <ChatWrapper>
        <Header>
          <p>Chat</p>
          <p>Logout</p>
        </Header>

        <Chat>
          
        </Chat>

        <Footer>
          <input 
            type="text" 
            placeholder="Insira sua mensagem aqui" 
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
          <button type="button">{<IoMdSend />}</button>
        </Footer>
      </ChatWrapper>
    </ChatPageContainer>
  );
}