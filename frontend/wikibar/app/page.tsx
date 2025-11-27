export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between   sm:items-start">
        <h1 className="text-center text-amber-800 self-center m-4 font-regular text-6xl">
          <span className="font-light">WIKI</span>Bar
        </h1>
        <label htmlFor="Search">
          <span className="text-sm font-medium text-red-700 dark:text-red-800">
            {" "}
            Search{" "}
          </span>
          <div className="relative self-start">
            <input
              type="text"
              id="Search"
              className="mt-0.5 w-full rounded border-gray-600 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-400 dark:text-white"
            />
            <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
              <button
                type="button"
                aria-label="Submit"
                className="rounded-full p-1.5 text-red-700 transition-colors hover:bg-gray-100 dark:text-red-800 dark:hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  ></path>
                </svg>
              </button>
            </span>
          </div>
        </label>
        <p className="text-center self-center  m-2">
          Made with proud by Sallon. Copyright © {new Date().getFullYear()} All
          rights reserved. reserved
        </p>
      </main>
    </div>
  );
}
