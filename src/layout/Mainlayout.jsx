import React from 'react';
import Navbar from "../components/Navbar";
import Contents from "../components/Contents";

function MainLayout() {
  return (
    <section id="main-layout">
    <Navbar></Navbar>
    <Contents></Contents>
  </section>
  );
}

export default MainLayout;
