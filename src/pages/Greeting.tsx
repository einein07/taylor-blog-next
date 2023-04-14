import { type NextPage } from "next";

export default function Greeting(): JSX.Element {
  return (
    <>
      <div className="grid place-items-center">
        <h1 className="content-center text-4xl font-bold">Hello There</h1>
        <p className="font-thin">-Obi Wan Kenobi</p>
      </div>
    </>
  );
}
