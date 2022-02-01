import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;

  svg {
    color: #9AA5B1;
    font-size: 1.5625rem;

    transition: filter 0.2s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }

  div {
    .message_text {
      color: #ffffff;
      font-size: 1rem;
      margin-top: 10px;
      padding-right: 15px;
      word-break: break-all;
    }

    .message_sticker {
      width: 100px;
      height: 100px;
    }
  }
`;

export const MessageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 25px;
    border-radius: 15px;
  }

  p {
    &.username {
      color: #ffffff;
      font-size: 1rem;
    }

    &.date {
      color: #9AA5B1;
      font-size: 0.75rem;
    }
  }
`;