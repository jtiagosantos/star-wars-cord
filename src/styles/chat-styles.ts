import styled from 'styled-components';

export const ChatPageContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  padding: 62px 46px;

  display: flex;
  align-items: center;
  justify-content: center;
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
    }
  }
`;

export const Chat = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(33, 41, 49, 0.9);
  border-radius: 5px;
  padding: 17px 21px;

  div {
    & + div {
      margin-top: 20px;
    }
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
    padding: 8px 10px;
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
  }
`;