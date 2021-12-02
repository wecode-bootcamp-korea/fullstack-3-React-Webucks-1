import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginMinsu from "./pages/minsuKang/Login/Login";
import ListMinsu from "./pages/minsuKang/List/List";
import DetailMinsu from "./pages/minsuKang/Detail/Detail";
import LoginEunbi from "./pages/eunbiChoi/Login/Login";
import ListEunbi from "./pages/eunbiChoi/List/List";
import DetailEunbi from "./pages/eunbiChoi/Detail/Detail";
import LoginJoonhong from "./pages/joonhongPark/Login/Login";
import ListJoonhong from "./pages/joonhongPark/List/List";
import DetailJoonhong from "./pages/joonhongPark/Detail/Detail";
import LoginJunhyeok from "./pages/junhyeok/Login/Login";
import ListJunhyeok from "./pages/junhyeok/List/List";
import DetailJunhyeok from "./pages/junhyeok/Detail/Detail";
import LoginTaeyeong from "./pages/taeYeong/Login/Login";
import ListTaeyeong from "./pages/taeYeong/List/List";
import DetailTaeyeong from "./pages/taeYeong/Detail/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-minsu" element={<LoginMinsu />} />
        <Route path="/list-minsu" element={<ListMinsu />} />
        <Route path="/detail-minsu" element={<DetailMinsu />} />
        <Route path="/login-eunbi" element={<LoginEunbi />} />
        <Route path="/list-eunbi" element={<ListEunbi />} />
        <Route path="/detail-eunbi" element={<DetailEunbi />} />
        <Route path="/login-joonhong" element={<LoginJoonhong />} />
        <Route path="/list-joonhong" element={<ListJoonhong />} />
        <Route path="/detail-joonhong" element={<DetailJoonhong />} />
        <Route path="/login-junhyeok" element={<LoginJunhyeok />} />
        <Route path="/list-junhyeok" element={<ListJunhyeok />} />
        <Route path="/detail-junhyeok" element={<DetailJunhyeok />} />
        <Route path="/login-taeyeong" element={<LoginTaeyeong />} />
        <Route path="/list-taeyeong" element={<ListTaeyeong />} />
        <Route path="/detail-taeyeong" element={<DetailTaeyeong />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}
export default Router;