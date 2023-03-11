import { api } from "../utils/trpc";
import { type FC } from "react";


const Notes = () => {
    // const users = api.getUsers.useQuery()
  const users = {data: null}

  if (!users.data) {
    return <section>Loading... thousand years later...</section>
  }
  
  return (
    <section className="">
      {/* {users.data
        ? users?.data.map((user) => <p key={user.id}>{user.body.text}</p>)
        : "Loading..."} */}
    </section>
  );
};


export default Notes