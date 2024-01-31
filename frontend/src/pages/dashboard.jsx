import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard() {
  return (
    <div>
      <AppBar></AppBar>
      <div className="m-8">
        <Balance value={"10,000"}></Balance>
        <Users></Users>
      </div>
    </div>
  );
}
