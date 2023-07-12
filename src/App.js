import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* 이 주소(/)로 요청하면 home을 보여준다 */}
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          {/* :id -> id가 바뀔 수 있는 변수값이라는 뜻 */}
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
