const About = () => {
  return (
    <div>
      <header>
        <div className="relative  ">
          <img src="assets/ab.jpg" alt="" />

          <h1 className="absolute md:top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-orange-300 md:text-8xl text-5xl top-20 font-bold">
            About us
          </h1>
        </div>
      </header>
      <section>
        <h1 className="md:m-40 m-10 text-3xl md:px-48 text-center text-yellow-50 italic">
          We’re a highly collaborative and supportive team, coming together on
          every project to ensure our clients get the very best result.
        </h1>
        <div className=" flex justify-center items-center w-2/3 mx-auto ">
          <img src="assets/about-1.jpg" alt="" />
        </div>
        <div className="grid md:grid-cols-2 text-xl w-2/3 mx-auto mt-10 text-orange-300">
          <div>
            <h1 className="text-center text-xl ">Our Mission</h1>
            <p className="text-center p-3 ">
              Build the best product that creates the most value for our
              customers, use business to inspire and implement environmentally
              friendly solutions.
            </p>
          </div>
          <div>
            <h1 className="text-center text-xl ">Our Values</h1>
            <p className="text-center p-3 ">
              We strive to go above and beyond for our clients no matter the
              challenge. We aim to deliver our very best work every single day
              across our services.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-300 h-96 mt-20">
        <h1 className=" text-center text-zinc-600 text-4xl pt-4 md:px-40 md:py-20 italic">
          “Love Nature has an amazing team of hard working professionals. It has
          been a pleasure to meet them.”
        </h1>
        <div className="avatar flex justify-center items-center ">
          <div className="w-16 rounded-full ">
            <img src="assets/avater.jpeg" />
          </div>
        </div>
        <h2 className="flex justify-center ">pranta-dev</h2>
      </section>
    </div>
  );
};

export default About;
