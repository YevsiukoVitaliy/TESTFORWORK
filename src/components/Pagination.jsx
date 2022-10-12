import vectorRight from '../images/vectorRight.png';
import vectorLeft from '../images/vectorLeft.png';
import css from './Pagination.module.css';

const Pagination = ({
  countriesPerPage,
  paginate,
  totalCountries,
  nextPage,
  prevPage,
  page,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <>
      <ul className={css.pagination}>
        <button disabled={page === 1} onClick={prevPage}>
          <img style={{ marginRight: '40px' }} src={vectorLeft} alt="" />
          <p>Пред</p>
        </button>
        {pageNumber.map(number => (
          <li className={page === number ? css.active : ''} key={number}>
            <a
              onClick={() => paginate(number)}
              href="##"
              className={css.page__link}
            >
              {number}
            </a>
          </li>
        ))}
        <button disabled={page === pageNumber.length} onClick={nextPage}>
          <p>След</p>
          <img style={{ marginLeft: '40px' }} src={vectorRight} alt="" />
        </button>
      </ul>
    </>
  );
};

export default Pagination;
