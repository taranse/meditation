import resize from "./utils/resize";
import debounce from "./utils/debounce";


resize();
window.addEventListener("resize", debounce(resize));
