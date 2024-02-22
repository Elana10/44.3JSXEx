const App = () =>{
    return(
        <div>
            <Person name="Charlie Brown" age={16} hobbies = {['baseball', 'music', 'friends']}/>
            <Person name="Max" age={21} hobbies = {["world's end", 'metal']}/>
            <Person name="12345678" age={40} hobbies = {['coffee']}/>
        </div>
    )
} 

ReactDOM.render(<App/>, document.getElementById("root"))