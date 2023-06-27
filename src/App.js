import Banner from "./components/Banner";
import { Boxes } from "./components/ContentField";

import "./components/ContentField/style.css";
import "./components/Banner/banner.css";
import "./components/ContentField/Button/button.css";

function App() {
  return (
    <div className="App">
      <Banner/>
      <Boxes/>
     
    </div>
  );
}

export default App;
