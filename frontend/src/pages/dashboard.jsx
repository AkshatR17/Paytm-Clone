import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useSearchParams } from "react-router-dom";


export function Dashboard() {

  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount");
  const first = searchParams.get("firstName");

  return (
    <div>
      <AppBar label = {(first)}></AppBar>
      <div className="m-8">
        <Balance value={(amount)}></Balance>
        <Users></Users>
      </div>
    </div>
  );
}
