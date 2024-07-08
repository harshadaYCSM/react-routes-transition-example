import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState<string>("");

  const routes: { [key: string]: string } = {
    home: "/",
    contact: "/contact",
    about: "/about",
  };
  const handleRouteChange = (route: string) => {
    setActiveRoute(route);
    navigate(routes[route]);
  };

  const setColor = (route: string) => {
    return activeRoute === route ? "secondary" : "primary";
  };
  return (
    <div>
      {Object.keys(routes).map((route) => (
        <Button
          key={route}
          variant="contained"
          color={setColor(route)}
          onClick={() => handleRouteChange(route)}
        >
          {route}
        </Button>
      ))}
    </div>
  );
};

export default Header;
