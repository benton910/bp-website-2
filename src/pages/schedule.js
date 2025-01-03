import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
  ScheduleContent
} from '@/sections/index';
import prisma from '@/prisma/index';


export async function getServerSideProps() {
  // Fetch data from external API
  const allShows = await prisma.show.findMany();
  //Organize all shows by date/time ascending
  allShows.sort((a, b) => a.showDateStartTime - b.showDateStartTime);
  const showsProp = allShows.map((x) => JSON.stringify(x));

  // Pass data to the page via props
  return { props: { showsProp } }
};



const Schedule = ({ showsProp }) => {
  return (
    <>
      <LandingLayout>
        <Meta
          title="BCP Music | Schedule"
          description="See Benton Parker's Schedule!"
        />
        <ScheduleContent allShows={showsProp} />
      </LandingLayout>
    </>
  );
};

export default Schedule;