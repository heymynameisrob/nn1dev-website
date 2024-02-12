import {
  MapPinIcon,
  CalendarIcon,
  TicketIcon,
} from "@heroicons/react/20/solid";
import Profile from "./Profile";
import { ProfileProps } from "./Profile";

interface EventProps {
  title: string;
  description: string;
  location: string;
  locationUrl: string;
  date: string;
  price: string;
  ticketingSystemUrl: string;
  schedule: {
    time: string;
    talk: string;
  }[];
  speakers: ProfileProps[];
}

function Event({
  title,
  description,
  location,
  locationUrl,
  date,
  price,
  ticketingSystemUrl,
  schedule,
  speakers,
}: EventProps) {
  return (
    <>
      <span className="inline-flex items-center rounded-md bg-zinc-800 px-4 py-2 text-xs font-medium text-zinc-200 ring-1 ring-inset ring-zinc-700/30 mb-8">
        Upcoming event
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-8">
        {title}
      </h2>
      <p className="text-lg leading-8 text-zinc-100 sm:max-w-md lg:max-w-none mb-8">
        {description}
      </p>
      <ul className="mb-16">
        <li>
          <div className="flex gap-x-3 mb-4 text-zinc-100">
            <MapPinIcon
              className="h-6 w-6 flex-none text-zinc-600"
              aria-hidden="true"
            />
            <a
              href={locationUrl}
              target="_blank"
              className="text-orange-200 hover:text-zinc-100"
            >
              {location}
            </a>
          </div>
        </li>
        <li>
          <div className="flex gap-x-3 mb-4 text-zinc-100">
            <CalendarIcon
              className="h-6 w-6 flex-none text-zinc-600"
              aria-hidden="true"
            />
            {date}
          </div>
        </li>
        <li>
          <div className="flex gap-x-3 mb-4 text-zinc-100">
            <TicketIcon
              className="h-6 w-6 flex-none text-zinc-600"
              aria-hidden="true"
            />
            {price}
          </div>
        </li>
      </ul>

      <div className="mb-16">
        <a
          href={ticketingSystemUrl}
          className="rounded-md bg-orange-300 px-6 py-4 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get your free ticket at Eventbrite
        </a>
      </div>

      <h2 className="text-xl mt-6 font-bold tracking-tight text-zinc-100 sm:text-2xl mb-8">
        Schedule
      </h2>
      <div className="mb-16">
        {schedule.map((scheduleItem, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 py-2 sm:gap-6 sm:flex-row sm:items-center border-b border-zinc-800"
          >
            <p className="w-32 font-normal text-gray-500  dark:text-zinc-100 shrink-0">
              {scheduleItem.time}
            </p>
            <h3 className="text-lg text-zinc-100 dark:text-white">
              {scheduleItem.talk}
            </h3>
          </div>
        ))}
      </div>

      <h2 className="text-xl mt-6 font-bold tracking-tight text-zinc-100 sm:text-2xl mb-8">
        Special guests
      </h2>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 text-zinc-100">
        {speakers.map((speaker, index) => (
          <Profile key={index} {...speaker} />
        ))}
      </div>
    </>
  );
}

export default Event;
