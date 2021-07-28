import React from "react";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
}

const UserTile: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center justify-between max-w-3xl p-4 mx-auto mb-4 overflow-hidden bg-white rounded-md shadow-lg hover:shadow-2xl xs:flex-row">
      <div className="flex flex-col items-center space-y-4 xs:space-y-0 xs:flex-row">
        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full shadow-lg bg-primary-400">
          {props.firstName.charAt(0) + props.lastName.charAt(0)}
        </div>
        <div className="text-center xs:ml-5 xs:text-left">
          <h3 className="font-semibold tracking-wider text-gray-700">
            {props.firstName + " " + props.lastName}
          </h3>
          <p className="text-xs tracking-wide text-gray-500">
            {props.gender.toUpperCase()}
          </p>
        </div>
      </div>
      <div className="flex text-center">
        <p className="hidden p-4 text-xs tracking-widest text-gray-600 sm:inline-block">
          {props.email}
        </p>
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

export default React.memo(UserTile);
