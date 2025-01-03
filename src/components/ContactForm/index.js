'use client';

import { useForm } from 'react-hook-form';
import { sendEmail } from '../../lib/common/send-email';


const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col items-center pt-10 pb-20'>
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='mb-3 block text-base font-medium text-blue-600'
          >
            Full Name
          </label>
          <input
            type='text'
            placeholder='Full Name'
            required={true}
            className='w-72 md:w-96 rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('name', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='mb-3 block text-base font-medium text-blue-600'
          >
            Email Address
          </label>
          <input
            type='email'
            placeholder='example@domain.com'
            required={true}
            className='w-72 md:w-96 rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('email', { required: true })}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='message'
            className='mb-3 block text-base font-medium text-blue-600'
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder='Type your message'
            required={true}
            className='w-72 h-60 md:w-96 md:h-80 resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
            {...register('message', { required: true })}
          ></textarea>
        </div>
        <div>
          <button className='hover:scale-110 duration-200 rounded-md bg-slate-600 py-3 px-8 text-base font-semibold text-white outline-none'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;