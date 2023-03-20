import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div id="content">
      <h1 className="font-bold underline">Lets Write a Note in New Full-Stack Next.JS React Framework</h1>
      <p className="des">Try this newest React technology introduced in 2023</p>
      <Link to="/notes">Write Now!</Link>
    </div>
  );
}
