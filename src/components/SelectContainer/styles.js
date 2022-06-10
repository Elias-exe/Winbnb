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

  @media screen and (max-width:720px){
    div{
      display: block;
      box-shadow: none;
      height: auto;
      padding: 2px;
      button[type='button']{
        width: 100%;
        padding: 2px;
        height: auto;
        display: block;
        border: none;
        padding-top: 5px;
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .infos{
    display: flex;
    width: 80vw;
    flex-direction: column;
    margin-top: 70px;
    @media screen and (max-width: 720px){
      display: block;
    }
}
`;

export const ShowInfos = styled.div`
      display: flex;
      @media screen and (max-width: 720px){
        display: block;
        background: transparent;
        background-color: transparent;
        border: none;
      }
    .searchBar-container{
      display: flex;
      flex-direction: column;
      margin-top:12px;
      width: 100%;
      max-width: 28vw;
      @media screen and (max-width:720px){
      display: block;
      width: 100%;
      max-width: 40vw;
      box-shadow: none;
      background: transparent;
      background-color: transparent;
      border: none;
      }
        .location-container{
          display: flex;
          margin-bottom: 36px;
          @media screen and (max-width:720px){
            button{
              background-color: transparent;
              background-color: transparent;
              border: none;
              box-shadow: none;
            }
            width: 100%;
            background-color: transparent;
            border-color: transparent;
            border: none;
          }
        }

          .location{
            align-items: center;
            background: transparent;
            border: none;
            @media screen and (max-width: 720px){
              display: block;
              width: 100%;
              background: transparent;
              background-color: transparent;
              border: none;
            }

            .material-icons{
              margin-right: 10px;
            }
          }
    }
  .guestContainer{
    margin-bottom: 70px;
    &+&{
      margin-top: 15px;
    }
    .guestInfos{
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      .contador{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 12px;
        @media screen and (max-width:720px){
            display: flex;
            justify-content: center;
            width: 100%;
          }
        strong{
          font-size: 15px;
          @media screen and (max-width:720px){
            padding: 0 10px;
          }
        }

        button{
          background: transparent;
          padding: 7px 10px;
          border: 1px solid #828282;
          border-radius: 4px;
          @media screen and (max-width:720px){
            display: block;
            padding: 5px;
            width: 100%;
            max-width: 30px;
          }
        }
      }
    }
  }

`;
