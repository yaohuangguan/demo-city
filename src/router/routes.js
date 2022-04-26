import { VirtualListScroll } from "../components/VirtualListScroll/VirtualListScroll";
import IOSavings from '../components/IOSavings'
import App from "../App";

export const routes = [
  {
    path: "/",
    component: App,
    exact: true,
  },
  {
    path: "/virtual-list-scroll",
    component: VirtualListScroll,
    exact: true,
  },
  {
    path: "/debounce-thorttle",
    component: IOSavings,
    exact: true,
  },
];
