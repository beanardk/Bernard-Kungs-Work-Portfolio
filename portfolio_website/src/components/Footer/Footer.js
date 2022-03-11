import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel: 626-201-9986'>626-201-9986</LinkItem>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:bkung188@gmail.com'>bkung188@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Its Bean</Slogan>
        </CompanyContainer>
      <SocialContainer>
        <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/in/b-kung/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://instagram.com/24kdueldisk/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
