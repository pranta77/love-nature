const Services = () => {
  return (
    <div>
      <header>
        <div className="relative  ">
          <img width={"100%"} src="assets/service.jpg" alt="" />

          <h1 className="absolute md:top-48 top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-8xl text-3xl font-semibold">
            Our Services
          </h1>
        </div>
      </header>
      <section>
        <div className="md:grid md:grid-cols-2 md:m-28 m-8">
          <div>
            <img src="assets/service-4.jpg" alt="" />
          </div>
          <div className="mt-16">
            <h1 className="md:text-3xl text-4xl ">Climb Mount</h1>
            <p className="mt-10">
              Tell your visitor how your service can improve their life. Connect
              with the problem that they’re trying to solve and address any
              objections you think they might have.
            </p>
            <p className="mt-10">
              What is the biggest benefit your customer will get from this? Keep
              your target audience in mind.
            </p>
            <h1 className="mt-10 text-2xl">From $99</h1>
            <button className="btn btn-outline btn-accent mt-10">
              Start a Project
            </button>
          </div>
          <div className="mt-20">
            <img src="assets/service-5.jpg" alt="" />
          </div>
          <div className="mt-28">
            <h1 className="md:text-3xl text-4xl ">Hill Ventures</h1>
            <p className="mt-10">
              Tell your visitor how your service can improve their life. Connect
              with the problem that they’re trying to solve and address any
              objections you think they might have.
            </p>
            <p className="mt-10">
              What is the biggest benefit your customer will get from this? Keep
              your target audience in mind.
            </p>
            <h1 className="mt-10 text-2xl">From $99</h1>
            <button className="btn btn-outline btn-accent mt-10">
              Start a Project
            </button>
          </div>
          <div className="mt-20">
            <img src="assets/service-6.jpg" alt="" />
          </div>
          <div className="mt-28">
            <h1 className="md:text-3xl text-4xl ">Hill Trekking</h1>
            <p className="mt-10">
              Tell your visitor how your service can improve their life. Connect
              with the problem that they’re trying to solve and address any
              objections you think they might have.
            </p>
            <p className="mt-10">
              What is the biggest benefit your customer will get from this? Keep
              your target audience in mind.
            </p>
            <h1 className="mt-10 text-2xl">From $99</h1>
            <button className="btn btn-outline btn-accent mt-10">
              Start a Project
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gray-700 md:grid md:grid-cols-2 md:p-10 p-4">
        <div className="m-10 text-stone-300">
          <h1 className="text-4xl italic">Why Love Nature</h1>
          <p className="mt-10">
            Your customers just learned what services you offer. Tell them why
            they should work with you or your team, for example you could
            highlight your experience and positive client reviews.
          </p>
          <p className="mt-10">
            The badges illustrate this. We also focus on key benefits they will
            get while using our services, namely quick turnaround times and
            dedicated support. You could also use them to show awards you won
            for your best work.
          </p>
        </div>
        <div className="m-14 mt-10 grid grid-cols-2">
          <div className="mt-10">
            <i className="fa-solid fa-star text-5xl"></i>
            <p>5 Star Rating</p>
          </div>
          <div className="mt-10">
            <i className="fa-solid fa-arrows-rotate text-5xl"></i>
            <p>Quick Turnaround</p>
          </div>
          <div className="mt-10">
            <i className="fa fa-history text-5xl" aria-hidden="true"></i>

            <p>8 Years Experience</p>
          </div>
          <div className="mt-10">
            <i className="fas fa-yin-yang text-5xl"></i>
            <p>Dedicated Support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
