import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons"
import DetailResultCard from "./components/DetailResultCard";

export default function Home()
{
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex min-h-screen ">
        <div className="flex flex-col items-center mx-auto  p-10 h-96 my-auto rounded-lg bg-green-500">
          <p className="text-3xl text-white">Resultado do mês</p>
          <div>
            <p>R$ 10.0000,00</p>
          </div>
          <div className="flex gap-8">

            <DetailResultCard></DetailResultCard>
            <DetailResultCard></DetailResultCard>
          </div>
        </div>
      </div >
    </main>
  );
}
