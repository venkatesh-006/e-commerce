import "./App.css";
import { HashRouter , Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import { Provider } from 'react-redux'
import store from "./redux/Store";

function App() {
  return (
    <div className="overflow-hidden">
      <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </HashRouter>
      </Provider>
    </div>
  );
}

export default App;