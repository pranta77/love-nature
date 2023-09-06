const Login = () => {
  return (
    <div>
      <h2 className="text-6xl text-green-600 grid place-items-center">
        Login Please
      </h2>
      <div className="flex justify-center items-center h-screen ">
        <form>
          {" "}
          <div>
            <label htmlFor="" className="text-xl">
              {" "}
              Your Email
            </label>
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered input-secondary w-full max-w-xs mt-5 mb-5"
            />
          </div>
          <div>
            <label htmlFor="" className="text-xl">
              {" "}
              Your Password
            </label>
            <input
              type="text"
              placeholder="Your Password"
              className="input input-bordered input-secondary w-full max-w-xs mt-5"
            />
          </div>
          <div className="mt-10 mx-16 ">
            {" "}
            <button className="btn btn-success  ">Google Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
