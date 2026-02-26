import pkg from "../../package.json";
import { Sun, Moon } from "lucide-react";

interface FooterProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Footer({ theme, toggleTheme }: FooterProps) {
  return (
    <footer className="py-4 px-6 flex justify-between items-center text-sm text-grayp-500">
        <button onClick={toggleTheme} className="rounded-full" >
          {/* Icons */}
          <span>{theme === "dark" ? (
              <Sun/> 
            ) : (
              <Moon/>             
            )
          }  
          </span>
        </button>
      {/* </span> */}
      <span className ="text-gray-400">Version {pkg.version}</span>
    </footer>
  );
}
