import { ModeToggle } from "./components/common/mode-toggle";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <header className="max-w-7xl mx-auto w-full">
        <div className="px-4 py-3 md:px-6 md:py-4 xl:px-8 xl:py-6 flex items-center justify-end">
          <ModeToggle />
        </div>
      </header>
      <Home />
    </div>
  );
}

export default App;
