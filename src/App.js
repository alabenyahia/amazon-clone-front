import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useEffect, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

function App() {
    const { loadAllProducts } = useContext(GlobalContext);
    useEffect(() => {
        loadAllProducts();
    }, []);
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
