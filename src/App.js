import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./Views/Pages/Layout";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist";

let persistor = persistStore(store)
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <Layout />
      </PersistGate>
    </Provider>
  );
}

export default App;
