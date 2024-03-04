import { InputForm } from "./components/InputForm";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <InputForm />
    </Provider>
  );
};

export default App;
