import { Provider } from "react-redux";
import configureStore from "./Store";
import Landing from "./Components/Landing";

const store = configureStore();


const App = () => {

  return (
    <Provider store={store}>
      <Landing/>
    </Provider>
  );
}

export default App;
