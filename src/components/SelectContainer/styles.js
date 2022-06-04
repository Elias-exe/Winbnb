import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  position: absolute;
  width: 100%;
  max-width: 100vw;
  height: 370vh !important;
  left: 0;
  top: 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
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

    .testes{
      display: flex;
    .searchBar-container{
      display: flex;
      flex-direction: column;
      margin-top:41px ;
      width: 100%;
      max-width: 28vw;

        .location-container{
          display: flex;
          margin-bottom: 36px;
        }

          .location{
            align-items: center;
            background: transparent;
            border: none;

            .material-icons{
              margin-right: 10px;
            }
          }
    }
  .guestContainer{
    margin-bottom: 70px;
    .guestInfos{
      display: flex;
      flex-direction: column;
      margin-top: 48px;

      .contador{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 12px;
        span{
          font-size: 14px;
        }

        button{
          background: transparent;
          padding: 7px 10px;
          border: 1px solid #828282;
          border-radius: 4px;
        }
      }
    }
  }

  }
}

`;
