import BasicBinding from "./Events/BindingEvent/BasicBinding";
import EventHandling from "./Events/EventHandling";
import EventHandlingClass from "./Events/EventHandlingClass";
import ParentComponent from "./Props/MethodAsProps/ParentComponent";
import { Employee } from "./Props/propBasic";
import Counter from "./State/Counter";
import { StateBasic } from "./State/stateBasic";

function App() {
  return (
    <div className="App">
      <Employee name="Arnab" cid="1" />
      <StateBasic />
      <Counter />
      <div className="" style={{"backgroundColor": "red", 
      "width": "100px", "height": "100px",
      "borderRadius": "50%", "margin": "10px"}}>
        <EventHandling />
      </div>
      <EventHandlingClass/>
      <BasicBinding/>
      <ParentComponent/>
    </div>
  );
}

export default App;
