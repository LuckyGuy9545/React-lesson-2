import PropTypes from 'prop-types';
import { Event } from 'components/Event/Event';
import css from './EventBoard.module.css';

export const EventBoard = ({ events }) => {
  console.log(events);
  return (
    <div className={css.eventBoard}>
      {/* деструктуризация --- ({name, location, speaker, type, start, end}) */}
      {events.map(({ name, location, speaker, type, time }) => (
        //*если рендерите елементы внутри колекции - нужен обязательно КЛЮЧ (name уникальный, его используем)
        <Event
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </div>
  );
};

//* проверка масива данных, что масив должен быть таким как (exact) - {то что в скобках}
EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ),
};
