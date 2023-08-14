import { useEffect } from "react";
import Header from "./header";
import "./main-page.css";

function App() {
  useEffect(() => {
    const fetchHouses = async () => {
      const resp = await fetch("/houses.json");
      const houses = await resp.json();
    };
    fetchHouses();
  }, []);

  return (
    <div className="container">
      <Header subtitle="Providing houses all over the world" />
    </div>
  );
}

export default App;
