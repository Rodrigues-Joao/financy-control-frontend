import DetailResultCard from "./components/DetailResultCard";
import CurrencyNumber from "./components/CurrencyNumber";
import { api } from "./lib/axios";
type ResumeResponde = {
  TotalIncome: number;
  TotalExpenses: number;
  Result: number;

}
export default async function Home()
{
  const res: ResumeResponde = ( await api.get( "/resume?userId=1" ) ).data

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex min-h-screen ">
        <div className="flex flex-col items-center mx-auto  p-10  my-auto rounded-lg bg-green-500">
          <p className="text-xl text-white">Resultado do mês</p>
          <div className=" text-white my-4" >
            <CurrencyNumber className="text-3xl" value={res.Result} />
          </div>
          <div className="flex gap-8">

            <DetailResultCard amount={res.TotalIncome} ></DetailResultCard>
            <DetailResultCard isGain={false} amount={res.TotalExpenses}></DetailResultCard>
          </div>
          <a href="/transactions/resume" className="underline ">Extrato</a>
        </div>
      </div >
    </main>
  );
} 1