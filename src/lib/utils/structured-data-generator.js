import { generateDisplayInfo } from "./display-info-generator";

//@type=Event required properties are:
//  location
//  location.address
//  location.url
//  name
//  startDate (in ISO-8601 format)

//allShows contain:
//   id = { show.id }
//   createdAt = { show.createdAt }
//   startTime = { show.showDateStartTime }
//   endTime = { show.showDateEndTime }
//   gigVenue = { show.gigVenue }
//   cityState = { show.cityState }
//   personnel = { show.personnel }
//   bpRole = { show.bpRole }
//   venueUrl = { show.venueUrl }

export const generateEventStructuredData = (showProps, showDisplayInfo) => {
  if (showProps && showDisplayInfo) {
    return {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": showDisplayInfo.title,
      "startDate": showProps.startTime,
      "endDate": showProps.endTime,
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": showProps.gigVenue,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "100 West Snickerpark Dr",
          "addressLocality": "Snickertown",
          "postalCode": "19019",
          "addressRegion": "PA",
          "addressCountry": "US"
        },
        "url": showProps.venueUrl
      },
      // "image": [
      //   "https://example.com/photos/1x1/photo.jpg",
      //   "https://example.com/photos/4x3/photo.jpg",
      //   "https://example.com/photos/16x9/photo.jpg"
      // ],
      // "offers": {
      //   "@type": "Offer",
      //   "url": "https://www.example.com/event_offer/12345_202403180430",
      //   "price": 30,
      //   "priceCurrency": "USD",
      //   "availability": "https://schema.org/InStock",
      //   "validFrom": "2024-05-21T12:00"
      // },
      // "performer": {
      //   "@type": "PerformingGroup",
      //   "name": "Kira and Morrison"
      // },
      // "organizer": {
      //   "@type": "Organization",
      //   "name": "Kira and Morrison Music",
      //   "url": "https://kiraandmorrisonmusic.com"
      // }
    }
  }
};

