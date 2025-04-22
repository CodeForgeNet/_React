export const SeriesCard = (props) => {
  return (
    <li key={props.curElem.id}>
      <div>
        <img
          src={props.curElem.img_url}
          alt="stranger thing"
          width="30%"
          height="30%"
        />
      </div>
      <h2>Name : {props.curElem.name}</h2>
      <h3>Rating : {props.curElem.rating} </h3>
      <p>Genre: {props.curElem.genre}</p>
      <p>Cast : {props.curElem.cast} </p>
      <p>Summary : {props.curElem.description}</p>
      <a href={props.curElem.watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};
