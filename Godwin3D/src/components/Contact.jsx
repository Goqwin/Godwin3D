import {useState, useRef } from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';



// Object Functionality
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Godwin JB Mercado",
          from_email: form.email,
          to_email: "godwinnMercado@hotmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Request</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your First Name/Last Name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Provide your concern.?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <p className={styles.sectionSubText}>Socials: Connect with Me</p>
        <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
          <a href="https://discord.com/users/goqwin" target="_blank" rel="noopener noreferrer">
            <img src={"https://logodownload.org/wp-content/uploads/2017/11/discord-logo-0.png"} alt="Discord" className="bg-white rounded-full w-20 h-15 border-2 border-black hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/godwin-jb-mercado-346727237/" target="_blank" rel="noopener noreferrer">
            <img src={"https://th.bing.com/th/id/R.21fba12531ac377e1642a01921db9fbd?rik=ErbH90Kfy3L6tg&riu=http%3a%2f%2fencomium.ng%2fwp-content%2fuploads%2f2016%2f01%2fLinkedIn-Logo.png&ehk=qo9l10kLERwTTr5WEWyHeVR%2bKIWh4CchVBnnAxyz3ic%3d&risl=&pid=ImgRaw&r=0"} alt="LinkedIn" className="bg-white rectangle-md w-20 h-25 border-2 border-black hover:scale-110" />
          </a>
          <a href="https://github.com/Goqwin" target="_blank" rel="noopener noreferrer">
            <img src={"https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"} alt="GitHub" className="bg-white rounded-lg w-20 h-20 border-2 border-black hover:scale-110" />
          </a>
        </div>
      </motion.div> 
    </div>
  );
};
export default SectionWrapper(Contact, "contact");