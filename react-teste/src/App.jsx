import { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import axios from "axios";

export default function App() {
  const [dados, setDados] = useState([]);

  async function getDados() {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      //console.log(data);
      setDados(data);
    } catch (error) {
      console.log("erro:" + error);
    }
  }
  useEffect(() => {
    getDados();
  }, []);
  return (
    <>
      <Header />
      {dados.map((e) => <Card key={e.id} props={e} />)}
    </>
  );
}
