
import { Router, Routes, Route } from "react-router-dom";
import Header from "../Component/Header";
import Home from "../Component/Home";
import ViewProduct from "../Component/ViewProduct";
function MyRouter() {

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="product-view" element={<ViewProduct />} />
            </Routes>
        </div>
    )
}

export default MyRouter;