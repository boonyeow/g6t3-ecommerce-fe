import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/products");
  }, []);

  return "HELLO HOME";
};

export default HomePage;
