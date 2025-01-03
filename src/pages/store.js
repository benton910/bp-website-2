import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
  StoreContent
} from '@/sections/index';

const Store = () => {
  return (
    <>
      <LandingLayout>
        <Meta
          title="BCP Music | Store"
          description="Hear Benton Parker!"
        />
        <StoreContent />
      </LandingLayout>
    </>
  );
};

export default Store;
