import { useState, useEffect } from "react";

function FetchApi() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });

    return () => {
      console.log("Cleanup called");
    };

  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error occurred</h2>;
  }

  return (
    <div>

      <h1>Users</h1>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default FetchApi;