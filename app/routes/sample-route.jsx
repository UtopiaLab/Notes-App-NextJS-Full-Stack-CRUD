// any file in routes folder act as a new route
import { Link } from "@remix-run/react";

export default function SampleRoute() {
  return (
    <>
      <h1>Sample Route Page</h1>
      {/* traditional way to add a link */}
      <a href="/sample-route">Sample Route - Refreshing Page</a>
      <br />
      {/* new way to add a link */}
      <Link to="/sample-route">Sample Route - No Refresh</Link>
    </>
  );
}
