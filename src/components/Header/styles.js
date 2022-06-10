import styled from 'styled-components';

export const Container = styled.header`
margin-top: 32px;
width: 100%;
display: flex;
justify-content: space-between;
@media screen and (max-width: 720px){
  img{
    margin-bottom: 39px;
  }
  display: block;
}
`;
