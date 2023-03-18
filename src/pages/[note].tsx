import Link from "next/link";
import { type FC } from "react";

type Props = {};

const Note: FC<Props> = () => {
  // TODO: Extract the query param

  return (
    <section className="center">
      <h1 className="text-4xl font-semibold">
        {/* TODO: Display the query param from the route */}
        note
      </h1>
      <Link href="/" className="underline">
        Go Home
      </Link>
    </section>
  );
};

export default Note;
