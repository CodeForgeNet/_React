export const Practices = () => {
  const students = [2, 3];
  return (
    <>
      {/* <p> {students.length && "No students found"} </p>  */}{" "}
      {/* this is wrong */}
      {/* 1st */}
      {/* <p> {students.length === 0 && "No students found"} </p> */}
      {/* 2nd */}
      <p> {!students.length && "No students found"} </p>
      <p>Number of students : {students.length} </p>
    </>
  );
};
