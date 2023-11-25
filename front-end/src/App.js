import { Route, Routes } from "react-router-dom";

//pages
import Home from "./components/Home";
import Register from "./components/Register";
import Chat from "./components/Chat";
import Review from "./components/Review";

//header
import Header from "./components/Header";

function App() {
  return (
    <>
      <header>
        <Header></Header>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review" element={<Review/>}/>
      </Routes>
    </>
  );
}

export default App;
