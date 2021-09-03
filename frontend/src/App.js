import Header from "./components/header.js"

// Equivalent to line below, function App () AND const App = () => 
// function App () {
const App = () => {
  return (
    <div className="Container">
      <Header title = "Sending props" anyname = '2nd prop'/>
    </div>
  );
}

export default App;
