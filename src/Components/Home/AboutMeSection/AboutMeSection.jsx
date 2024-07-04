import aboutImage from '../../../assets/aboutImage.jpg'

const AboutMeSection = () => {
  return (
    <div className='space-y-10'>
      <div className="text-center space-y-4 md:mt-0">
        <h1 className="font-poppins lg:text-5xl text-xl font-medium">
          What <span className="text-customOrange">About Me</span>
        </h1>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center gap-16">
        {/* left side */}
        <div className=''>
          <img className='w-72 rounded-3xl shadow-2xl' src={aboutImage} alt="" />
        </div> 
        <div className='border-2 border-customOrange h-64 md:block hidden'></div>
        <div className='border-2 border-customOrange w-2/3 md:hidden block'></div>
        <div className='md:w-1/3 bg-gradient-to-t from-[rgb(242,229,209)] to-[rgba(21,21,21,0)] rounded-2xl border-b-4 border-t-2 border-t-customOrange border-customOrange shadow-2xl px-4 py-3'>
            <h3 className='font-poppins font-normal text-lg'>I am a dedicated web developer skilled in both front-end and back-end technologies, including HTML, CSS, JavaScript, React.js, Node.js, and PHP. My expertise extends to full-stack development with MERN stacks. I am committed to writing clean, efficient code and creating user-friendly, responsive web designs. My goals include continuous learning, developing innovative web applications, and advancing my career while contributing to the open-source community.</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
