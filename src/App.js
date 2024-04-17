import './App.css';

fetch('https://catfact.ninja/fact')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

function App() {
  fetch('https://catfact.ninja/fact')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  return (
    <div className="App">
      <button>Generate cat fact</button>
    </div>
  );
}

export default App;
