/* eslint-disable @next/next/no-html-link-for-pages */
import { useRouter } from "next/router";
import { type FC } from "react";

type Props = {};

const Note: FC<Props> = ({}) => {
  // TODO: Extract the query param from useRouter hook

  return (
    <section className="center">
      <h1 className="text-4xl font-semibold">
        {/* TODO: Display the query param from the route */}
        Note
      </h1>
      {/* TODO: Convert the following "a" tag to a Link Component */}
      <a href="/" className="underline">Go Home</a>
    </section>
  );
};

export default Note