import css from './FormList.module.css';
import upArrow from '../images/upArrow.svg';
import arrowDown from '../images/arrowDown.svg';
import vectorLine from '../images/vectorLine.svg';
const FormList = ({
  loading,
  servicesItem,
  fulfilledStatus,
  deleteStatus,
  saveStatus,
  switchFuncIcon,
  switchFuncColor,
  children,
}) => {
  return (
    <form className={css.form}>
      <div className={css.form__containerStatus}>
        <div>
          <p>
            Проведены:{' '}
            <span style={{ color: '#00DC4B' }}>
              {fulfilledStatus.length}шт.
            </span>
          </p>
        </div>
        <div>
          <p>
            На удаление:{' '}
            <span style={{ color: '#E70000' }}>{deleteStatus.length}шт.</span>
          </p>
        </div>
        <div>
          <p>
            Записаны:{' '}
            <span style={{ color: '#BD00FF' }}>{saveStatus.length}шт.</span>
          </p>
        </div>
      </div>
      <div className={css.form__containerGrey}>
        <label className={css.form__list}>
          <input
            className={`${css.info__ContainercheckInputList} ${css.table__checkbox}`}
            type="checkbox"
            name="info__ContainercheckInputList"
          />
          <span
            style={{ paddingRight: '0px' }}
            className={css.info__ContainercheckBeforeList}
          ></span>
          <span
            style={{
              width: '121px',
            }}
          >
            Дата и время
            <img src={upArrow} alt="" />
          </span>
          <span style={{ width: '84px' }}>
            Номер
            <img src={upArrow} alt="" />
          </span>
          <span style={{ width: '74px' }}>
            Склад
            <img src={upArrow} alt="" />
          </span>
          <span style={{ width: '108px' }}>
            Поставщик
            <img src={arrowDown} alt="" />
          </span>
          <span style={{ width: '77px' }}>
            Сумма
            <img src={upArrow} alt="" />
          </span>
          <span style={{ width: '134px' }}>
            Отвественный
            <img src={upArrow} alt="" />
          </span>
          <span style={{ width: '109px' }}>Статус</span>
          <span>Комментарий</span>
        </label>
        <img className={css.form__line} src={vectorLine} alt="" />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={css.form__containerRelative}>
          <div className={css.contRight}></div>
          {servicesItem.map(
            ({
              id,
              data,
              time,
              number,
              composition,
              provider,
              name,
              price,
              status,
              comment,
            }) => (
              <div key={id} className={css.form__container}>
                <label
                  style={{ display: 'contents' }}
                  className={css.form__list}
                >
                  <input
                    className={`${css.info__ContainercheckInputList} ${css.table__checkbox}`}
                    id={id}
                    type="checkbox"
                    name={composition}
                    value={name}
                  />
                  <span
                    style={{ paddingRight: '0px' }}
                    className={css.info__ContainercheckBeforeList}
                  ></span>
                  <span
                    style={{
                      width: '121px',
                      fontWeight: 400,
                    }}
                  >
                    {data}
                    <span style={{ color: '#B4B4B4', marginLeft: '5px' }}>
                      {time}
                    </span>
                  </span>
                  <span style={{ width: '84px', fontWeight: 300 }}>
                    {number}
                  </span>
                  <span style={{ width: '74px', fontWeight: 400 }}>
                    {composition}
                  </span>
                  <span style={{ width: '108px', fontWeight: 300 }}>
                    {provider}
                  </span>
                  <span style={{ width: '77px', fontWeight: 400 }}>
                    {price}$
                  </span>
                  <span style={{ width: '134px', fontWeight: 300 }}>
                    {name}
                  </span>
                  <span
                    style={{
                      width: '109px',
                      fontWeight: 400,
                      color: switchFuncColor(status),
                      display: 'inline-flex',
                    }}
                  >
                    {status}
                    <img
                      style={{ marginLeft: '4px' }}
                      src={switchFuncIcon(status)}
                      alt=""
                    />
                  </span>
                  <span
                    style={{
                      fontWeight: 400,
                    }}
                  >
                    {comment}
                  </span>
                </label>
                <img className={css.form__line} src={vectorLine} alt="" />
              </div>
            )
          )}
          <div className={css.contBottom}></div>
        </div>
      )}
      {children}
    </form>
  );
};

export default FormList;
