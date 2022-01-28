import styled from 'styled-components';

export const ChatPageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  padding: 62px 46px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 870px) {
    padding: 62px 0;
  }
`;

export const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(33, 41, 49, 0.7);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  padding: 28px 32px 32px;
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 23px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: #CBD2D9;
    font-size: 0.875rem;

    &:first-child {
      font-weight: 700;
    }

    &:last-child {
      cursor: pointer;

      &:hover {
        font-weight: 700;
      }
    }
  }
`;

export const Chat = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(33, 41, 49, 0.9);
  border-radius: 5px;
  padding: 17px 21px;

  display: flex;
  flex-direction: column-reverse;

  overflow-y: auto;

  .loading_container {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 15rem;
    }
  }

  div {
    div + & {
      margin-top: 6px;
    }

    &:last-child {
      margin-top: -15px;
    }
  }

  ::-webkit-scrollbar {
      width: 5px;
    }
    
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }

  @media(max-height: 670px) {
    max-height: 384px;
  }

  @media(min-height: 671px) {
    max-height: 445px;
  }
`;

export const Footer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  margin-top: 23px;

  input {
    width: 100%;
    background: #181F25;
    border: 1px solid #080A0C;
    border-radius: 4px;
    height: 45px;
    padding: 12px;
    color: #ffffff;
    font-size: 0.9rem;
  }

  button {
    width: 45px;
    height: 43px;
    border-radius: 100%;
    border: none;
    background: #3F9142;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      color: #ffffff;
      font-size: 1.7rem;
    }

    
    &.is_loading {
      border: 2px solid #3F9142;
      border-top-color: #ffffff;

      animation: is-loading 1s infinite;

      @keyframes is-loading {
        to {
          transform: rotate(1turn);
        }
      }
    }
  }
`;