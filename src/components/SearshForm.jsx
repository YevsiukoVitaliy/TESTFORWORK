import css from './InfoForm.module.css';
import slider from '../images/SLIDER.png';
import { Callendar } from './Callendar';
import mark from '../images/mark.svg';
import React, { Component } from 'react';

export default class SearshForm extends Component {
  state = {
    number: '',
    composition: '',
    provider: '',
    name: '',
    price: '',
    status: '',
    comment: '',
  };

  clearBtn = () => {
    this.setState({
      number: '',
      composition: '',
      provider: '',
      name: '',
      price: '',
      status: '',
      comment: '',
    });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.handleSubmit(this.state);
    this.clearBtn();
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const { composition, provider, name, number, price, status, comment } =
      this.state;
    const { handleSubmit, clearBtn, handleChange } = this;
    return (
      <div style={{ width: '386px' }}>
        {this.props.children}
        <h2 className={css.filter__title}>Фильтры</h2>
        <form onSubmit={handleSubmit} id="searchForm">
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
                onChange={handleChange}
                style={{ width: '49.1%' }}
                className={css.info__formSearsh}
                placeholder="Номер заказа"
                type="text"
                value={number}
                name="number"
              ></input>
              <input
                onChange={handleChange}
                style={{ width: '49.1%' }}
                className={css.info__formSearsh}
                placeholder="Поставщик"
                type="text"
                value={provider}
                name="provider"
              ></input>
            </div>
          </div>
          <div className={css.info__ContainerBtn}>
            <input
              onChange={handleChange}
              className={css.info__formSearsh}
              placeholder="Компания"
              type="text"
              disabled
            ></input>
          </div>
          <div className={css.info__ContainerBtn}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <input
                onChange={handleChange}
                style={{ width: '49.1%' }}
                className={css.info__formSearsh}
                placeholder="Сумма"
                type="text"
                name="price"
                value={price}
              ></input>
              <input
                onChange={handleChange}
                style={{ width: '49.1%' }}
                className={css.info__formSearsh}
                placeholder="Кол-во товара"
                type="text"
                disabled
              ></input>
            </div>
          </div>
          <div className={css.info__ContainerBtn}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <input
                onChange={handleChange}
                style={{ width: '49.1%' }}
                className={css.info__formSearsh}
                placeholder="Склад"
                type="text"
                value={composition}
                name="composition"
              ></input>
              <input
                onChange={handleChange}
                style={{ width: '49.1%' }}
                className={css.info__formSearsh}
                placeholder="Возвраты поставщику"
                type="text"
                disabled
              ></input>
            </div>
          </div>
          <div className={css.info__ContainerBtn}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <input
                onChange={handleChange}
                style={{ width: '49.1%' }}
                className={css.info__formSearsh}
                placeholder="Номер документа"
                type="text"
                disabled
              ></input>
              <input
                onChange={handleChange}
                style={{ width: '49.1%' }}
                className={css.info__formSearsh}
                placeholder="Статус документа"
                type="text"
                value={status}
                name="status"
              ></input>
            </div>
          </div>
          <div className={css.info__ContainerBtn}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <input
                onChange={handleChange}
                className={css.info__formSearsh}
                placeholder="Отвественный"
                type="text"
                name="name"
                value={name}
              ></input>
              <label className={css.info__Containercheckbox}>
                <span className={css.info__ContainercheckText}>Отклонения</span>
                <input
                  onChange={handleChange}
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
              onChange={handleChange}
              className={css.info__formSearsh}
              placeholder="Комментарий"
              type="text"
              value={comment}
              name="comment"
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
            <input type="submit" value="Применить" className={css.addSearch} />
            <input
              type="button"
              value="Очистить"
              onClick={() => clearBtn()}
              className={css.deleteSearch}
            />
            <button disabled>
              <img style={{ display: 'block' }} src={mark} alt="" />
            </button>
          </div>
        </form>
      </div>
    );
  }
}
