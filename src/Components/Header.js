
import { useNavigate, NavLink, Link  } from 'react-router-dom';
import Logo from "../asserts/images/logo.png"
import { useEffect, useState } from 'react';


export const Header = () => {

  const [hidden, setHidden] = useState(true);
  const [darkMode , setDarkMode] = useState( JSON.parse(localStorage.getItem("darkMode")) || false );

const navigate = useNavigate();

  useEffect(()=>{
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if(darkMode){
     document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
   
  },[darkMode]);

  const activeClass = "text-base block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const inActiveClass = 'text-base block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700';

const handleSubmit = (event) =>{
  event.preventDefault();
  const queryTerm = event.target.search.value;
  event.target.reset();
  return navigate(`/search?q=${queryTerm}`);
}


  return (
    <header>
      <nav className=" bg-white border-b-2 border-gray-200 px-2 sm:px-4 py-2 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
          <div className=" flex flex-wrap items-center justify-between   mx-10">
            <Link
              to="/"
              className="flex items-center "
            >
              <img
                src={Logo}
                className="mr-2 h-8 sm:h-9 "
                alt="Streamerr Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Streamerrzz
              </span>
            </Link>

            <div id='Mobilenav' className="flex md:order-2">
            <button onClick={()=> setDarkMode(!darkMode)}
              data-tooltip-target="button-icon-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="dark" className="py-2 mr-3 flex items-center w-9 h-9 justify-center text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                {darkMode ? ( <svg data-toggle-icon="sun" className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z"></path>
            </svg>) : (<svg data-toggle-icon="moon" className="w-3.5 h-3.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z"></path>
            </svg>)}
            
           
            <span className="sr-only">Toggle dark/light mode</span>
          </button>
              <button
                onClick={()=>setHidden(!hidden)}
                data-collapse-toggle="navbar-search"
                type="button"
                className="my-auto inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mx-1"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <button
              onClick={()=>setHidden(!hidden)}
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-3 "
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
              <div className="hidden relative md:block">
                <div className=" flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="search-navbar"
                  name='search'
                  className="block w-full mr-5 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..." autoComplete='off'
                />
                </form>
               
              </div>
             
            </div>

            <div id="nav-links"
              className={`${hidden ? "hidden" : ""} items-center justify-between  w-full md:flex md:w-auto md:order-1`}
            
            ><div className=" relative mt-3 md:hidden mr-50">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="search-navbar"
                  name='search'
                  className="block w-full p-2 mr-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..." autoComplete='off'
                />
                </form>
                
              </div>
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to="/"
                    className={({isActive}) => isActive ? activeClass :inActiveClass}
                    end
                  >
                    Home
                  </NavLink>
                </li> 
                <li>
                  <NavLink
                    to="/movies/popular"
                    className={({isActive}) => isActive ? activeClass :inActiveClass}
                  
                  >
                    Popular
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/movies/top"
                    className={({isActive}) => isActive ? activeClass :inActiveClass}
                  >
                    Top Rated
                  </NavLink>
                  </li>
                  <li>
                  <NavLink
                    to="/movies/upcoming"
                    className={({isActive}) => isActive ? activeClass :inActiveClass}
                  >
                    UpComing
                  </NavLink>
                </li>
              </ul>
            </div>

          </div>
      </nav>
    </header>
  );
}
