import { api } from "@/utils/trpc";
import { type FC } from "react";


const Notes: FC = () => {
  // TODO: call the api to get the users data
  const users = { data: null }

  if (!users.data) {
    return <section>Loading... thousand years later...</section>
  }
  
  return (
    <section className="">
      {/* {users.data
        ? users?.data.map((user) => <p key={user.id}>{user.name}</p>)
        : "Loading..."} */}
    </section>
  );
};


export default Notes