import "./App.css";
import { useEffect, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import Routes from "./Routes";

function App() {
    const { loadAllProducts, loadUser } = useContext(GlobalContext);
    useEffect(() => {
        loadUser();
        loadAllProducts();
    }, []);
    return (
        <div className="App">
            <Routes />
        </div>
    );
}

export default App;
