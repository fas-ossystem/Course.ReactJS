import PropTypes from "prop-types";

export function Page(props) {
  const { year, photos, getPhotos, isFetching } = props;
  const onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    console.log('year: ', year)
    getPhotos(year);
  }
  return(
    <div>
      <div>
        <button onClick={onBtnClick}>2017</button>
        <button onClick={onBtnClick}>2018</button>
        <button onClick={onBtnClick}>2019</button>
        <button onClick={onBtnClick}>2020</button>
        <button onClick={onBtnClick}>2021</button>
      </div>
      <h3>{year} год</h3>
      {isFetching 
        ? <p>Загрузка...</p>
        : <p>У тебя {photos.length} фото</p>
      }
    </div>
  )
}

Page.propTypes = {
  photos: PropTypes.array.isRequired,
  year: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}
