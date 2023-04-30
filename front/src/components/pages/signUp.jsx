import { LockClosedIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useForm } from 'react-hook-form'
import { SIGN_UP_URL } from '../../constant/constant'
import { apiPost } from '../../services/services'
// p pl pr pt pb >> m mr ml mt mb
const SignUp = () => {
  const { getValues, register, handleSubmit, formState: { errors } } = useForm()

  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const signUp = async (_body) =>{
    
    try{
      console.log(_body)
      const {data} = await apiPost(SIGN_UP_URL,_body)
      console.log(data)
    }catch(err){
      console.log(err.response)
    }

  }

  const onSub = (data) => {
    delete data.confirmPassword
    console.log(data)
    const obj ={
      fullName: data.fullName,
      email: data.email,
      password: data.password
    }
    console.log(obj)

    signUp(obj)
  }
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign Up
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              start your 14-day free trial
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit(onSub)} className="mt-8 space-y-6" >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div >
              <label className="sr-only">
                fullName
              </label>
              <input
                {...register('fullName', { required: true, minLength: 2, maxLength: 20 })}
                type="text"

                className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="FullName..."
              />
              {errors.name && <p className='text-red-600'>name is required </p>}
            </div>

            <div >
              <label className="sr-only">
                Email address
              </label>
              <input
                {...register('email', { required: true, pattern: emailReg })}
                type="email"

                className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
  {errors.email && <p className='text-red-600'>email is required </p>}
            </div>
            <div >
              <label className="sr-only">
                password
              </label>
              <input
                {...register('password', { required: true, minLength: 3, maxLength: 20 })}
                type="password"

                className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="password.."
              />
                {errors.password && <p className='text-red-600'>password is required </p>}

            </div>
            <div >
              <label className="sr-only">
                confirm password...
              </label>
              <input
                {...register('confirmPassword', { required: true,validate:(value)=>value==getValues('password') })}
                type="password"

                className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="confirm password....."
              />
                {errors.confirmPassword && <p className='text-red-600'>password is not match </p>}

            </div>

          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default SignUp