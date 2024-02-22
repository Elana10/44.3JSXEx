const App = () => {
    return (
        <div>
                <FirstComponent/>
                <NamedComponent name="Elana"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))