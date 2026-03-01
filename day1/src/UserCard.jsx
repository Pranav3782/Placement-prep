function UserCard(props) {

  return (
    <div>

      <h2>{props.name}</h2>
      <p>{props.role}</p>

      <button onClick={props.onPromote}>
        Promote
      </button>

    </div>
  )
}

export default UserCard;