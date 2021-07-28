import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import UserTile from "./UserTile";
import UserCard from "./UserCard";

interface Props {
  page: number;
}

const UserList: React.FC<Props> = (props) => {
  const [Users, setUsers] = useState<any>([]);

  useEffect(() => {
    console.log("Before Request was triggered");

    axios
      .get(
        "https://randomuser.me/api/?inc=id,name,gender,email&page=" +
          props.page +
          "&results=20"
      )
      .then((response) => {
        console.log("After response has been received.");
        console.log(response.data.results);
        setUsers(response.data.results);
      });
  }, [props.page]);
  return (
    <div className="px-10 pt-10 lg:space-x-5 lg:space-y-5 lg:flex lg:flex-wrap lg:justify-center">
      {Users.map((u: any) => (
        <>
          <div className="lg:hidden">
            <UserTile
              firstName={u.name.first}
              lastName={u.name.last}
              gender={u.gender}
              email={u.email}
            />
          </div>
          <UserCard
            firstName={u.name.first}
            lastName={u.name.last}
            gender={u.gender}
            email={u.email}
          />
        </>
      ))}
    </div>
  );
};

export default React.memo(UserList);
