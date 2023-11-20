import React from "react";
import "./navbar.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="navbar">
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          ></motion.span>
        </div>
        <div className="social">
          <a href="#">
            <LinkedInIcon sx={{ fontSize: 30 }} />
          </a>
          <a href="#">
            <GitHubIcon sx={{ fontSize: 30 }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
