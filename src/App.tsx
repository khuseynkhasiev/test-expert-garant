import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context";
import { AppContainer } from "./containers/app";

const App: React.FC = () => (
    <BrowserRouter>
        <AuthProvider>
            <AppContainer />
        </AuthProvider>
    </BrowserRouter>
);

export default App;
