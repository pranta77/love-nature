const Home = () => {
  return (
    <div>
      <header>
        <div className="relative ">
          {/* Apply opacity to the image */}
          <img
            src="assets/banner.jpg"
            alt=""
            className="opacity-50 w-full h-full object-cover"
          />
        </div>
        <div className="absolute w-2/3 top-48 sm:top-10 md:top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            We all love <br />
            <span className="text-6xl md:text-9xl">Nature</span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg font-bold mt-4">
            Look deep into nature, and you will understand everything better.
          </p>
          <button className="btn btn-warning mt-4">Warning</button>
        </div>
      </header>
      <main>
        <h1 className="mt-10 mb-10 text-5xl text-white text-center">
          Our Service <hr className="w-56  mt-4 mx-auto" />
        </h1>
        <div className="grid md:grid-cols-3 mx-4 md:mx-16 gap-10">
          <div>
            <img src="assets/service1.jpg" alt="" />
            <h2 className="mt-5 text-amber-300 text-2xl mx-2">Hills</h2>
            <p className="mt-3 mx-2 text-zinc-200">
              The beauty of the hills is a reminder to slow down and appreciate
              the simple things in life.
            </p>
          </div>
          <div>
            <img src="assets/service2.jpg" alt="" />
            <h2 className="mt-5 text-amber-300 text-2xl mx-2">WaterFall</h2>
            <p className="mt-3 mx-2 text-zinc-200">
              There is a hidden message in every waterfall. It says, if you are
              flexible, falling will not hurt you!.
            </p>
          </div>
          <div>
            <img src="assets/service3.jpg" alt="" />
            <h2 className="mt-5 text-amber-300 text-2xl mx-2">Winter Snow</h2>
            <p className="mt-3 mx-2 text-zinc-200">
              Like snowflakes your words fall silent. But my heart still hears
              your voice.
            </p>
          </div>
        </div>
      </main>
      <section className="bg-gray-300 h-96 mt-20">
        <h1 className=" text-center text-zinc-600 text-4xl pt-4 md:px-40 md:py-20">
          “Fresh air is as good for the mind as for the body. Nature always
          seems trying to talk to us as if she had some great secret to tell.
          And so she has.”
        </h1>
        <div className="avatar flex justify-center items-center ">
          <div className="w-16 rounded-full ">
            <img src="assets/avater.jpeg" />
          </div>
        </div>
        <h2 className="flex justify-center ">pranta-dev</h2>
      </section>
      <section>
        <div className="bg-sky-100 grid md:grid-cols-2  ">
          <div className="md:mx-16 md:py-36 p-8">
            <p className="mb-6">
              <small>About Us</small>
            </p>
            <h2 className="text-4xl mb-10 text-black">
              Tell website visitors who you are and why they should choose your
              business.
            </h2>
            <p className="text-black">
              Because when a visitor first lands on your website, you’re a
              stranger to them. They have to get to know you in order to want to
              read your blog posts, subscribe to your email newsletter, or buy
              what you’re selling.
            </p>
            <button className="btn btn-outline btn-info mt-10">
              Find Out More
            </button>
          </div>
          <div className="m-8 md:m-20">
            <img width={"100%"} src="assets/about.jpg" alt="" />
          </div>
        </div>
      </section>
      <footer>
        <div className="relative">
          <img
            src="assets/banner-2.jpg"
            alt=""
            className="h-96 w-full opacity-60"
          />
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="md:text-7xl text-5xl mt-20 font-semibold">
              QUESTIONS?
            </h1>
            <p className="mt-10 text-sm md:text-base lg:text-lg font-bold px-12">
              Whether you’re curious about features, a free trial, or even
              press, we’re here to answer any questions.
            </p>
            <button className="btn btn-warning mt-8">Let-s Talk Now</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
