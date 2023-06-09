/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';

interface User {
  username: string;
  secret: string;
}

interface AuthPageProps {
  onAuth: (user: User) => void;
}

function AuthPage({ onAuth }: AuthPageProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const authenticateUser = async (username: string): Promise<User> => {
    const response = await axios.post<User>(
      `${import.meta.env.VITE_APP_BASE_URL}/authenticate`,
      {
        username,
      }
    );
    return response.data;
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = e.currentTarget.elements.namedItem(
      'username'
    ) as HTMLInputElement | null;
    if (inputElement) {
      const { value } = inputElement;
      setIsLoading(true);
      try {
        const user = await authenticateUser(value);
        onAuth({ ...user, secret: value });
      } catch (err) {
        console.log('Auth Error', err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="lg:w-[50%] w-screen h-screen flex flex-col items-center justify-center bg-green-100">
        <div className="-mt-20">
          <div className="flex">
            <div>
              <h1 className="text-5xl mt-4 text-white">Talk</h1>
              <h1 className="text-5xl text-center text-white">To</h1>
            </div>
            <div>
              <h1 className="text-9xl text-green-500">ME</h1>
            </div>
          </div>
          <p className="text-2xl mt-20 text-white">
            Come connect on <br /> Talk To Me
          </p>
        </div>
        <form className="w-80 px-6" onSubmit={onSubmit} autoComplete="on">
          <label
            className="block mt-6 text-green-500 font-bold"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="block mt-1 w-full rounded-sm p-1 border-2 border-white focus:border-green-500 outline-none"
            type="text"
            name="username"
            id="username"
            required
          />
          <button
            className="mt-3 flex items-center justify-center h-9 w-full rounded-sm p-2 text-white cursor-pointer bg-green-500"
            type="submit"
          >
            {' '}
            {!isLoading ? (
              'Enter'
            ) : (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25 text"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
          </button>
        </form>
      </div>

      <div className="hidden h-full w-[50%] bg-[url('/src/images/foto-login.webp')] bg-cover lg:block bg-center" />
    </div>
  );
}

export default AuthPage;
