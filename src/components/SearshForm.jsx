import css from './InfoForm.module.css';
import slider from '../images/SLIDER.png';
import { Callendar } from './Callendar';
import mark from '../images/mark.svg';

const SearshForm = ({ children }) => {
  return (
    <div style={{ width: '386px' }}>
      {children}
      <h2 className={css.filter__title}>Фильтры</h2>
      <form>
        <Callendar />
        <img
          style={{ margin: '14px 0 11px', display: 'block' }}
          width="386px"
          alt=""
          src={slider}
        />
        <div className={css.info__ContainerBtn}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input
              style={{ width: '49.1%' }}
              className={css.info__formSearsh}
              placeholder="Номер заказа"
              type="value"
            ></input>
            <input
              style={{ width: '49.1%' }}
              className={css.info__formSearsh}
              placeholder="Поставщик"
              type="value"
            ></input>
          </div>
        </div>
        <div className={css.info__ContainerBtn}>
          <input
            className={css.info__formSearsh}
            placeholder="Компания"
            type="value"
          ></input>
        </div>
        <div className={css.info__ContainerBtn}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input
              style={{ width: '49.1%' }}
              className={css.info__formSearsh}
              placeholder="Сумма"
              type="value"
            ></input>
            <input
              style={{ width: '49.1%' }}
              className={css.info__formSearsh}
              placeholder="Кол-во товара"
              type="value"
            ></input>
          </div>
        </div>
        <div className={css.info__ContainerBtn}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input
              style={{ width: '49.1%' }}
              className={css.info__formSearsh}
              placeholder="Склад"
              type="value"
            ></input>
            <input
              style={{ width: '49.1%' }}
              className={css.info__formSearsh}
              placeholder="Возвраты поставщику"
              type="value"
            ></input>
          </div>
        </div>
        <div className={css.info__ContainerBtn}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input
              style={{ width: '49.1%' }}
              className={css.info__formSearsh}
              placeholder="Номер документа"
              type="value"
            ></input>
            <input
              style={{ width: '49.1%' }}
              className={css.info__formSearsh}
              placeholder="Статус документа"
              type="value"
            ></input>
          </div>
        </div>
        <div className={css.info__ContainerBtn}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input
              className={css.info__formSearsh}
              placeholder="Отвественный"
              type="value"
            ></input>
            <label className={css.info__Containercheckbox}>
              <span className={css.info__ContainercheckText}>Отклонения</span>
              <input
                className={css.info__ContainercheckInput}
                type="checkbox"
                name="info__ContainercheckInput"
              />
              <span className={css.info__ContainercheckBefore}></span>
            </label>
          </div>
        </div>
        <div className={css.info__ContainerBtn}>
          <input
            className={css.info__formSearsh}
            placeholder="Комментарий"
            type="value"
          ></input>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
            height: '27px',
            alignItems: 'center',
          }}
        >
          <button className={css.addSearch}>Применить</button>
          <button className={css.deleteSearch}>Очистить</button>
          <button>
            <img style={{ display: 'block' }} src={mark} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearshForm;
