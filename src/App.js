//import logo from './logo.svg';
import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <div className="text-3xl font-bold text-red-800">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
