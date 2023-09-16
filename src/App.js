import { Provider} from "react-redux";
import appStore from "./utils/appStore";
import Body from "./components/Body";
import './App.css';


function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body/>
      </Provider>
   
    </div>
  );
}

export default App;
