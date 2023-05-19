import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const BegenBolumu = (props) => {
  const { gonderiyiBegen, begeniSayisi } = props;
  const [liked, setLiked] = useState(false);

  const birKereLike = () => {
    if (!liked) {
      gonderiyiBegen();
    }
    setLiked(true);
  };

  return (
    <div>
      <div className='like-section' key='likes-icons-container'>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={birKereLike}
            style={{ color: liked ? 'red' : 'black' }}
          />
        </div>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className='like-number'>{begeniSayisi} likes</p>
    </div>
  );
};

export default BegenBolumu;

