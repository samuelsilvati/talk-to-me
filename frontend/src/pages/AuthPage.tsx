/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import axios from 'axios';

interface User {
  username: string;
  secret: string;
}

interface AuthPageProps {
  onAuth: (user: User) => void;
}

function AuthPage({ onAuth }: AuthPageProps): JSX.Element {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputElement = e.currentTarget.elements.namedItem(
      'username'
    ) as HTMLInputElement | null;
    if (inputElement) {
      const { value } = inputElement;
      axios
        .post<User>(`${import.meta.env.VITE_APP_BASE_URL}/authenticate`, {
          username: value,
        })
        .then((r) => onAuth({ ...r.data, secret: value }))
        .catch((err) => console.log('Auth Error', err));
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
          <input
            className="mt-3  w-full rounded-sm p-2 text-white cursor-pointer bg-green-500"
            type="submit"
            value="Enter"
          />
        </form>
      </div>

      <div className="hidden h-full w-[50%] bg-[url('/src/images/foto-login.webp')] bg-cover lg:block bg-center" />
    </div>
  );
}

export default AuthPage;
