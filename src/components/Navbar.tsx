export default function navbar() {
  return (
    <div>
      <div className="flex flex-wrap bg-green-700 text-white p-4 justify-center">
        <p className="font-bold uppercase text-4xl">One Stop Grocer</p>
      </div>
      <div className="navbar flex flex-wrap bg-green-700 text-white p-4">
        <div className="ms-72 max-md:hidden"></div>
        <div className="flex space-x-12">
          <p>Shop</p>
          <div className="flex ms-8 w-80 h-8 relative">
            <label htmlFor="search-input" className="flex"></label>
            <input
              type="search"
              placeholder="Search"
              className="flex w-80 rounded-xl p-2 text-black shadow-md"
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="flex items-center justify-end rounded-r-2xl"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 30 30"
                    stroke="currentColor"
                  >
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                  </svg>
                </span>
              </button>
            </span>
          </div>
        </div>
        <div className="mx-72 max-md:hidden"></div>
        <div className="flex justify-end max-md:mt-8">
          <ul className="flex list-none ms-4 me-8 space-x-8">
            <li>
              <a href="/login">Log in</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
