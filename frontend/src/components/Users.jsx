import { useState } from "react";
import { Button } from "./Button";

export const Users = () => {
  const [users, setUsers] = useState([
    {
      firstName: "Akshat",
      lastName: "Garg",
      _id: 1,
    },
  ]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div>
        <input
          type="text"
          placeholder="Serach users...."
          className="w-full px-2 py-1 border rounded border-slate-200 "
        />
      </div>
      <div className="mt-2">
        {users.map((user) => (
          <User user={user}></User>
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
function User({ user }) {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <div>
                {user.firstName} {user.lastName}
            </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button label={"Send Money"}></Button>
      </div>

    </div>
  );
}
