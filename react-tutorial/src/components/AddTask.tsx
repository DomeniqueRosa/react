import { useState } from "react";
import Input from "./Input";
function AddTask(prop : any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="flex flex-col space-y-4 p-6 bg-slate-200 shadow rounded-md m-2">
      <Input
        type="text"
        value={title}
        placeholder="Digite o titulo da tarefa"
        onChange={(event : any) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        value={description}
        onChange={(event : any) => setDescription(event.target.value)}
        placeholder="Digite a descrição da tarefa"
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("precisa preencher os campos");
          }
          prop.add(title, description), setTitle(""), setDescription("");
        }}
        className="bg-slate-500 p-2 rounded-md text-white shadow"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
