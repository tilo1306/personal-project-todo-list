import { useEffect, useState } from 'react';
import moment from 'moment';
import * as C from './styles';

export const Date = (): JSX.Element => {
  const [time, setTime] = useState('');
  useEffect(() => {
    setInterval(() => {
      setTime(moment().format('DD/MM/YYYY-HH:mm:ss'));
    }, 1000);
  }, []);

  return <C.Container>{time}</C.Container>;
};
