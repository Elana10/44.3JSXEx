const Tweet = ({username, name, date, message}) =>{
    return (
        <p>{username} just posted: {message} by {name} on {date}</p>
    )
}