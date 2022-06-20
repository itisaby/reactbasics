import ConditionBasic from "./ConditionalRendering/ConditionBasic";
import ElementVariables from "./ConditionalRendering/ElementVariables";
import TernaryConditional from "./ConditionalRendering/TernaryConditional";
import ErrorBoundary from "./Error Boundary/ErrorBoundary";
import Hero from "./Error Boundary/Hero";
import BasicBinding from "./Events/BindingEvent/BasicBinding";
import EventHandling from "./Events/EventHandling";
import EventHandlingClass from "./Events/EventHandlingClass";
import ControlledComponents from "./FormHandling/ControlledComponents";
import Fragment from "./Fragments/Fragment";
import Table from "./Fragments/Table";
import ClickCounter from "./Higher Order Components/ClickCounter";
import HoverCounter from "./Higher Order Components/HoverCounter";
import LifeCycle from "./LifeCycle Methods/LifeCycle";
import UpdatingLifeCycle from "./LifeCycle Methods/UpdatingLifeCycle";
import ListofOBjects from "./ListRendering/ListofOBjects";
import ListRendering from "./ListRendering/ListRendering";
import PortalsBasics from "./Portals/PortalsBasics";
import ParentComponent from "./Props/MethodAsProps/ParentComponent";
import { Employee } from "./Props/propBasic";
import ParentComp from "./PureComponent/ParentComp";
import PureComp from "./PureComponent/PureComp";
import FRParentInput from "./Refs/Forwarding Refs/FRParentInput";
import FocusInput from "./Refs/Refs in Class Component/FocusInput";
import RefsBasics from "./Refs/RefsBasics";
import ClickCounter2 from "./RenderProps/ClickCounter2";
import Counter2 from "./RenderProps/Counter2";
import HoverCounter2 from "./RenderProps/HoverCounter2";
import User from "./RenderProps/User";
import Counter from "./State/Counter";
import { StateBasic } from "./State/stateBasic";

function App() {
  return (
    <div className="App">
      <Employee name="Arnab" cid="1" />
      <StateBasic />
      <Counter />
      <div className="" style={{
        "backgroundColor": "red",
        "width": "100px", "height": "100px",
        "borderRadius": "50%", "margin": "10px"
      }}>
        <EventHandling />
      </div>
      <EventHandlingClass />
      <br />
      <BasicBinding />
      <br />
      <ParentComponent />
      <br />
      <ConditionBasic />
      <br />
      <ElementVariables />
      <br />
      <TernaryConditional />
      <br />
      <ListRendering />
      <br />
      <ListofOBjects />
      <br />
      <ControlledComponents />
      <br />
      <LifeCycle />
      <br />
      <UpdatingLifeCycle />
      <br />
      <Fragment />
      <br />
      <Table />
      <br />
      <RefsBasics />
      <br />
      <ParentComp />
      <br />
      <FocusInput />
      <br />
      <FRParentInput />
      <br />
      <PortalsBasics />
      <br />
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superhero" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <br />
      <h1>Higher Order Components</h1>
      <ClickCounter name="Arnab" />
      <br />
      <HoverCounter />
      <br />
      <h1>Render Props</h1>
      <Counter2 render={(count, increamentCount) => (
        <ClickCounter2 count={count} increamentCount={increamentCount} />
      )
      } />
      <Counter2 render={(count, increamentCount) => (
        <HoverCounter2 count={count} increamentCount={increamentCount} />
      )
      } />
      {/* <ClickCounter2/>
      <br/>
      <HoverCounter2/>
      <br/>
      <User render={(isLoggedIn)=> isLoggedIn?"Arnab":"Guest"}/> */}
    </div>
  );
}

export default App;
