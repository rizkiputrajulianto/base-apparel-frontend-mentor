import logo from "../images/logo.svg";
import avatars from "../images/hero-mobile.jpg";
import avatar from "../images/hero-desktop.jpg";
import { useEffect, useState } from "react";
const Main = () => {
  const size = useWindowSize();
  return (
    <div className="bg-cover bg-pattern">
      <div className="container mx-auto px-4 py-16 border grid grid-col-1 grid-row-1 gap-4">
        <div id="Logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="avatar">
          {size.width > 375 ? (
            <img className="bg-cover" src={avatar} alt="avatar" />
          ) : (
            <img className="bg-cover" src={avatars} alt="avatar" />
          )}
        </div>
        <div id="Coming" className="text-6xl">
          We're coming soon
        </div>
        <div id="desc" className="text-center">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </div>
        <div id="email" className="items-center">
            <input className="px-4 py-3 w-full text-gray-800 rounded-full outline outline-1" type="text" placeholder="Email Address" />
            <button type="submit" className="px-6 py-3 rounded-full bg-rose-700 -ml-16">N</button>
        </div>
      </div>
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
