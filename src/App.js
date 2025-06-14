import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import { ScrollProvider } from "../src/components/ScrollContext";

function App() {
  return (
    <>
      <ScrollProvider>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </ScrollProvider>
    </>
  );
}

export default App;
