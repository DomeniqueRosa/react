import { ChevronRightIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  console.log(title, description);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col max-h-screen place-items-center">
      <div className="w-[500px]">
        <div className="flex gap-5 justify-center">
          <button className="text-white" onClick={() => navigate("/")}>
            <ChevronRightIcon />
          </button>
          <Title titulo="Detalhes da tarefa" />
        </div>
        <div className="space-y-4 p-6 bg-slate-200 shadow rounded-md m-2">
          <h3 className="text-left text-slate-500 text-xl font-bold">
            {title}
          </h3>
          <p className="text-left text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
