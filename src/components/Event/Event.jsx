import PropTypes from 'prop-types';
//* это импорт иконок(нужна библиотека react-icons)
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
//*чтобы не было много импортов с одной папки, можно создать индекс файл в этой папке
//== ДО
// import { formatEventStart } from 'utils/formatEventStart';
// import { formatEventDuration } from 'utils/formatEventDuration';
//== ПОСЛЕ
import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from 'constants';
import css from './Event.module.css';

export const Event = ({ name, location, speaker, type, start, end }) => {
  //* вставляем функцию изменения формата даты
  const formatedStartDate = formatEventStart(start);
  //* втсавляем функцию подсчета оставшегося времени
  const duration = formatEventDuration(start, end);
  console.log('css[type]', css[type]);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={iconSize.sm} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={iconSize.sm} />
        {/* ДО */}
        {/* {start} */}
        {/* ПОСЛЕ */}
        {formatedStartDate}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} size={iconSize.sm} />
        {duration}
      </p>
      {/* //* создает 2 класа, один - .chip а другой зависит от [type] который будет передан, type=free то css.free */}
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};

//*проверка пропсов
Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
