import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Profile = ({ name, tag, location, avatar, stats }) => {
  const Wrapper = styled.div`
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
  const Description = styled.div`
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
  const StatsWrapper = styled.ul`
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
  return (
    <Wrapper className="profile">
      <Description className="description">
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <StatsWrapper className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </StatsWrapper>
    </Wrapper>
  );
};

Profile.defaultProps = {
  tag: 'No tagname',
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
export default Profile;
