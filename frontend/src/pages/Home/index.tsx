export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-green-100">
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
        <form className="w-80 px-6" action="" autoComplete="on">
          <label className="block mt-6 text-green-500 font-bold" htmlFor="user">
            Username
          </label>
          <input
            className="block mt-1 w-full rounded-sm p-1 border-2 border-white focus:border-green-500 outline-none"
            type="text"
            name="user"
            id="user"
            required
          />
          <input
            className="mt-3  w-full rounded-sm p-2 text-white cursor-pointer bg-green-500"
            type="submit"
            value="Enter"
          />
        </form>
      </div>
    </>
  );
}