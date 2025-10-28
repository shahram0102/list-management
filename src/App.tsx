import { ModeToggle } from "./components/common/mode-toggle";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-3 py-2 md:px-6 md:py-4 flex items-center justify-end">
        <ModeToggle />
      </header>
      <Home />
    </div>
  );
}

export default App;
