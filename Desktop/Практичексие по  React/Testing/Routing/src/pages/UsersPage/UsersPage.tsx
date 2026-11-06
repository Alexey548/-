import { ChangeEvent } from "react";
import { USERS } from "../../data";
import { useSearchParams, Link } from "react-router-dom";
import "./UsersPage.css";

export function UsersPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearchName = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchParams({ name: value });
  };

  const searchName = (searchParams.get("name") || "").toLowerCase();

  const filteredUsers = USERS.filter(({ fullName }) =>
    fullName.toLowerCase().includes(searchName)
  );

  return (
    <div className="usersPage">
      <h2>UsersPage</h2>

      <div className="users">
        <label>
          введите имя {" "}
          <input type="text" value={searchParams.get("name") || ""} onChange={handleSearchName} />
        </label>

        {filteredUsers.map(({ id, fullName }) => (
          <Link to={`/users/${id}`} key={id}>
            {fullName}
          </Link>
        ))}
      </div>
    </div>
  );
}
