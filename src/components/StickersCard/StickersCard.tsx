import { useState } from 'react';
import { FiZap } from 'react-icons/fi';
import { stickers } from '../../constants/stickers';

import { Container, StickersList } from './styles';

interface StickersCardProps {
  onSendStickerMessage: (sticker: string) => void;
  isLoadingSendMessage: boolean;
}

export function StickersCard({ 
  onSendStickerMessage,
  isLoadingSendMessage,
}: StickersCardProps) {
  const [isOpenStickersCard, setIsOpenStickersCard] = useState(false);

  function handleOpenAndCloseStickersCard() {
    setIsOpenStickersCard(isOpenStickersCard ? false : true);
  }

  function handleSendStickerMessage(sticker: string) {
    onSendStickerMessage(sticker);
    handleOpenAndCloseStickersCard();
  }

  return (
    <Container>
      <button 
        type="button" 
        onClick={handleOpenAndCloseStickersCard}
        className='button_open_stickers'
      >
        <FiZap />
      </button>

      {isOpenStickersCard && (
        <StickersList>
        {stickers.map((sticker, index) => (
          <img 
            key={index} 
            src={sticker} 
            onClick={
              () => handleSendStickerMessage(sticker)
            }
          />
        ))}
      </StickersList>
      )}
    </Container>
  );
}