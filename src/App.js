import "./App.css";
// import Layout from "./components/Layout/Layout";
import { withRouter } from "react-router";

function App(props) {
  return (
    <>
      <div className="demo-item">
        <h3>🔥Big Data Performance Enhancement</h3>

        <a href="/virtual-list-scroll">
          100k items of data: Virtual List implemented by onScroll
        </a>
      </div>

      <div className="demo-item">
        <h3>🚀I/O savings, debounce, throttle</h3>
        <a href="/iosavings">debounce, throttle</a>
      </div>
    </>
  );
}

export default withRouter(App);
