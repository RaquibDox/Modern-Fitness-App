const HeroBanner = () => {
  return (
    <>
      <img
        src="./assets/images/web-banner-img1.png"
        alt="banner"
        className="hidden w-full bg-cover tablet:block"
      />
      <img
        src="./assets/images/Web-Banner-Img1.jpg"
        alt="banner"
        className="block w-full bg-cover tablet:hidden"
      />
      <div className="relative mt-16">
        <div className="p-5 font-sans text-center tablet:text-left tablet:ml-10">
          <p className="text-2xl font-semibold text-accent-light-color-1">
            Fitness Club
          </p>
          <p className="my-2 sm:my-3 font-bold text-5xl lg:text-6xl  lg:leading-[54px]">
            Sweat, Smile <br /> and Repeat
          </p>
          <p className="mb-6 text-xl text-gray-600 desktop:text-2xl">
            Check out the most effective exercises
          </p>
          <a href="#exercises">
            <button className="button button--warning">
              Explore Exercises
            </button>
          </a>
        </div>
        <p className="absolute top-0 right-4 font-semibold font-sans text-font-accent-light-color opacity-10 hidden tablet:block text-[200px] -z-50">
          Exercise
        </p>
      </div>
    </>
  );
};

export default HeroBanner;
