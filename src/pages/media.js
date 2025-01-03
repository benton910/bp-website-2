import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
  Features,
  MediaContent
} from '@/sections/index';

const Media = () => {
  return (
    <>
      <LandingLayout>
        <Meta
          title="BCP Music | Media"
          description="Hear Benton Parker!"
        />
        <MediaContent />
      </LandingLayout>
    </>
  );
};

export default Media;
