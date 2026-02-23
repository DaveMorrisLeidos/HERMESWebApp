import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function AppLayout({
  children,
  theme,
  toggleTheme,
}: AppLayoutProps) {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
