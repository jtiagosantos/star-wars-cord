import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(33, 41, 49, 0.9);

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 500px) {
      img { width: 400px }
    }

    @media(max-width: 400px) {
      img { width: 300px }
    }
  }
`;