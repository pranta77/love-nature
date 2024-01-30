const Contact = () => {
  return (
    <div>
      <header>
        <div className="relative  ">
          <img width={"100%"} src="assets/contact.jpg" alt="" />

          <h1 className="absolute md:top-48 top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-8xl text-4xl font-semibold">
            contact us
          </h1>
        </div>
        <div className="md:grid md:grid-cols-2">
          <div className="md:m-20 m-8">
            <h1 className="text-4xl">You can find us at</h1>
            <p className="mt-10 ">
              <small>EMAIL</small>{" "}
            </p>
            <p>hello@tyler.com</p>
            <p className="mt-10">
              <small> PHONE NUMBER</small> <br />
              202-555-0188
            </p>
            <p className="mt-10">
              {" "}
              <small>LOCATION</small> <br /> 2360 Hood Avenue, San Diego, CA,
              92123
            </p>
            <div className="text-3xl  space-x-8 mt-10 ">
              <i className="fa-brands fa-instagram "></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
          <div className="md:m-20 m-8">
            <h1 className="text-4xl">Let-s get in touch</h1>
            <div className="mt-10  ">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered input-accent w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered input-accent w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Message"
                className="input input-bordered input-accent w-full max-w-xs"
              />{" "}
              <br />
              <button className="btn btn-outline mt-20">Send Message</button>
            </div>
          </div>
        </div>
      </header>
      <section>
        <h1 className="md:m-40 m-10  md:text-4xl text-2xl md:px-64 px-10 text-center text-lime-600 ">
          We are optimists who love to work together
        </h1>
        <div className="grid md:grid-cols-4 gap-10 w-5/6 md:h-96 mx-auto">
          <img src="assets/8311.jpg" alt="" />
          <img src="assets/8344.jpg" alt="" />
          <img src="assets/8366.jpg" alt="" />
          <img src="assets/8477.jpg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Contact;
