import PropTypes from "prop-types";

const MovieList = ({ title }) => {
  return (
    <div className='text-white'>{title}</div>
  )
}

MovieList.propTypes = {
    title: PropTypes.string,
}
export default MovieList    