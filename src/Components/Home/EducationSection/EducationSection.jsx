import uiulogo from "../../../assets/uiulogo.png";

const EducationSection = () => {
  return (
    <div>
      <div className="text-center space-y-4 mt-10 md:mt-0">
        <h1 className="font-poppins lg:text-5xl text-3xl font-medium">
          My <span className="text-customOrange">Educational Background</span>
        </h1>
      </div>
      <div className="flex items-center justify-around  py-20">
        <div className=" text-center">
          <h2 className="underline font-urbanist font-medium text-3xl">
            Undergraduate
          </h2>
        </div>
        <div className="border-2 border-customOrange h-14"></div>

        <div className="">
          <div className="flex items-center gap-4">
            <img className="w-20" src={uiulogo} alt="" />
            <div className="grid grid-cols-1">
              <h1 className="font-mont font-semibold text-left text-5xl">
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
