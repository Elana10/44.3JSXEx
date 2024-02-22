const App = () =>{
    return (
        <div>
            <Tweet username = "OneLove" name="Bob Marley" date = "2/3/2024" message = "Let's get together and we'll be alright."/>
            <Tweet username = "SoccerIsLife" name="Danny" date = "2/22/2024" message = "I could play soccer every day!"/>
            <Tweet username = "FriendlyNeighborhoodSpider" name="Peter Parker" date = "2/22/2024" message = "Hope everyone is having a great day!"/>
        </div>
    )
} 

ReactDOM.render(<App/>, document.getElementById("root"))