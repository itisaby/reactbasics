import ConditionBasic from "./ConditionalRendering/ConditionBasic";
import ElementVariables from "./ConditionalRendering/ElementVariables";
import TernaryConditional from "./ConditionalRendering/TernaryConditional";
import BasicBinding from "./Events/BindingEvent/BasicBinding";
import EventHandling from "./Events/EventHandling";
import EventHandlingClass from "./Events/EventHandlingClass";
import ControlledComponents from "./FormHandling/ControlledComponents";
import Fragment from "./Fragments/Fragment";
import Table from "./Fragments/Table";
import LifeCycle from "./LifeCycle Methods/LifeCycle";
import UpdatingLifeCycle from "./LifeCycle Methods/UpdatingLifeCycle";
import ListofOBjects from "./ListRendering/ListofOBjects";
import ListRendering from "./ListRendering/ListRendering";
import ParentComponent from "./Props/MethodAsProps/ParentComponent";
import { Employee } from "./Props/propBasic";
import ParentComp from "./PureComponent/ParentComp";
import PureComp from "./PureComponent/PureComp";
import FocusInput from "./Refs/Refs in Class Component/FocusInput";
import RefsBasics from "./Refs/RefsBasics";
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
      <br/>
      <BasicBinding/>
      <br/>
      <ParentComponent/>
      <br/>
      <ConditionBasic/>
      <br/>
      <ElementVariables/>
      <br/>
      <TernaryConditional/>
      <br/>
      <ListRendering/>
      <br/>
      <ListofOBjects/>
      <br/>
      <ControlledComponents/>
      <br/>
      <LifeCycle/>
      <br/>
      <UpdatingLifeCycle/>
      <br/>
      <Fragment/>
      <br/>
      <Table/>
      <br/>
      <RefsBasics/>
      <br/>
      <ParentComp/>
      <br/>
      <FocusInput/>
    </div>
  );
}

export default App;
