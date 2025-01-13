import { generateEventStructuredData } from "@/lib/utils/structured-data-generator";
import { generateDisplayInfo } from "@/lib/utils/display-info-generator";
import { formatDate } from "@/lib/utils/date-formatter";
import { formatDateTimeRange } from "@/lib/utils/date-formatter";

// id                 String @id @default (cuid())
// createdAt          DateTime ? @default (now())
// startTime          DateTime
// endTime            DateTime
// timeZone           TimeZone(enum) 
// gigVenue           String
// cityState          String
// personnel          String
// bpRole             MusicRole(enum)
// venueUrl           String


const ScheduleCard = (scheduleCardProps) => {
  const cardDisplayInfo = generateDisplayInfo(scheduleCardProps);
  const jsonLd = generateEventStructuredData(scheduleCardProps, cardDisplayInfo);
  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:scale-105 transform transition duration-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-2xl text-blue-600 font-semibold">{cardDisplayInfo.title}</div>
          <p suppressHydrationWarning className="block mt-4 text-lg leading-tight font-medium text-black">{formatDate(scheduleCardProps.startTime)}</p>
          <p suppressHydrationWarning className="block mt-1 text-md leading-tight font-medium text-black">{formatDateTimeRange(scheduleCardProps.startTime, scheduleCardProps.endTime) + ' ' + scheduleCardProps.timeZone}</p>
          <p className="block mt-1 text-md leading-tight font-medium text-black">{scheduleCardProps.cityState}</p>
          <p className="mt-2 text-gray-500">{cardDisplayInfo.description}</p>
          {scheduleCardProps.venueUrl ? <a href={scheduleCardProps.venueUrl} target="_blank" className="mt-5 text-blue-500">More info</a> : null}
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;