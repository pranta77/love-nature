import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img src="assets/404 (2).jpg" alt="" />
      <div className="mx-auto w-48">
        <Link to={"/"}>
          <button className="btn btn-error mt-10 mb-10 ">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
