import logo from "../images/logo.svg";
import avatars from "../images/hero-mobile.jpg";
import avatar from "../images/hero-desktop.jpg";
import arrow from "../images/icon-arrow.svg";
import warning from "../images/icon-error.svg";
import { useEffect, useState } from "react";
import "../App.css";
const Main = () => {
  const size = useWindowSize();
  const [error, setError] = useState(false);
  const [values, setValue] = useState("sss");
  function handleChange(event) {
    console.log(event)
    setValue(event.target.value);
  };

  function submit() {
    console.log(values);
  }
  return (
    <div className="bg-cover bg-pattern border lg:w-auto">
      <div className="lg:container md:mx-4 md:px-4 md:py-0 mx-auto px-4 py-16 grid grid-cols-1 grid-row-1 md:gap-none gap-4 md:grid-cols-2 md:grid-row-4">
        <div id="Logo" className="md:py-4">
          <img src={logo} alt="logo" />
        </div>
        <div id="avatar" className="md:col-start-2 md:row-span-4 w-full md:gap-0 bg-local">
          {size.width > 375 ? (
            <img className="bg-cover" src={avatar} alt="avatar" />
          ) : (
            <img className="bg-cover" src={avatars} alt="avatar" />
          )}
        </div>
        <div id="Coming" className="text-6xl md:row-start-2 lg:text-9xl lg:text-left">
          <span className="we">We're</span> coming soon
        </div>
        <div id="desc" className="text-center md:text-left md:text-xl">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </div>
        <div id="email" className="items-center">
            <input id="email" onChange={() => handleChange()} className="px-4 py-3 md:py-6 md:px-3 md:text-2xl w-full text-gray-800 rounded-full outline outline-1" type="text" placeholder="Email Address" />
            <button type="button" onClick={() => submit()} className="arrow px-6 py-3 md:py-8 md:px-12 rounded-full md:-ml-28 bg-rose-700 -ml-16">{error ? (<img src={warning} alt="error" />) : (<span></span>)}<img src={arrow} alt="arrow" /></button>
        </div>
        {error ? (<div>Please provide valid email</div>) : (<span></span>)}
      </div>
      {values}
    </div>
  );
};

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default Main;
