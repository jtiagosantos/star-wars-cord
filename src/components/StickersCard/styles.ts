import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  button {
    width: 46px;
    height: 43px;

    &.button_open_stickers {
      background: #9AA5B1;
    }
  }
`;

export const StickersList = styled.div`
  position: absolute;
  padding: 16px;
  right: 30px;
  bottom: 30px;
  background: #171b1f;
  border-radius: 5px;
  width: 258px;
  height: 256px;

  
  display: flex;
  flex-wrap: wrap;
  gap: 7px;

  overflow-y: auto;

  ::-webkit-scrollbar {
      width: 2px;
    }
    
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }

  img {
    width: 70px;
    height: 70px;
    border: 1px solid #0f1012;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      border-color: #d8f500;
    }
  }
`;