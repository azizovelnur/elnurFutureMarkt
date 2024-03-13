import { Layout } from "./components/Layout";
import { AboutMe } from "./pages/AboutMe";
import "./styles/app.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<AboutMe />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
