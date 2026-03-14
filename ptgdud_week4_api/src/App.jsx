import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bai1_fetch_api from "./component/Bai1_fetch_api";
import Bai2_loading_error from "./component/Bai2_loading_error";
import Bai3_dynamic_fetch from "./component/Bai3_dynamic_fetch";
import Bai4_search_filter from "./component/Bai4_search_filter";
import Bai5_todoapp from "./component/Bai5_todoapp";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Bai1_fetch_api></Bai1_fetch_api> */}
      {/* <Bai2_loading_error></Bai2_loading_error> */}
      {/* <Bai3_dynamic_fetch></Bai3_dynamic_fetch> */}
      {/* <Bai4_search_filter></Bai4_search_filter> */}
      <Bai5_todoapp></Bai5_todoapp>
    </>
  );
}

export default App;
