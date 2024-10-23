import { CardDemo } from "./Cardalert";
import Navbar from "./Navbar";
import { StocksDemo } from "./Stockalert";
import { TableDemo } from "./Transactions";
import { GraphDemo } from "./Graph";

export default function Dashboard() {
  return (
    <div>
      <div className="ml-28 mr-28 mb-16 flex flex-col gap-10 mb-0">
        <div className="flex flex-col gap-10 justify-between ">
          <Navbar />
          <p className="justify-start text-start text-5xl font-bold">
            DashBoard
          </p>
        </div>
        <div className="flex flex-row gap-10">
          <GraphDemo />
          <CardDemo />
        </div>
        <div className="flex flex-row gap-10">
          <StocksDemo />
          <TableDemo />
        </div>
      </div>
    </div>
  );
}
