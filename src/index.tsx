import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers/index";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
const store = createStore(reducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
