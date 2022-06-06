import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <div>
      <a href='https://twitter.com/ClementHambala'><BsTwitter/></a>
      </div>
    </div>
    <div>
      <a href='https://www.facebook.com/clemey.hamz'><FaFacebookF/></a>
    </div>
  
  </div>
);

export default SocialMedia;
