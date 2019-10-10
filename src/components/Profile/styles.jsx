import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 250px;
  height: 330px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(191, 205, 222, 0.75);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  .avatar {
    width: 99px;
    height: 99px;
    border-radius: 49px;
    background-color: #000000;
  }
  .name {
    font-size: 18px;
    line-height: 32px;
    color: #122236;
    font-family: 'Lato';
    font-weight: 700;
  }
  .tag,
  .location {
    font-size: 14px;
    line-height: 32px;
    color: #768696;
    font-family: 'Lato';
    font-weight: 400;
  }
`;
export const StatsWrapper = styled.ul`
  width: 249px;
  height: 76px;
  background-color: #f3f6f9;
  border: 1px solid #e4e9f0;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  li {
    border: 1px solid #e4e9f0;
    border-button: none;
    width: 82px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .label {
      font-size: 12px;
      color: #768696;
      font-family: 'Lato';
      font-weight: 400;
    }
    .quantity {
      font-size: 14px;
      color: #1f3349;
      font-family: 'Lato';
      font-weight: 900;
    }
  }
`;

// export default { Wrapper, Description, StatsWrapper };
