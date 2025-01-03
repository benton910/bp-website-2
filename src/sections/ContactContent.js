import { useState } from 'react';
import { useSession } from 'next-auth/react';
import ContactForm from '@/components/ContactForm';

//UPDATE to clear out all fields upon successful email
//Display a different pop-up toaster upon successful email

const ContactContent = () => {
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <div className="w-full md:py-10">
      <div className="w-full flex flex-col px-10 mx-auto space-y-5">
        <div className="w-full flex flex-col items-center justify-center mx-auto z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center">
            <span className="block uppercase tracking-widest font-bold text-blue-600">CONTACT</span>
          </h1>
          <p className="mt-7 text-center text-gray-100">
            For all booking inquiries, general questions, or issues with the website, please fill out the following form:
          </p>
        </div>
        <div className="flex items-center justify-center z-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
