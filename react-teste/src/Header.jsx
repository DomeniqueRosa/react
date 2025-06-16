import Globe from './assets/Globe.png';

export default function Header(){
    return(
        <>
        <div className="bg-red-400 flex gap-2 place-content-center  place-items-center p-4 h-[50px]">
        <img src={Globe} alt="globo" />
        <h1 className="text-white">my travel journal</h1>
        </div>
        </>
    )
}