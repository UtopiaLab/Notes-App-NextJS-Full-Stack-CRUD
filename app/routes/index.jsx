import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Lets Write a Note in New Full-Stack RemixJS React Framework
        </h1>
        <p className="des">
          Try this newest React framework technology introduced in 2023
        </p>
        <div className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <Link to="/notes">Write Now!</Link>
        </div>
      </div>
    </div>
  );
}
