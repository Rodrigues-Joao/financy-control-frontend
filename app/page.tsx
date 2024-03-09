import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"
import DetailResultCard from "./components/DetailResultCard";
import CurrencyNumber from "./components/CurrencyNumber";
import { api } from "./lib/axios";

export default function Home()
{
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex min-h-screen ">
        <div className="flex flex-col items-center mx-auto  p-10  my-auto rounded-lg bg-green-500">
          <p className="text-xl text-white">Resultado do mês</p>
          <div className=" text-white my-4" >
            <CurrencyNumber className="text-3xl" value={10000} />
          </div>
          <div className="flex gap-8">

            <DetailResultCard amount={0} ></DetailResultCard>
            <DetailResultCard isGain={false} amount={0}></DetailResultCard>
          </div>
        </div>
      </div >
    </main>
  );
}