import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

import { Resume } from '../../constants/constants';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi There<br />
          I'm Chinonso Nwabueze
        </SectionTitle>
        <SectionText>
        I’m a Software Engineer currently based in Nigeria. I create code based innovation and solve problems using web technologies. I am passionately interested in blockchain development
        </SectionText>
        <Button target="_blank"  onClick={() => window.location = Resume.file}>My Resume</Button>
      </LeftSection><br/>
    </Section>
  </>
);

export default Hero;