export default function Header() {
  return (
    <header className="flex justify-between">
      <div>          
          <img
            src="src\assets\HERMESLogo.png"
            //src="src\assets\hermes_logo.png"
            alt="Hermes"
            className="h-15 w-auto"
          />        
      </div>
      <div className="flex items-center gap-6">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer">
            Log in
          </button>

          <button className="text-sm font-medium text-blue-600 hover:text-blue-800 cursor-pointer">
            Contact the Team
          </button>
      </div>
{/*       <div className="flex flex-col">
        <h1 className="text-4xl text-slate-800 tracking-widest text-center">H E R M E S</h1>
        <h2 className="text-xm text-slate-50 text-center font-serif">Holistic Execution, Review, Modeling & Engineering Services</h2>
      </div> */}
    </header>
  );
}
