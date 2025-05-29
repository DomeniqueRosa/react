import type {Movie} from "../model/Movie";
import movie from "../assets/Vector.svg";
import award from "../assets/Academy-award.svg";
export default function Card(props: Movie) {
  return (
    <>
      <div
        key={props._id}
        className="
        grid grid-rows-[45%_]
        max-w-[240px] h-[328px]  rounded-md shadow-xl "
      >
        <div className="bg-gray-300 flex place-items-center pl-[40%]">
          <img src={movie} alt="" />
        </div>
        <div className="mx-4 flex flex-col gap-4 text-gray-500">
          <div className="h-[40%]">
            <h3 className="font-bold text-gray-800 text-xl">{props.name}</h3>
            <p className="text-sm">{props.runtimeInMinutes} min</p>
          </div>

          <div className="flex gap-1 h-[10%] place-items-center">
            <img src={award} alt="award" />
            <p>{props.academyAwardWins}Wins</p>
            <p>&</p>
            <p>{props.academyAwardNominations}Nominations</p>
          </div>
          <div className="flex gap-12">
            <div>
              <h5 className="font-bold">Budget</h5>
              <p>$ {props.budgetInMillions}M</p>
            </div>
            <div>
              <h5 className="font-bold">Revenue</h5>
              <p>${props.boxOfficeRevenueInMillions}M</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
