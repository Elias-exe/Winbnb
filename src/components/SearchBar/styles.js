import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
max-width: 300px;
height: 56px;
box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
border-radius: 16px;

#select-location{
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  width: 100%;
  font-size: 'Mulish', sans-serif;
  padding: 0 16px;
}

#search-icon{
  color: ${({ theme }) => theme.colors.red.primary};
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 'Mulish', sans-serif;
}

  button{
    border: transparent;
    background-color: transparent;
    padding: 0 16px;
  }

  input{
    color: #BDBDBD;
    background-color: transparent;
    padding: 0 16px;
    max-width: 100px;
    border: none;
  }
`;
