import uiulogo from "../../../assets/uiulogo.png";

const EducationSection = () => {
  return (
    <div>
      <div className="text-center space-y-4 mt-10 md:mt-0">
        <h1 className="font-poppins lg:text-5xl text-2xl font-medium">
          My <span className="text-customOrange">Educational Background</span>
        </h1>
      </div>
      <div className="flex items-center justify-around md:flex-row flex-col md:gap-0 gap-4 md:py-20 py-8">
        <div className=" text-center ">
          <h2 className="underline font-urbanist font-medium md:text-3xl text-2xl">
            Undergraduate
          </h2>
        </div>
        <div className="border-2 border-customOrange h-14 md:block hidden"></div>
        <div className="border-2 border-customOrange w-full md:hidden block"></div>

        <div className="">
          <div className="flex items-center gap-4">
            <img className="w-20" src={uiulogo} alt="" />
            <div className="grid grid-cols-1">
              <h1 className="font-mont font-semibold text-left md:text-5xl text-2xl">
                United International University
              </h1>
              <p>
                <small className="mt-10 font-light text-xl italic font-poppins">
                  Bachelor of Science in Computer Science and Engineering
                </small>
              </p>
            </div>
          </div>
          <div>
            {/* <h2 className="">demo</h2> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
