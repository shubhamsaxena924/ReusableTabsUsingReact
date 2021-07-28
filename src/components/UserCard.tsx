import React from "react";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
}

const UserCard: React.FC<Props> = (props) => {
  return (
    <div className="items-center hidden bg-white rounded-lg shadow-lg hover:shadow-2xl lg:flex">
      <div className="flex items-center justify-center flex-shrink-0 w-40 h-full text-3xl text-white rounded-l-lg bg-primary-400">
        {props.firstName.charAt(0) + props.lastName.charAt(0)}
      </div>
      <div className="w-64 p-4 text-center">
        <h2 className="text-xl font-semibold tracking-wide text-gray-700">
          {props.firstName + " " + props.lastName}
        </h2>
        <p className="mt-1 text-xs font-medium tracking-wide text-gray-500">
          {props.gender.toUpperCase()}
        </p>

        <div className="p-4 text-xs tracking-wider text-gray-600 xs:hidden md:inline-block">
          {props.email}
        </div>
        <a
          className="inline-block px-4 py-2 mr-0 text-gray-500 border rounded-md shadow hover:shadow-xl hover:text-gray-700 hover:bg-primary-200"
          href={"mailto: " + props.email}
        >
          <span className="hidden sm:inline-block">Email</span>
          <span className="sm:hidden">@</span>
        </a>
      </div>
    </div>
  );
};

export default React.memo(UserCard);
