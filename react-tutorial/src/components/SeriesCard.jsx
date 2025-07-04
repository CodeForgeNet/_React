//! Props
// export const SeriesCard = (props) => {
//   return (
//     <li>
//       <div>
//         <img
//           src={props.data.img_url}
//           alt="stranger thing"
//           width="30%"
//           height="30%"
//         />
//       </div>
//       <h2>Name : {props.data.name}</h2>
//       <h3>Rating : {props.data.rating} </h3>
//       <p>Genre: {props.data.genre}</p>
//       <p>Cast : {props.data.cast} </p>
//       <p>Summary : {props.data.description}</p>
//       <a href={props.data.watch_url} target="_blank">
//         <button>Watch Now</button>
//       </a>
//     </li>
//   );
// };

//! Destructuring
// export const SeriesCard = (props) => {
//* or
export const SeriesCard = ({ data }) => {
  // const { data } = props;
  const { img_url, name, rating, description, cast, genre, watch_url } = data;

  const ratingClass = rating >= 8.5 ? "super-hit" : "average";

  return (
    <li className="card">
      <div>
        <img src={img_url} alt="stranger thing" width="30%" height="30%" />
      </div>
      <div className="card-content">
        <h2>Name : {name}</h2>
        <h3>
          Rating :
          {/* <span className={rating >= 8.5 ? "super-hit" : "average"}> */}
          //? or
          <span
            // className={`ratingStyle ${rating >= 8.5 ? "super-hit" : "average"}`}
            //? or
            className={`ratingStyle ${ratingClass}`}
          >
            {rating}
          </span>
        </h3>
        <p>Genre: {genre}</p>
        <p>Cast : {cast} </p>
        <p>Summary : {description}</p>
        <a href={watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
