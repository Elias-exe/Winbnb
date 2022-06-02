import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50%;
  max-height: 460px;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .infos{
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .material-icons{
    margin-right: 10px;
  }

  .location{
    width: 100%;
    display: flex;
    max-width: 250px;
    flex-direction: column;
    margin-top: 42px;
    margin-left: 123px;

    button{
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      margin-bottom: 32px;
    }
  }
`;
