import react from "../../../assets/React.png";
import bg from "../../../assets/background.jpeg";
import html from "../../../assets/Html-removebg-preview.png";
import js from "../../../assets/Javascript.png";
import css from "../../../assets/css.png";
import nodejs from "../../../assets/nodejs.png";

const ExpertiseSection = () => {
  return (
    <div className="relative mx-auto lg:space-y-10 space-y-5">
      <img src={bg} alt="" className="w-full rounded-[64px] h-full object-cover" />
      <div className="absolute inset-0 flex flex-col top-32 items-center text-white">
        <div className="text-center space-y-4">
          <h1 className="font-poppins lg:text-5xl text-3xl font-medium">
            Areas of My <span className="text-customOrange">Expertise</span> &{" "}
            <span className="text-customOrange">Proficiency</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mt-10">
          <div className="flex flex-col items-center p-4">
            <img className="w-36" src={html} alt="react logo" />
            <h3 className="my-3 text-3xl font-semibold">HTML</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-36" src={css} alt="react logo" />
            <h3 className="my-3 text-3xl font-semibold">CSS</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-36" src={js} alt="react logo" />
            <h3 className="my-3 text-3xl font-semibold">JavaScript</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-36" src={react} alt="react logo" />
            <h3 className="my-3 text-3xl font-semibold">React</h3>
          </div>
          <div className="flex flex-col items-center p-4">
            <img className="w-36" src={nodejs} alt="react logo" />
            <h3 className="my-3 text-3xl font-semibold">Node JS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
