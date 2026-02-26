export default function Header() {
  return (
    <header className="relative flex items-center justify-center p-2">
      {/* <img
        src="src\assets\hermes_logo.png"
        alt="Hermes"
        className="absolute left-2 top-1 w-3 h-3 object-contain mr-3"
      /> */}
      <div className="flex flex-col">
        <h1 className="text-xl tracking-widest text-center">H E R M E S</h1>
        <h2 className="text-sm font-light text-center">Holistic Execution, Review, Modeling & Engineering Services</h2>
      </div>
    </header>
  );
}
