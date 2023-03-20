import { api } from "@/utils/trpc";
import { type FC } from "react";


const Notes: FC = () => {
  // TODO: query the api to get the users data
  const users = {data: null}

  if (!users.data) {
    return <section>Loading... thousand years later...</section>
  }
  
  return (
    <section className="">
      {/* UNCOMMENT THE LOGIC BELOW */}
      {/* TODO: Display an array of p tags with the data from trpc */}
    </section>
  );
};


export default Notes