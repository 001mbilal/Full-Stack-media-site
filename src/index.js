import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <GoogleOAuthProvider clientId="286349938641-nmm52qojjv3b0bjcgoq9dq4oujg9pehq.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Router>
  </React.StrictMode>
);
