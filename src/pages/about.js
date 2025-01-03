import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
  AboutContent
} from '@/sections/index';

const About = () => {
  return (
    <>
      <LandingLayout>
        <Meta
          title="BCP Music | About"
          description="Read more about Benton Parker!"
        />
        <AboutContent />
      </LandingLayout>
    </>
  );
};

export default About;
