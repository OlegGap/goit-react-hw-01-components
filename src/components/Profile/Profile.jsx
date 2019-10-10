import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Description, StatsWrapper } from './styles';

const Profile = ({ name, tag, location, avatar, stats }) => {
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
