import Link from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { BiLoaderAlt } from 'react-icons/bi';
import cookie from 'js-cookie';
import { attemptSignup } from '@features/auth/authActions';

type handleClick = {
  ModalHandler: () => void;
};

const SingUpForm: FC<handleClick> = ({ ModalHandler }: handleClick) => {
  const dispatch = useDispatch();
  const { loading,user} = useSelector((state: any) => state.auth);
 console.log(user.name)
  const {
    handleSubmit,
    register,

    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    dispatch(attemptSignup(data));
    cookie.set('user', data);
  };

  return (
    <>
      <form
        className='space-y-2 mt-8 z-[99999]'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='w-full flex flex-col'>
          <input
            id='name'
            type='text'
            required
            className='py-2 px-4 border bg-gray-200 border-gray-300 shadow-slate-400 focus:border-primary/50 focus:outline-none focus:ring-0 rounded-sm'
            placeholder="What's your name?"
            {...register('name', { required: true })}
          />
        </div>
        <div className='w-full flex flex-col'>
          <input
            id='email'
            type='email'
            required
            className='py-2 px-4 border bg-gray-200 border-gray-300 shadow-slate-400 focus:border-primary/50 focus:outline-none focus:ring-0 rounded-sm'
            placeholder="What's your email"
            {...register('email', { required: true })}
          />
        </div>
        <div className='w-full flex flex-col '>
          <input
            id='password'
            type='password'
            required
            className='py-2 px-4 border-2 bg-gray-200 border-gray-300 shadow-slate-400 focus:border-primary/50 focus:outline-none focus:ring-0 rounded-sm'
            placeholder='Password'
            {...register('password', {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && (
            <span className='text-sm text-red-500'>
              Password must be at least 6 characters
            </span>
          )}
        </div>
        <div className='w-full flex flex-col '>
          <input
            id='password'
            type='password'
            required
            className='py-2 px-4 border-2 bg-gray-200 border-gray-300 shadow-slate-400 focus:border-primary/50 focus:outline-none focus:ring-0 rounded-sm'
            placeholder='Repeat Password'
            {...register('password', {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && (
            <span className='text-sm text-red-500'>
              Password must be at least 6 characters
            </span>
          )}
        </div>
        <div className='flex flex-col items-center mt- flex-wrap'>
          <button
            type='submit'
            className='w-full border border-sky-400 py-3 px-10 text-center bg-sky-400 text-white rounded-md hover:bg-sky-500 transition duration-300'
          >
            {!loading ? (
              'Create a Account'
            ) : (
              <BiLoaderAlt className='mr-2 animate-spin' />
            )}
          </button>
        </div>
        <div className='text-center mt-6 text-[15px]'>
          <span>
            Already have an account?
            <button className='mx-1 text-sky-400' onClick={ModalHandler}>
              Login
            </button>
          </span>
        </div>
      </form>
    </>
  );
};

export default SingUpForm;
