import { PureComponent } from 'react';
import FormList from './components/FormList';
import biPin from './images/biPin.svg';
import biX from './images/biX.svg';
import checkMarkGreen from './images/checkMarkGreen.svg';
import Pagination from 'components/Pagination';
import SearshForm from 'components/SearshForm';
import InfoForm from 'components/InfoForm';
import Modal from 'components/Modal';

export default class App extends PureComponent {
  state = {
    fulfilledStatus: [],
    deleteStatus: [],
    saveStatus: [],
    servicesItem: [],
    loading: false,
    countriesPerPage: 12,
    page: 1,
    lastCountryIndex: null,
    firstCountryIndex: null,
    currentPage: [],
    activeModal: false,
    search: 'Удалить',
    statusKey: 'status',
    keyDataKey: [],
    valueDate: [],
  };
  componentDidMount() {
    try {
      fetch('http://localhost:3002/hash')
        .then(res => res.json())
        .then(data => {
          data.map(keyData => {
            let keys = Object.keys(keyData);
            for (var i = 0, l = keys.length; i < l; i++) {
              if (this.state.statusKey === keys[i]) {
                if (keyData[keys[i]].includes(this.state.search)) {
                  this.setState(prev => ({
                    keyDataKey: [...prev.keyDataKey, keyData],
                    servicesItem: [...this.state.keyDataKey],
                  }));
                  this.setState(prev => ({
                    fulfilledStatus: prev.servicesItem.filter(
                      e => e.status === keyData[keys[i]]
                    ),
                    lastCountryIndex: prev.page * prev.countriesPerPage,
                    firstCountryIndex:
                      prev.page * prev.countriesPerPage - prev.countriesPerPage,
                    currentPage: prev.servicesItem.slice(
                      prev.firstCountryIndex,
                      prev.lastCountryIndex
                    ),
                    loading: false,
                  }));
                }
              }
            }
          });
        });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      try {
        fetch('http://localhost:3002/hash')
          .then(res => res.json())
          .then(data => {
            data.map(keyData => {
              let keys = Object.keys(keyData);
              for (var i = 0, l = keys.length; i < l; i++) {
                if (this.state.statusKey === keys[i]) {
                  if (keyData[keys[i]].includes(this.state.search)) {
                    this.setState(prev => ({
                      fulfilledStatus: prev.servicesItem.filter(
                        e => e.status === keyData[keys[i]]
                      ),
                      lastCountryIndex: prev.page * prev.countriesPerPage,
                      firstCountryIndex:
                        prev.page * prev.countriesPerPage -
                        prev.countriesPerPage,
                      currentPage: prev.servicesItem.slice(
                        prev.firstCountryIndex,
                        prev.lastCountryIndex
                      ),
                      loading: false,
                    }));
                  }
                }
              }
            });
          });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: true });
      }
    }
  }
  paginate = pageNumber => this.setState({ page: pageNumber });
  nextPage = () => this.setState(prev => ({ page: prev.page + 1 }));
  prevPage = () => this.setState(prev => ({ page: prev.page - 1 }));

  switchFuncColor = e => {
    switch (e) {
      case 'Проведён':
        return '#00DC4B';
      case 'Удалить':
        return '#E70000';
      case 'Записан':
        return '#BD00FF';
      default:
        break;
    }
  };

  switchFuncIcon = e => {
    switch (e) {
      case 'Проведён':
        return checkMarkGreen;
      case 'Удалить':
        return biX;
      case 'Записан':
        return biPin;
      default:
        break;
    }
  };

  setActiveFn = () =>
    this.setState(prev => ({ activeModal: !prev.activeModal }));

  render() {
    const {
      loading,
      activeModal,
      servicesItem,
      currentPage,
      fulfilledStatus,
      deleteStatus,
      saveStatus,
      page,
      countriesPerPage,
    } = this.state;
    const {
      setActiveFn,
      switchFuncIcon,
      paginate,
      switchFuncColor,
      nextPage,
      prevPage,
    } = this;
    return (
      <div className="main">
        <SearshForm>
          <InfoForm setActiveOpenFn={setActiveFn} />
        </SearshForm>
        <FormList
          loading={loading}
          servicesItem={currentPage}
          fulfilledStatus={fulfilledStatus}
          deleteStatus={deleteStatus}
          saveStatus={saveStatus}
          switchFuncIcon={switchFuncIcon}
          switchFuncColor={switchFuncColor}
        >
          {loading === false && (
            <Pagination
              paginate={paginate}
              nextPage={nextPage}
              prevPage={prevPage}
              page={page}
              countriesPerPage={countriesPerPage}
              totalCountries={servicesItem.length}
            />
          )}
        </FormList>
        <Modal setActiveFn={setActiveFn} active={activeModal} />
      </div>
    );
  }
}
