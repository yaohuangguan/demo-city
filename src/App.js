import "./App.css";

import { Link } from "@reach/router";

function App() {
  return (
    <div className="container">
      <div className="demo-item">
        <h3>🔥Big Data Performance Enhancement</h3>
        <Link to="/virtual-list-scroll">
          100k items of data: Virtual List implemented by onScroll
        </Link>
      </div>

      <div className="demo-item">
        <h3>🚀I/O savings, debounce, throttle</h3>
        <Link to="/debounce-thorttle">
          What is Regular, Debounce, Throttle?
        </Link>
      </div>
    </div>
  );
}

export default App;
