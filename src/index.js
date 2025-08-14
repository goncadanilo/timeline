import ReactDOM from "react-dom/client";
import { Home } from "./pages/home.jsx";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
