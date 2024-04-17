
import { IconContext } from "react-icons";
import './App.css' 
import React from "react";
import { IoMoon } from "react-icons/io5"; 
import { IoSunny } from "react-icons/io5";

function App() {
  const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

  return (
    <>
    
    <div className="bg-yellow-500 dark:bg-black">
            <button onClick={()=> darkModeHandler()}>
                {
                    
                    dark && <IoSunny />
                }
                {
                    !dark && <IoMoon />
                }
            </button>
        </div>
    </>
  )
}

export default App
