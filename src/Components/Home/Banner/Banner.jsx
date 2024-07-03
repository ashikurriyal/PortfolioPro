const Banner = () => {
  const bannerTitile = (
    <>
      <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#FFEBDB] to-[rgba(21,21,21,0)]">
        <div className=" lg:space-y-7 space-y-3 lg:w- lg:pl-24 pl-10 text-left">
          <div className="flex flex-wrap mt-4">
            {" "}
            {/* Use flex-wrap to ensure buttons wrap on smaller screens */}
            {/* <button className="btn btn-warning mr-2 mb-2 lg:mb-0 lg:mr-5 text-sm lg:text-base">
              Discover More
            </button> */}
            <button className="font-poppins font-medium border-2 w-28 h-12 hover:bg-customOrange hover:text-white hover:border-none border-black rounded-full p-2 text-sm lg:text-2xl">
              Hello!
            </button>
          </div>
          <h2 className="font-urbanist lg:font-semibold lg:text-6xl w-3/4 lg:w-auto text-xl font-bold">
            Im <span className="text-customOrange">Molla Ashikur Rahman</span>
          </h2>
          <h2 className="font-urbanist dark:text-white lg:font-semibold lg:text-6xl w-3/4 lg:w-auto text-xl font-bold">
            Passionate Web Developer
          </h2>
          <button className="font-poppins font-medium border-2 w-36 h-12 hover:bg-customOrange hover:text-white hover:border-none border-black rounded-full p-2 text-sm lg:text-2xl">
              Resume
          </button>
        </div>
      </div>
    </>
  );
  return (
    <div>
      <div className="w-full lg:h-[calc(100vh-76px)] relative">
        {bannerTitile}
      </div>
    </div>
  );
};

export default Banner;
