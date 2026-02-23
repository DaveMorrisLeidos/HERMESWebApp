import { useState, useEffect } from "react";
import AppLayout from "./layout/AppLayout";
import './css/theme.css'

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <AppLayout theme={theme} toggleTheme={toggleTheme}>
      <h2>Welcome to the SPA Body Area</h2>
      <p>Select a topic from the sidebar.</p>
    </AppLayout>
  );
}
