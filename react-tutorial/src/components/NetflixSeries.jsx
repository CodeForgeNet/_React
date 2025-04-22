//* Named Export
// export const NetflixSeries = () => {
//   const name = "Stranger things";
//   const summary =
//     "Stranger Things is an American television series created by the Duffer Brothers for Netflix. Produced by Monkey Massacre Productions and 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016. The second and third seasons followed in October 2017 and July 2019, respectively, and the fourth season was released in two parts in May and July 2022. The fifth and final season of Stranger Things is expected to be released in 2025.";
//   const returnGenre = () => {
//     const genre = "Horror, SciFi";
//     return genre;
//   };

//   let age = 25;
//   const canWatch = () => {
//     if (age >= 18) return "Watch Now";
//     return "Not available";
//   };
//   return (
//     <div>
//       <div>
//         <img src="st.jpg" alt="stranger thing" width="30%" height="30%" />
//       </div>
//       <h2>Name : {name}</h2>
//       <h3>Rating : {8 + 1.1} </h3>
//       <p>Genre: {returnGenre()}</p>
//       <p>Summary : {summary}</p>
//       <button> {canWatch()} </button>
//     </div>
//   );
// };

//* Default
// export default NetflixSeries;

// export const Footer = () => {
//   return (
//     <div>
//       <h2>Footer</h2>
//       <p>All rights reserved</p>
//     </div>
//   );
// };

//! Loop
// import SeriesData from "../api/SeriesData.json";

// export const NetflixSeries = () => {
//   return (
//     <ul>
//       {SeriesData.map((curElem) => {
//         return (
//           //   <li>
//           //* or
//           <li key={curElem.id}>
//             <div>
//               <img
//                 src={curElem.img_url}
//                 alt="stranger thing"
//                 width="30%"
//                 height="30%"
//               />
//             </div>
//             <h2>Name : {curElem.name}</h2>
//             <h3>Rating : {curElem.rating} </h3>
//             <p>Genre: {curElem.genre}</p>
//             <p>Cast : {curElem.cast} </p>
//             <p>Summary : {curElem.description}</p>
//             <a href={curElem.watch_url} target="_blank">
//               <button>Watch Now</button>
//             </a>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
// export default NetflixSeries;

//! Props

import SeriesData from "../api/SeriesData.json";
import { SeriesCard } from "./SeriesCard";

export const NetflixSeries = () => {
  return (
    <ul>
      {SeriesData.map((curElem) => (
        <SeriesCard key={curElem.id} data={curElem} /> //*props
      ))}
    </ul>
  );
};
export default NetflixSeries;
