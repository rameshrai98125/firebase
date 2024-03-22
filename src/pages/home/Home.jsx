import { useContext } from "react";
import MyContext from "../../context/data/MyContext";

function Home() {
  const context = useContext(MyContext);
  const { name } = context;
  return <div>Home {name} </div>;
}

export default Home;
