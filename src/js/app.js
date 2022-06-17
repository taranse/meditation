import resize from "./utils/resize";
import debounce from "./utils/debounce";

window.addEventListener("resize", debounce(resize));
