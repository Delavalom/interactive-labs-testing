/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import { useRouter } from "next/router";
import { type FC } from "react";

type Props = {};

const Note: FC<Props> = () => {
  // TODO: Extract the query param from useRouter hook
  const { note } = useRouter().query;

  return (
    <section className="center">
      <h1 className="text-4xl font-semibold">
        {/* TODO: Display the query param from the route */}
        {note}
      </h1>
      {/* TODO: Convert the following "a" tag to a Link Component */}
      {/* <a href="/" className="underline">Go Home</a> */}
      <Link href="/" className="underline">
        Go Home
      </Link>
    </section>
  );
};

export default Note;
