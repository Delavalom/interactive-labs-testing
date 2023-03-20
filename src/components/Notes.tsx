import { api } from "@/utils/trpc";
import { type FC } from "react";


const Notes: FC = () => {
  // TODO: query the api to get the users data
  const users = api.getUsers.useQuery()

  if (!users.data) {
    return <section>Loading... thousand years later...</section>
  }
  
  return (
    <section className="">
      {/* UNCOMMENT THE LOGIC BELOW */}
      {users.data
        ? users?.data.map((user) => <p key={user.id}>{user.body.text}</p>)
        : "Loading..."}
    </section>
  );
};


export default Notes