import { Provider } from "react-redux";
import "./App.css";
import Dashboard from "./Dashboard/dashboard";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ width: "100%" }}>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
