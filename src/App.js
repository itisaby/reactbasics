

const Employee = (props) => {
  return (
    <div className="employee">
      <h2>Your Name: {props.name}</h2>
      <h3>Your CID: {props.cid}</h3>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Employee name="Arnab" cid="1"/>
    </div>
  );
}

export default App;
