// export const App = () => {
//   return (
//     <div>
//       <div>
//         <div>
//           <img src="st.jpg" alt="stranger thing" width="40%" height="40%" />
//         </div>
//         <h2>Name : Stranger things</h2>
//         <h3>Rating : 8.2</h3>
//         <p>
//           Summary : "Queen of Tears" is a South Korean romantic comedy that
//           follows the story of a married couple, Baek Hyun-woo and Hong Hae-in,
//           who are on the brink of divorce after three years of a strained
//           relationship. Their lives take a dramatic turn when Hae-in is
//           diagnosed with brain cancer, prompting them to confront their past
//           mistakes and rediscover their love for each other.
//         </p>
//       </div>

//       <NetflixSeries />
//     </div>
//   );
// };

// const NetflixSeries = () => {
//   return (
//     <div>
//       <div>
//         <img src="st.jpg" alt="stranger thing" width="30%" height="30%" />
//       </div>
//       <h2>Name : Stranger things</h2>
//       <h3>Rating : 8.2</h3>
//       <p>
//         Summary : "Queen of Tears" is a South Korean romantic comedy that
//         follows the story of a married couple, Baek Hyun-woo and Hong Hae-in,
//         who are on the brink of divorce after three years of a strained
//         relationship. Their lives take a dramatic turn when Hae-in is diagnosed
//         with brain cancer, prompting them to confront their past mistakes and
//         rediscover their love for each other.
//       </p>
//     </div>
//   );
// };

//TODO: REACT FRAGMENT

// import { Fragment } from "react";

// export const App = () => {
//   // return [  //! this is so heactic.
//   //   <NetflixSeries key="1" />,
//   //   <NetflixSeries key="2" />,
//   //   <NetflixSeries key="3" />,
//   // ];

//   return (
//     // <React.Fragment>
//     //   <NetflixSeries />
//     //   <NetflixSeries />
//     //   <NetflixSeries />
//     // </React.Fragment>
//     //* or
//     <>
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//     </>
//   );
// };

// const NetflixSeries = () => {
//   return (
//     <div>
//       <div>
//         <img src="st.jpg" alt="stranger thing" width="30%" height="30%" />
//       </div>
//       <h2>Name : Stranger things</h2>
//       <h3>Rating : 8.2</h3>
//       <p>
//         Summary : "Queen of Tears" is a South Korean romantic comedy that
//         follows the story of a married couple, Baek Hyun-woo and Hong Hae-in,
//         who are on the brink of divorce after three years of a strained
//         relationship. Their lives take a dramatic turn when Hae-in is diagnosed
//         with brain cancer, prompting them to confront their past mistakes and
//         rediscover their love for each other.
//       </p>
//     </div>
//   );
// };

//todo ::
//* Each jsx expression must have one parent element , which means if you try to return multiple elements , react will throw an error.

//* Every jsx need to be closed. You can use self closing tags for element that don't have children, e.g; <img src="url"/>

export const name = () => {
  return (
    <>
      <h1>Karan</h1>
    </>
  );
};
