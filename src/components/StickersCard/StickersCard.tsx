import { useState } from 'react';
import { FiZap } from 'react-icons/fi';
import { stickers } from '../../constants/stickers';
import { Button } from '../Button/Button';

import { Container, StickersList } from './styles';

interface StickersCardProps {
  onSendStickerMessage: (sticker: string) => void;
}

export function StickersCard({ 
  onSendStickerMessage,
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
      <Button 
        backgroundColor='#9AA5B1'
        colorSvg='#d8f500'
        sizeSvg={1.5}
        type="button" 
        onClick={handleOpenAndCloseStickersCard}
        className='button_open_stickers'
      >
        <FiZap />
      </Button>

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