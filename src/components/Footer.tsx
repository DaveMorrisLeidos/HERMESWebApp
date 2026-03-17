import pkg from "../../package.json";
import { Sun, Moon } from "lucide-react";

interface FooterProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Footer({ theme, toggleTheme }: FooterProps) {
  return (
    <footer className="bg-zinc-800 flex justify-between items-center text-sm">
      <button onClick={toggleTheme} className="rounded-full" >
        {/* Icons */}
        <span>{theme === "dark" ? (
            <Sun className="text-yellow-300"/> 
          ) : (
            <Moon className="text-white"/>             
          )
        }  
        </span>
      </button>
      <span></span>
      <nav className="flex items-center flex-wrap gap-50 font-medium">
          <a className="text-slate-50 text-xs hover:underline" href="#">HERMES Jira</a>
          <a className="text-slate-50 text-xs hover:underline" href="#">HERMES Confluence</a>
          <a className="text-slate-50 text-xs hover:underline" href="#">HERMES SharePoint</a>
      </nav>      
      <span className ="text-xs text-slate-200">Version {pkg.version}</span>
    </footer>
  );
}
