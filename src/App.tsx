import React, { useState } from "react";
import UserList from "./components/UserList";

interface Props {}

const App: React.FC<Props> = (props) => {
  const [page, setPage] = useState(1);
  return (
    <div className="h-full py-8 text-center bg-primary-100">
      <h1 className="py-5 font-serif text-4xl font-semibold tracking-wider text-center text-gray-600">
        Random Users' list
      </h1>
      <p className="py-2 tracking-wider text-gray-400">
        Note: Users on a page are not fixed, they are randomly fetched.
      </p>
      <div className="flex items-center justify-center text-gray-700">
        <button
          className="p-1 border rounded-sm bg-primary-300 bg-opacity-10 hover:bg-opacity-20 hover:shadow-lg"
          onClick={() => setPage((n) => n - 1)}
        >
          {"<<"}
        </button>
        <p className="px-5 tracking-widest">{"Page " + page}</p>
        <button
          className="p-1 border rounded-sm bg-primary-300 bg-opacity-10 hover:bg-opacity-20 hover:shadow-lg"
          onClick={() => setPage((n) => n + 1)}
        >
          {">>"}
        </button>
      </div>
      <UserList page={page} />
    </div>
  );
};

export default App;
