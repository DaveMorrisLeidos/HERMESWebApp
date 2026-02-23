interface FooterProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Footer({ theme, toggleTheme }: FooterProps) {
  return (
    <footer>
      <span>Theme: {theme === "light" ? "Light" : "Dark"}</span>
      <button onClick={toggleTheme} style={{ marginLeft: "1rem" }}>
        Toggle Theme
      </button>
    </footer>
  );
}
