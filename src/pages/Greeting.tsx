import Link from "next/link";

export default function Greeting(): JSX.Element {
  return (
    <>
      <div className="grid -p16 place-items-center space-y-2">
        <h1 className="content-center text-4xl font-bold sm:text-6xl">
          Hello There
        </h1>
        <p className="text-sm font-thin italic sm:text-lg">-Obi-Wan Kenobi</p>
      </div>
    </>
  );
}
