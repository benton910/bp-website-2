import ScheduleCard from '@/components/ScheduleCard';

//Passed in ALL schedule entries from the DB via Props
//For each entry in the array, display a ScheduleCard component

const ScheduleContent = ({ allShows }) => {

  const jsonShows = allShows.map((x) => JSON.parse(x));


  return (
    <div className="w-full md:py-10">
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-full">
        <div className="flex flex-col items-center justify-center md:pt-10 mx-auto z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center">
            <span className="block uppercase tracking-widest font-bold text-blue-600">UPCOMING SHOWS</span>
          </h1>
        </div>
        {jsonShows.map((show, i) => {
          return (<div className="flex items-center justify-center w-full z-10" key={i}>
            <ScheduleCard
              id={show.id}
              createdAt={show.createdAt}
              startTime={show.showDateStartTime}
              endTime={show.showDateEndTime}
              timeZone={show.showDateTimeZone}
              gigVenue={show.gigVenue}
              cityState={show.cityState}
              personnel={show.personnel}
              bpRole={show.bpRole}
              venueUrl={show.venueUrl}
              key={i}
            />
          </div>)
        })}
        <div className="flex flex-col items-center justify-center pt-10 mx-auto z-10">
          <p className="text-center">
            <span className="block tracking-widest font-bold text-blue-600">View past shows</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleContent;
