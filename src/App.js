import { Employee } from "./Props/propBasic";
import Counter from "./State/Counter";
import { StateBasic } from "./State/stateBasic";

function App() {
  return (
    <div className="App">
      <Employee name="Arnab" cid="1"/>
      <StateBasic/>
      <Counter/>
    </div>
  );
}

export default App;
