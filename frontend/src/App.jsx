import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateFact from "./pages/CreateFact";
import EditFact from "./pages/EditFact";
import ShowFact from "./pages/ShowFact";
import DeleteFact from "./pages/DeleteFact";


const App = () => {

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/facts/create" element={<CreateFact />} />
      <Route path="/facts/details/:id" element={<ShowFact />} />
      <Route path="/facts/edit/:id" element={<EditFact />} />
      <Route path="/facts/delete/:id" element={<DeleteFact />} />
    </Routes>
  )
}

export default App;