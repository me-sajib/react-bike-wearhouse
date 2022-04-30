import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./Pages/AddItem/AddItem";
import Home from "./Pages/Home/Home";
import CheckItem from "./Pages/Home/ManageInventory/CheckItem";
import Nav from "./Pages/Home/Nav";
import Login from "./Pages/Login/Login";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import MyItem from "./Pages/MyItem/MyItem";
import PrivateAuth from "./Pages/PrivateAuth/PrivateAuth";
import Registration from "./Pages/Registration/Registration";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/checkItem/:id"
          element={
            <PrivateAuth>
              <CheckItem />
            </PrivateAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/inventory" element={<ManageInventory />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/myItem" element={<MyItem />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
