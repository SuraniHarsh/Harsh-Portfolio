import React from 'react';
import { SocialIcon } from 'react-social-icons'
import { socialLinks } from '../portfolio';

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
  {socialLinks.linkedin && (
    <SocialIcon url={socialLinks.linkedin} style={{ marginRight: '5px' }} />
  )}
  {socialLinks.github && (
    <SocialIcon url={socialLinks.github} style={{ marginRight: '5px' }} />
  )}
  {socialLinks.instagram && (
    <SocialIcon url={socialLinks.instagram} style={{ marginRight: '5px' }} />
  )}
</div>

  );
};

export default SocialLinks;
