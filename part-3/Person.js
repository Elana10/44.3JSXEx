const Person = ({name, age, hobbies}) => {
    let voteReply;
    if (age < 18){
        voteReply = <h3> You must be at least 18 to vote. </h3>
    } else {
        voteReply = <h3> Please go vote! </h3> 
    }
    let displayName;
    if(name.length > 8){
        console.log(name.length)
        displayName = name.slice(0,6)
    } else {
        displayName = name;
    }

    return (
        <div>
            <h2>Learn some information about this person. </h2>
            <span>Name: {displayName} </span> <br/>
            <span>Age: {age} {voteReply}</span>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(h => (
                    <li>{h}</li>
                ))}
            </ul>
        </div>
    )
}