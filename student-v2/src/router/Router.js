import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import MainHome from "../view/home/MainHome";
import MainStuden from "../view/student/MainStuden";
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<h1> MainHome </h1>} />
          <Route path="/Student" element={<h1> MainStuden </h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
