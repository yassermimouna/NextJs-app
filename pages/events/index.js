import { getAllEvents } from "../../data";
import EventList from '../../components/events/EventList';
import EventsSearch from "../../components/events/events-search";
import { Fragment } from "react";
import {useRouter } from 'next/router';

function Alleventspage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year,month){
    const fullPath = `/events/${year}/${month}` ;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={events}/>
    </Fragment>
  );
}
export default Alleventspage;
