import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
    ContactContent
} from '@/sections/index';

const Contact = () => {
  return (
    <>
      <LandingLayout>
        <Meta
          title="BCP Music | Media"
          description="Hear Benton Parker!"
        />
        <ContactContent />
      </LandingLayout>
    </>
  );
};

export default Contact;
