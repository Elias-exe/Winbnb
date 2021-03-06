import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 0.7fr;
max-width: ${({ size }) => `${size}px`};
height: 56px;
box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
border-radius: 16px;


#search-icon{
  border-top: transparent;
  border-right: transparent;
  border-bottom: transparent;
  color: ${({ theme }) => theme.colors.red.primary};
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 'Mulish', sans-serif;
}

button{
  width: 100%;
  border: none;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  background-color: transparent;

  .location-container{
  margin-bottom: 15px;

    .location-label{
      margin-bottom: 5px;
    }
  }

&:focus{
  border: 2px solid black;
}
  .guestButtonContainer{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 15px;

    strong{
      margin-bottom: 5px;
    }
  }
  }

  input{
    color: #BDBDBD;
    width: 100%;
    background-color: transparent;
    padding: 0 16px;
    border: none;
  }

  .submitButtonContainer{
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 720px){
      display: flex;
      margin-top: 10px;
    }

      button{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 25vw;
        padding: 1vw 2vw;
        background-color: ${({ theme }) => theme.colors.red.primary};
        border: none;
        border-radius: 1.2vw;
        box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
        color: white;
      &:hover{
        background-color: ${({ theme }) => theme.colors.red.light};
      }
      &:active{
        background-color: ${({ theme }) => theme.colors.red.dark};
      }
      }
  }
`;
