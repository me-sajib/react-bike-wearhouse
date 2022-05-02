import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItem from "./Pages/AddItem/AddItem";
import Home from "./Pages/Home/Home";
import CheckItem from "./Pages/Home/CheckItem/CheckItem";
import Nav from "./Pages/Home/Nav";
import Login from "./Pages/Login/Login";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import UserItems from "./Pages/UserItem/UserItems";
import PrivateAuth from "./Pages/PrivateAuth/PrivateAuth";
import Registration from "./Pages/Registration/Registration";
import Footer from "./Pages/Shared/Footer/Footer";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
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
        <Route path="/myItem" element={<UserItems />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
