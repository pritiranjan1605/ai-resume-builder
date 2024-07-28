import React from "react";
import { Button } from "./components/ui/button";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./home/Home";
import { useUser } from "@clerk/clerk-react";
import Header from "./components/ui/custom/Header";
import Dashboard from "./dashboard";
import Footer from "./components/ui/custom/Footer";
import { Toaster } from "./components/ui/sonner";

const App = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/sign-in"} />;
  }
  return (
    <>
      <Header />
      <Outlet />
      <Toaster/>
      <Footer/>
    </>
  );
};

export default App;
