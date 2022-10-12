import css from './Callendar.module.css';
import { useRef } from 'react';

export const Callendar = () => {
  const refStart = useRef();
  const refEnd = useRef();

  return (
    <div className={css.callendar}>
      <div>
        <input
          ref={refStart}
          className={css.callendar__input}
          type="text"
          placeholder="С"
          onChange={e => console.log(e.target.value)}
          onFocus={() => (refStart.current.type = 'date')}
          onBlur={() => (refStart.current.type = 'text')}
        />
      </div>
      <div>
        <input
          ref={refEnd}
          className={css.callendar__input}
          type="text"
          placeholder="По"
          onChange={e => console.log(e.target.value)}
          onFocus={() => (refEnd.current.type = 'date')}
          onBlur={() => (refEnd.current.type = 'text')}
        />
      </div>
    </div>
  );
};
