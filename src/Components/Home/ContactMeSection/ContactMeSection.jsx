import { HiOutlineMailOpen } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import frame from "../../../assets/Frame 11.png";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const ContactMeSection = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email
    const message = data.message

    const templateParams = {
        from_name: email,
        to_name: name,
        message : message,
      };
    // console.log(data)
    emailjs
      .send(`${import.meta.env.VITE_service_id}`, `${import.meta.env.VITE_template_id}`, templateParams, {
        publicKey: `${import.meta.env.VITE_public_key}`,
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <div className="bg-customAsh py-10 rounded-3xl ">
      <div className="lg:mx-32 mx-6 space-y-10">
        <div className="text-center space-y-4 mt-10 md:mt-0">
          <h1 className="font-poppins lg:text-5xl text-3xl font-medium">
            Talk to <span className="text-customOrange">Me</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-around md:gap-0 gap-4">
          {/* social */}
          <div className="flex flex-col gap-4">
            <div className="bg-white shadow-2xl px-12 py-6 rounded-xl flex flex-col items-center gap-2 border-2 border-customOrange">
              <HiOutlineMailOpen className="text-6xl" />
              <h1 className="font-poppins font-medium text-lg">
                Email Address
              </h1>
              <h3 className="font-poppins font-light text-base">
                riyalashikur@gmail.com
              </h3>
            </div>
            <div className="bg-white shadow-2xl px-12 py-6 rounded-xl flex flex-col items-center gap-2 border-2 border-black">
              <FaGithub className="text-6xl" />
              <h1 className="font-poppins font-medium text-lg">Github</h1>
              <h3 className="font-poppins font-light text-base">
                ashikurriyal
              </h3>
            </div>
            <div className="bg-white shadow-2xl px-12 py-6 rounded-xl flex flex-col items-center gap-2 border-2 border-customOrange">
              <FaLinkedin className="text-6xl" />
              <h1 className="font-poppins font-medium text-lg">LinkedIn</h1>
              <h3 className="font-poppins font-light text-base">
                linkedin.com/in/riyalashikur
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={frame} className="md:block hidden" alt="" />
          </div>
          {/* contactform */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="form-group">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className="w-full grow"
                    placeholder="Your Name"
                  />
                  {/* <input type="text" className="grow" placeholder="Name" /> */}
                </label>
              </div>
              <div className="form-group">
                <label className="input input-bordered flex items-center gap-2 py-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    {...register("email")}
                    type="text"
                    id="email"
                    className="w-full grow py-4"
                    placeholder="Your Email"
                  />
                </label>
              </div>

              <div className="form-group">
                <textarea
                  {...register("message")}
                  type="text"
                  id="message"
                  className="textarea textarea-warning textarea-lg"
                  cols={40}
                  rows={5}
                  placeholder="Details Here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="font-poppins font-medium border-2 hover:bg-customOrange hover:text-white hover:border-none border-black rounded-xl p-3 text-sm lg:text-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeSection;
