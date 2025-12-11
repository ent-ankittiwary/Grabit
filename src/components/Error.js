import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError(); // err is an object
  // console.log(err);
  return (
    <div>
      <h1>Opps!!!</h1>
      <h2>Something Went Wrong</h2>
      {/* <h3>{err.error.message}</h3>
      <h4>
        {err.status} {err.statusText}
      </h4> */}
    </div>
  );
};

export default Error;
