import { ChevronRightIcon, Square, SquareCheckBig, Trash2 } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "./Button";
function Tasks(prop: any) {
  const navigate = useNavigate();

  function onSeeDetail(title: any, description: any) {
    navigate(`/task?title=${title}&description=${description}`);
  }
  return (
    <div className="space-y-4 p-6 bg-slate-200 shadow rounded-md m-2">
      <div className="flex gap-2 place-items-centercenter">
        <div className="grid text-slate-500 place-items-center">
          {prop.task.isCompleted ? <SquareCheckBig /> : <Square />}
        </div>
        <button
          onClick={prop.my}
          className={`flex gap-2 list-none w-full bg-slate-400 text-white p-2 rounded-md text-left  h-[50px] overflow-auto${
            prop.task.isCompleted && "line-through"
          }`}
        >
          {prop.task.title}
        </button>
        <Button
          onClick={() => {
            onSeeDetail(prop.task.title, prop.task.description);
          }}
        >
          <ChevronRightIcon />
        </Button>
        <Button onClick={prop.remove}>
          <Trash2 />
        </Button>
      </div>
    </div>
  );
}

export default Tasks;
