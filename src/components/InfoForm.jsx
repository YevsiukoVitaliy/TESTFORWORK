import { useState } from 'react';
import setting from '../images/setting.svg';
import search from '../images/search.png';
import groups from '../images/groups.svg';
import css from './InfoForm.module.css';

const InfoForm = ({ setActiveOpenFn }) => {
  const [show, setShow] = useState(true);
  const showInfoForm = () => setShow(!show);
  return (
    <div>
      <div className={css.info}>
        <div className={css.info__containerImg}>
          <h1 className={css.info__title}>Приходы</h1>
          <img src={setting} alt="" />
        </div>
        <button className={css.info__buttonShow} onClick={showInfoForm}>
          <img src={groups} alt="" />
          {show ? ' Скрыть' : ' Открыть'}
        </button>
      </div>
      {show && (
        <form className={css.info__form}>
          <div className={css.info__formContainer}>
            <button
              onClick={setActiveOpenFn}
              style={{ width: '100%' }}
              className={css.info__button}
            >
              Приход +
            </button>
          </div>
          <div className={css.info__formContainer}>
            <button
              onClick={setActiveOpenFn}
              style={{ width: '100%' }}
              className={css.info__buttonGray}
            >
              Дублировать приход
            </button>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'space-between' }}
            className={css.info__formContainer}
          >
            <button
              onClick={setActiveOpenFn}
              style={{ width: '49.1%' }}
              className={css.info__buttonGray}
            >
              Провести
            </button>
            <button
              onClick={setActiveOpenFn}
              style={{ width: '49.1%' }}
              className={css.info__buttonGray}
            >
              На удаление
            </button>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'space-between' }}
            className={css.info__formContainer}
          >
            <button
              onClick={setActiveOpenFn}
              style={{ width: '49.1%' }}
              className={css.info__buttonGray}
            >
              В списание
            </button>
            <button
              onClick={setActiveOpenFn}
              style={{ width: '49.1%' }}
              className={css.info__buttonGray}
            >
              В перемещение
            </button>
          </div>
          <div className={css.info__formContainer}>
            <button
              onClick={setActiveOpenFn}
              style={{ width: '100%' }}
              className={css.info__buttonGray}
            >
              Возвраты поставщику по приходу
            </button>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'space-between' }}
            className={css.info__formContainer}
          >
            <button
              onClick={setActiveOpenFn}
              style={{ width: '30.08%' }}
              className={css.info__buttonLess}
            >
              Импорт
            </button>
            <button
              onClick={setActiveOpenFn}
              style={{ width: '30.08%' }}
              className={css.info__buttonLess}
            >
              Экспорт
            </button>
            <button
              onClick={setActiveOpenFn}
              style={{ width: '30.08%' }}
              className={css.info__buttonLess}
            >
              Печать
            </button>
          </div>
          <div className={css.info__formSearshContainer}>
            <input
              className={css.info__formSearsh}
              placeholder="Номер документа, название товара..."
              type="value"
            ></input>
            <img className={css.info__formSearshImg} src={search} alt="" />
          </div>
        </form>
      )}
    </div>
  );
};

export default InfoForm;
