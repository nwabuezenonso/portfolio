import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <>
      <div style={{ textAlign: "center", fontSize: "32px"}}>
        <span style={{  fontSize: "16px", textAlign: "left"}}>Collaborations are welcome<br/></span>
        Let's Work Together🤝 <br/>
        <span style={{ fontSize: "20px", fontWeight: 50, lineHeight: 0, margin: 0,   color: "rgba(255, 255, 255, 0.5)"}}>You can reach out to me via Email or any of the social media icon below <br/> you can stay in touch with me on Twitter and Github where I post my works</span>
      </div>
      <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:nwabuezesc@gmail.com">
            nwabuezesc@gmail
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        {/* <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer> */}
        <SocialContainer>
          <SocialIcons href="https://github.com/nwabuezenonso">
            <AiFillGithub size="2.5rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/chukwunonso-nwabueze/">
            <AiFillLinkedin size="2.5rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/Stephen_noso">
            <AiOutlineTwitter size="2.5rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
    </>

  );
};

export default Footer;
