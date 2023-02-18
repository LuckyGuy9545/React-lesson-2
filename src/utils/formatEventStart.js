import { format } from 'date-fns';
//* можно локализировать на каком языке дата будет
import { ru } from 'date-fns/locale';

export const formatEventStart = start => {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm', { locale: ru });
};
