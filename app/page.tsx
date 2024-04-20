import DetailResultCard from "./components/DetailResultCard";
import CurrencyNumber from "./components/CurrencyNumber";
import { api } from "./lib/axios";
import Header from "./components/Header";
type ResumeResponde = {
  TotalIncome: number;
  TotalExpenses: number;
  Result: number;

}
export default async function Home()
{
  const res: ResumeResponde = ( await api.get( "/resume?userId=1" ) ).data

  return (
    <>
      <Header title={"Home"} />
      <main className="p-2 pt-10">
        <div className="flex flex-col items-center mx-auto  p-4 my-auto rounded-lg bg-green-500">
          <p className="text-xl text-white">Resultado do mês</p>
          <div className=" text-white my-4 flex flex-col items-center" >
            <CurrencyNumber className="text-3xl" value={res.Result} />
            <div className="grid grid-cols-2 gap-2 ">
              <DetailResultCard amount={res.TotalIncome} ></DetailResultCard>
              <DetailResultCard isGain={false} amount={res.TotalExpenses}></DetailResultCard>
            </div>
          </div>
          <a href="/transactions/resume" className="underline ">Extrato</a>
        </div>
      </main>
    </>
  );
} 