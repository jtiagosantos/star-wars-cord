import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
`;

export const ProfileCard = styled.div`
  background: rgba(33, 41, 49, 1);
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 120px;

  @media(max-width: 745px) {
    flex-direction: column-reverse;
    gap: 50px;
  }
`;

export const Auth = styled.div`
  h2 {
    text-align: center;
    color: #ffffff;
    font-weight: 700;

    margin-bottom: 5px;
  }

  p {
    text-align: center;
    color: #9AA5B1;
    font-weight: 700;
    font-size: 0.875rem;

    margin-bottom: 50px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 320px;

    @media(max-width: 400px) {
      width: 250px;
    }

    input {
      width: 100%;
      background: #181F25;
      border: 1px solid #080A0C;
      border-radius: 4px;
      height: 34px;
      padding: 4px;

      color: #ffffff;
    }

    button {
      background: #d8f500;
      border: none;
      border-radius: 4px;
      padding: 10px 0;
      
      color: #141414;
      font-size: 14px;
      font-weight: 700;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const PhotoProfile = styled.div`
  width: 200px;
  height: 240px;
  background: #181F25;
  border: 1px solid #080A0C;
  border-radius: 10px;
  padding: 16px 22px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    border-radius: 1000px;
  }

  p {
    margin-top: 22px;
    background: #080A0C;
    border-radius: 100px;
    padding: 3px 10px;

    color: #CBD2D9;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;