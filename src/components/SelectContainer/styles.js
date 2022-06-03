import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  position: absolute;
  width: 100% !important;
  height: 370vh !important;
  left: 0;
  top: 0;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 360px;
  height: auto;
  background-color: white;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .infos{
    display: flex;
    width: 80vw;
    flex-direction: column;
    margin-top: 70px;
    .searchBar-container{
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin-top:41px ;

      .location{
        display: flex;
        align-items: center;
        margin-bottom: 36px;
        background: transparent;
        border: none;
        .material-icons{
          margin-right: 10px;
        }
      }
    }
  }

`;
