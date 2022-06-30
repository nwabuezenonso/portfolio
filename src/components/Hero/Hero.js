import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi There<br />
          I'm Chinonso Nwabueze
        </SectionTitle>
        <SectionText>
        I’m a Software Engineer currently based in Nigeria. I create code based innovation and solve problems using web technologies. I am currently exploring blockchain technologies
        </SectionText>
        <Button onClick={props.handleClick}>My Resume</Button>
      </LeftSection><br/>
    </Section>
  </>
);

export default Hero;