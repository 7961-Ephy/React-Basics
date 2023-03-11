import './App.css';

function App() {
  return (
    <div className="App">
      <Employee salary={20000} position="Senior SDE" company="Amazon" />
      <Employee salary={19000} position="Junior SDE" company="Google" />
      <Employee salary={25000} position="Product Designer" company="Netflix" />
    </div>
  );
}

const Employee = (props)=>{   
  return(
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
}

export default App;
  