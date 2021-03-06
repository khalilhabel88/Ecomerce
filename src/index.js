import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { store } from "./app/lib/store";
import App from './app/views'

ReactDOM.render(
<Provider store ={store}>
<App />
</Provider>
, document.getElementById("root")
);

