import styled from 'styled-components';

export const Container = styled.div`
display: block;
`;

export const CardGroup = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 32px;
`;

export const Card = styled.div`
width: 100%;
max-width: 400px;

&+&+&+&{
  margin-top: 49px;
}
  img{
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 270px;
    border-radius: 24px;
    object-fit: cover;
  }

  .infos{
    margin-top: 15px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[3]};
    }

    .host-tag{
      border: 1px solid #4F4F4F;
      border-radius: 12px;
      padding: 9px;
      font-size: 12px;
      font-weight: bold;
    }
  }

  .avaliation{
    display: flex;
    align-items: center;

    span{
      color:#4F4F4F;
    }

    .material-icons{
      color: ${({ theme }) => theme.colors.red.primary};
      margin-right: 7px;
    }
  }

  .title{
    font-size: 16px;
    margin-top: 12px;
    font-weight: bold;
  }
`;
