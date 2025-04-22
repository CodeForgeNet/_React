//! ::
//* Each jsx expression must have one parent element , which means if you try to return multiple elements , react will throw an error.

//* Every jsx need to be closed. You can use self closing tags for element that don't have children, e.g; <img src="url"/>

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

//!: REACT FRAGMENT
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

//!: Dynamic values
//* 1. Variables
//? You can embed any js variable within JSX by enclosing in it curly braces. The Value of the variable will be inserted into the DOM at the respective location.
// export const App = () => {
//   return (
//     <>
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//     </>
//   );
// };

// const NetflixSeries = () => {
//   const name = "Stranger things";
//   const rating = "9.1";
//   const summary =
//     "Stranger Things is an American television series created by the Duffer Brothers for Netflix. Produced by Monkey Massacre Productions and 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016. The second and third seasons followed in October 2017 and July 2019, respectively, and the fourth season was released in two parts in May and July 2022. The fifth and final season of Stranger Things is expected to be released in 2025.";

//   return (
//     <div>
//       <div>
//         <img src="st.jpg" alt="stranger thing" width="30%" height="30%" />
//       </div>
//       <h2>Name : {name}</h2>
//       <h3>Rating : {rating} </h3>
//       <p>Summary : {summary}</p>
//     </div>
//   );
// };

//* 2. Expression
//? JSX allow you to write js expression inside curly braces. This includes operations, function calls, and other js expression that produce a value.

// export const App = () => {
//   return (
//     <>
//       <NetflixSeries />
//       <NetflixSeries />
//       <NetflixSeries />
//     </>
//   );
// };

// const NetflixSeries = () => {
//   const name = "Stranger things";
//   const summary =
//     "Stranger Things is an American television series created by the Duffer Brothers for Netflix. Produced by Monkey Massacre Productions and 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016. The second and third seasons followed in October 2017 and July 2019, respectively, and the fourth season was released in two parts in May and July 2022. The fifth and final season of Stranger Things is expected to be released in 2025.";

//   return (
//     <div>
//       <div>
//         <img src="st.jpg" alt="stranger thing" width="30%" height="30%" />
//       </div>
//       <h2>Name : {name}</h2>
//       <h3>Rating : {8 + 1.1} </h3>  {/* Expression */}
//       <p>Summary : {summary}</p>
//     </div>
//   );
// };

//* 3. Function Calls
//? Functions, especially those that return JSX, can be invoked directly within your JSX.
// export const App = () => {
//   return (
//     <>
//       <NetflixSeries />
//     </>
//   );
// };

// const NetflixSeries = () => {
//   const name = "Stranger things";
//   const summary =
//     "Stranger Things is an American television series created by the Duffer Brothers for Netflix. Produced by Monkey Massacre Productions and 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016. The second and third seasons followed in October 2017 and July 2019, respectively, and the fourth season was released in two parts in May and July 2022. The fifth and final season of Stranger Things is expected to be released in 2025.";
//   const returnGenre = () => {
//     const genre = "Horror, SciFi";
//     return genre;
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
//     </div>
//   );
// };

//! Conditional
// export const App = () => {
//   return (
//     <>
//       <NetflixSeries />
//     </>
//   );
// };

// const NetflixSeries = () => {
//   const name = "Stranger things";
//   const summary =
//     "Stranger Things is an American television series created by the Duffer Brothers for Netflix. Produced by Monkey Massacre Productions and 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016. The second and third seasons followed in October 2017 and July 2019, respectively, and the fourth season was released in two parts in May and July 2022. The fifth and final season of Stranger Things is expected to be released in 2025.";
//   const returnGenre = () => {
//     const genre = "Horror, SciFi";
//     return genre;
//   };

//   let age = 25;

//* 1. But this violet DRY (Do Not Repeat yourself)
// if (age < 18) {
//   return (
//     <div>
//       <div>
//         <img src="st.jpg" alt="stranger thing" width="30%" height="30%" />
//       </div>
//       <h2>Name : {name}</h2>
//       <h3>Rating : {8 + 1.1} </h3>
//       <p>Genre: {returnGenre()}</p>
//       <p>Summary : {summary}</p>
//       <button> Not Available </button>
//     </div>
//   );
// }

//* 2. providing ternary operator in button
// return (
//   <div>
//     <div>
//       <img src="st.jpg" alt="stranger thing" width="30%" height="30%" />
//     </div>
//     <h2>Name : {name}</h2>
//     <h3>Rating : {8 + 1.1} </h3>
//     <p>Genre: {returnGenre()}</p>
//     <p>Summary : {summary}</p>
//     <button> {age >= 18 ? "Watch now" : "Not available"} </button>
//   </div>
// );

//* 3. sometimes youmight have very complex IF conditions, for that there are some solutions.

// let canWatch = "Not Available";
// if (age >= 18) canWatch = "Watch";
// return (
//   <div>
//     <div>
//       <img src="st.jpg" alt="stranger thing" width="30%" height="30%" />
//     </div>
//     <h2>Name : {name}</h2>
//     <h3>Rating : {8 + 1.1} </h3>
//     <p>Genre: {returnGenre()}</p>
//     <p>Summary : {summary}</p>
//     <button> {canWatch} </button>
//   </div>
// );

//* 4. Solutions can be better as it prevents cluttering of variables outside and encapsulate such logic inside a function.
//* One another benefits is also that, you can also pass some dynamic values as function parameter.
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

//! Import Export
//* 1. Named Import then it will be in curly braces.
//* 2. Default Import then it will not be in curly braces.
//* 3. You can also use both named and default import in the same file.

import { NetflixSeries } from "./components/NetflixSeries";

export const App = () => {
  return (
    <>
      <NetflixSeries />
    </>
  );
};
