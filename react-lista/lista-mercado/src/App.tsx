import { useRef, useState } from "react";
import ItemLista from "./componets/ItemLista.js";

function App() {
  const [lista, setLista] = useState([""]);
  const inputItem = useRef<HTMLInputElement>(null);

  const removeItem = (item: any) => {
    setLista(lista.filter((i) => i !== item));
  };

  const addItem = () => {
    const item = inputItem.current?.value;
    if(item){
      setLista([...lista, item]);
    }
  };

  return (
    <>
      <div className="grid w-auto place-items-center">
        <h1>Lista de Mercado</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Digite um item"
            className="border solid"
            ref={inputItem}
          />
          <button onClick={() => addItem()}>Adicionar</button>
        </div>

        <ul>
          {lista.map((item, index) => (
            <div className="flex gap-3">
              <ItemLista
                titulo={item}
                key={index}
              />
              <button onClick={() => removeItem(item)}>Excluir</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
