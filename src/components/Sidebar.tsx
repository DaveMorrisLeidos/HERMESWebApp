import { useEffect } from "react";

export default function Sidebar() {
  useEffect(() => {
    const toggleDropdown = (
      dropdown: HTMLElement,
      menu: HTMLElement,
      isOpen: boolean
    ) => {
      dropdown.classList.toggle("open", isOpen);
      menu.style.height = isOpen ? `${menu.scrollHeight}px` : "0px";
    };

    const closeAllDropdowns = () => {
      document.querySelectorAll(".dropdown-container.open").forEach((openDropdown) => {
        if (!(openDropdown instanceof HTMLElement)) return;
        const menu = openDropdown.querySelector(".dropdown-menu");
        if (!(menu instanceof HTMLElement)) return;
        toggleDropdown(openDropdown, menu, false);
      });
    };

    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach((dropdownToggle) => {
      if (!(dropdownToggle instanceof HTMLElement)) return;

      dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault();

        const dropdown = dropdownToggle.closest(".dropdown-container");
        if (!(dropdown instanceof HTMLElement)) return;

        const menu = dropdown.querySelector(".dropdown-menu");
        if (!(menu instanceof HTMLElement)) return;

        const isOpen = dropdown.classList.contains("open");

        closeAllDropdowns();
        toggleDropdown(dropdown, menu, !isOpen);
      });
    });

    const sidebarButtons = document.querySelectorAll(".sidebar-toggler, .sidebar-menu-button");
    sidebarButtons.forEach((button) => {
      if (!(button instanceof HTMLElement)) return;

      button.addEventListener("click", () => {
        closeAllDropdowns();
        const sidebar = document.querySelector(".sidebar");
        if (sidebar instanceof HTMLElement) {
          sidebar.classList.toggle("collapsed");
        }
      });
    });

    // Cleanup listeners when component unmounts
    return () => {
      dropdownToggles.forEach((el) => {
        el.replaceWith(el.cloneNode(true));
      });
      sidebarButtons.forEach((el) => {
        el.replaceWith(el.cloneNode(true));
      });
    };
  }, []);
  return (
    <aside className="sidebar"> 
      <header className="sidebar-header">
         <a href="#" className="header-logo">
          <img src="logo.png" alt="Logo" />
        </a> 
        <button className="sidebar-toggler">
          <span className="material-symbols-rounded">chevron_left</span>
        </button>
      </header>

      <nav className="sidebar-nav">
        <ul className="nav-list primary-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="material-symbols-rounded">dashboard</span>
              <span className="nav-label">Dashboard</span>
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item"><a className="nav-link dropdown-title">Dashboard</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown-container">
            <a href="#" className="nav-link dropdown-toggle">
              <span className="material-symbols-rounded">calendar_today</span>
              <span className="nav-label">Services</span>
              <span className="dropdown-icon material-symbols-rounded">keyboard_arrow_down</span>
            </a>

            <ul className="dropdown-menu">
              <li className="nav-item"><a className="nav-link dropdown-title">Services</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link">IT Consulting</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link">Cloud Solutions</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link">Mobile Apps</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="material-symbols-rounded">notifications</span>
              <span className="nav-label">Notifications</span>
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item"><a className="nav-link dropdown-title">Notifications</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="material-symbols-rounded">local_library</span>
              <span className="nav-label">Resources</span>
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item"><a className="nav-link dropdown-title">Resources</a></li>
            </ul>
          </li>

          <li className="nav-item dropdown-container">
            <a href="#" className="nav-link dropdown-toggle">
              <span className="material-symbols-rounded">star</span>
              <span className="nav-label">Bookmarks</span>
              <span className="dropdown-icon material-symbols-rounded">keyboard_arrow_down</span>
            </a>

            <ul className="dropdown-menu">
              <li className="nav-item"><a className="nav-link dropdown-title">Bookmarks</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link">Saved Tutorials</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link">Favorite Blogs</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link">Resource Guides</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="material-symbols-rounded">extension</span>
              <span className="nav-label">Extensions</span>
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item"><a className="nav-link dropdown-title">Extensions</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="material-symbols-rounded">settings</span>
              <span className="nav-label">Settings</span>
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item"><a className="nav-link dropdown-title">Settings</a></li>
            </ul>
          </li>
        </ul>

        <ul className="nav-list secondary-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="material-symbols-rounded">help</span>
              <span className="nav-label">Support</span>
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item"><a className="nav-link dropdown-title">Support</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="material-symbols-rounded">logout</span>
              <span className="nav-label">Sign Out</span>
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item"><a className="nav-link dropdown-title">Sign Out</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );  
}