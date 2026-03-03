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
      <nav className="sidebar-nav">
        <ul className="nav-list primary-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <span className="material-symbols-rounded text-slate-50">app_registration</span>
              <span className="nav-label text-sm text-slate-50">On-Boarding Process</span>
            </a>
          </li>

          <li className="nav-item dropdown-container text-slate-50">
            <a href="#" className="nav-link dropdown-toggle">
              <span className="material-symbols-rounded">dataset</span>
              <span className="nav-label">HERMES Data Services</span>
              <span className="dropdown-icon material-symbols-rounded">keyboard_arrow_down</span>
            </a>
            <ul className="dropdown-menu text-slate-50">
              <li className="nav-item"><a className="nav-link dropdown-title">HERMES Data Services</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link text-sm">Prototype</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link text-sm">Digital Library</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link text-sm">Data Explorer</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link text-sm">Web Query</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link text-sm">AI-Assisted Query</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link text-sm">Subscribe Data</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link text-sm">Subscribe Wiki</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link text-sm">Alert & Notification</a></li>
            </ul>
          </li>

          <li className="nav-item text-slate-50">
            <a href="#" className="nav-link">
              <span className="material-symbols-rounded">article</span>
              <span className="nav-label text-sm text-slate-50">HERMES Team Charter</span>
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item"><a className="nav-link dropdown-title text-sm">HERMES Team Charter</a></li>
            </ul>
          </li>

          <li className="nav-item text-slate-50">
            <a href="#" className="nav-link">
              <span className="material-symbols-rounded">help</span>
              <span className="nav-label text-sm">HERMES FAQs</span>
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item"><a className="nav-link dropdown-title">HERMES FAQs</a></li>
            </ul>
          </li>

          <li className="nav-item text-slate-50">
            <a href="#" className="nav-link">
              <span className="material-symbols-rounded">contact_page</span>
              <span className="nav-label text-sm">Contact the Team</span>
            </a>
            <ul className="dropdown-menu">
              <li className="nav-item"><a className="nav-link dropdown-title">Contact the Team</a></li>
            </ul>
          </li>          
      </ul>

      </nav>
    </aside>
  );  
}