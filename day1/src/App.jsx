import ProductCard from "./ProductCard"
import { useState } from "react";
import UserCard from "./UserCard";

function App() {
  const [show, setShow] = useState(false);

  const [users, setUsers] = useState([
  { id: 1, name: "Surya", role: "Junior" },
  { id: 2, name: "Rahul", role: "Junior" },
  { id: 3, name: "Kiran", role: "Junior" }
]);
function promoteUser(id) {

    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return { ...user, role: "Senior" }
      }
      return user
    });

    setUsers(updatedUsers);
  }
  return (
    <div>

      <h1>Products</h1>

      <ProductCard name="Phone" price="10000" />
      <ProductCard name="Laptop" price="50000" />
      <ProductCard name="Watch" price="2000" />

      <h1>Toggle Example</h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Details" : "Show Details"}
      </button>

      {show && <p>This is details</p>}

      <h1>User Dashboard</h1>

      {users.map(user => (

        <UserCard
          key={user.id}
          name={user.name}
          role={user.role}
          onPromote={() => promoteUser(user.id)}
        />

      ))}
    </div>
  )
}

export default App