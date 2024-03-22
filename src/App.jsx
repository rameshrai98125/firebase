import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/registeration/Register";
import Login from "./pages/registeration/Login";
import About from "./pages/about/About";
import { ProtectedRoute } from "./protectedRoute/ProtectedRoute";
import AddProduct from "./pages/addProduct/AddProduct";
import UpdateProduct from "./pages/updateProduct/UpdateProduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/updateproduct" element={<UpdateProduct />} />
        ss
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
