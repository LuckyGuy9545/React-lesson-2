import { PageTitle } from './PageTitle/PageTitle';
import { EventBoard } from './EventBoard/EventBoard';
import upcomingEvents from '../upcoming-events.json';

export const App = () => {
  return (
    //*<> - також може бути пустим як фрагмент
    <>
      <PageTitle /*1*/ text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
};

//* 1. данные должны приходить в месте где происходит рендер страницы, они
//* будут выступать пропсами для компонента;
