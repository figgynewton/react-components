import './App.css';
import Box1 from "./components/boxes/Box1";
import Box2 from "./components/boxes/Box2";
import Nav from "./components/nav/Nav";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Nav></Nav>
                <br/>
                <br/>
                <Box1 firstName={"Newt "} lastName={"Newton"}></Box1>
                <br/>
                <Box2 name={"Name: Beefy Bob"} color={"My Coolest Color is Vermilion"} start={102}/>
                <Box2 name={"Name: Squilliam"} color={"My Coolest Color is Amaranth"} start={38}/>
                <Box2 name={"Name: Sir Turbo"} color={"My Coolest Color is Mikado"} start={71}/>
            </header>
        </div>
    );
}

export default App;

