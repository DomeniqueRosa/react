export default function Card({ props }) {
  return (
    <>
      <div className="flex place-content-center ">
        <div className="border-0 bg-gray-100 rounded-md shadow p-2 m-2 h-[200px] w-[70%] overflow-auto">
          <h2 className="text-2xl pb-2">{props.title}</h2>
          <p>{props.body}</p>
        </div>
      </div>
    </>
  );
}
