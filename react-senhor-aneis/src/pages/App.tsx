import { useEffect, useRef, useState } from "react";
import api from "../services/api";
import Card from "../components/Card";
import type {Movie} from "../model/Movie";

import logo from "../assets/convincely.svg";
export default function App() {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [moviesFilter, setmoviesFilter] = useState<Movie[]>([]);

  const input = useRef<HTMLInputElement>(null);

  const filtermovie = () => {
    const valor = input.current?.value;
    setmoviesFilter(
      movies.filter((m) =>
        m.name.toLowerCase().includes(valor?.toLowerCase() || "")
      )
    );
  };

  async function getMovies() {
    try {
      const res = await api().get("movie");
      console.log(res.data.docs);
      setMovies(res.data.docs);
      setmoviesFilter(res.data.docs);
    } catch (error) {
      alert("erro: " + error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <header className="bg-header h-14 mb-10 py-4">
        <div className="text-white  px-4 flex justify-between  place-items-center">
          <img className="" src={logo} alt="" />
          <p>Senior Frontend Test</p>
        </div>
      </header>
      <div className="grid place-content-center">
        {/* title */}
        <div className="w-[80%]  h-[129px] flex justify-between ">
          <div className="pt-5 flex flex-col  h-full w-3/4">
            <h3 className="text-3xl ">Lord of the Rings Movies</h3>
            <p>
              Ave. movie runtime:{" "}
              {movies.reduce((acc, cur) => acc + cur.runtimeInMinutes, 0) /
                movies.length}{" "}
              min
            </p>
            <p>
              Ave. movie budget: $
              {movies.reduce((acc, cur) => acc + cur.budgetInMillions, 0) /
                movies.length}
              M
            </p>
          </div>
          <div className="w-1/2 place-content-end">
            <input
              ref={input}
              onChange={filtermovie}
              className="p-2 border-2 rounded-md focus:border-slate-100 border-slate-200 placeholder-slate-400"
              type="text"
              placeholder="Filter movies by name"
            />
          </div>
        </div>
        <hr className="border my-8" />

        <div className="grid grid-cols-4 gap-4">
          {moviesFilter.map((m) => {
            return <Card {...m} />;
          })}
        </div>
      </div>
    </>
  );
}
