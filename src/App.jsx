import { useState } from "react";
import "./App.css";
import User from "./User";
import Header from "./Header";
import Login, { Profile, Settings, userKey } from "./UserComponent";
import WithouJSX from "./WithouJSX";
import ToDo from "./ToDo";
import Counter from "./Counter";
import Props from "./Props";
import Props2 from "./Props2";
import PropsObjective3 from "./PropsObjective3";
import PropsCondition from "./PropsCondition";
/* This is code modification for Lec 14-15*/
import Skills from "./Skills";
import Clock from "./Clock"

function App() {
  const [val, setVal] = useState("");

  const [Name, setName] = useState("");

  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  const [count, setCount] = useState(0);

  const [incount, setinCount] = useState(0);
  const incerementCount = () => {
    console.log(incount);
    alert(incount);
    setinCount(incount + 1);
  };

  const [incount2, setinCount2] = useState(0);
  function incerementCount2() {
    console.log(incount2);
    alert(incount2);
    setinCount2(incount2 + 1);
  }

  const myFunctionToExploreArrow = () => {
    console.log("Button Clicked");
    alert("Button Clicked");
  };

  const myFunctionToExploreArrowArguemtns = (count) => {
    console.log(count, "Button Clicked");
  };
  const [myState, setmyState] = useState(false);
  const myFunctionToExploreArrowArguemtnsWithState = (count) => {
    console.log(count, "Button Clicked");
    alert("Button Clicked");
    setmyState(!myState);
  };
  /* alert(sum()) */

  /* This is code modification/added for Lec 14-15 */

  const [fruits, setFruit] = useState("Apple");

  const [Display, setDisplay] = useState(true);

  const handleFruit = () => {
    setFruit("Banana");
  };

  /* This is code modification/added for Lec 14-15 */

  const fruit = (name) => {
    alert(name);
  };

  /* This is code modification for Lec 17*/

  const [conditioncount, conditionsetCount] = useState(0);
  {
    /* This is code modification for Lec 18*/
  }

  {
    /* This is code modification for Lec 18*/
  }

  let name = "Hassan";
  let age = 20;

  let userObject1 = {
    name: "Object name 1",
    age: "age 1",
  };

  let userObject2 = {
    name: "Object name 2",
    age: "age 2",
  };
  let students = ["student1", "student2", "student3"];
  let [stud, setStud] = useState(students[1]);

  const [gender, setGender] = useState("female");
  const [city, setCity] = useState("Lahore");

  const userData = [
    {
      name: "Anil",
      age: 34,
      id: "1",
    },
    {
      name: "hassan",
      age: 31,
      id: "2",
    },
  ];


  const [color, setColor] = useState("green");





  return (
    <>
      {/* This is code modification for Lec 18*/}

      <Props name="Hassans" age={29} />
      <Props2 name="Hassans" age={29} />

      <Props name={name} age={age} />
      <Props2 name={name} age={age} />

      <PropsObjective3 user={userObject1} />

      {students && <PropsCondition student={students[0]} />}

      <h1>{stud}</h1>
      <button onClick={() => setStud(students[2])}>
        Click to Change Student
      </button>

      {/* This is code modification for Lec 18*/}

      {/* This is code modification for Lec 17*/}
      <h1>{conditioncount}</h1>

      <button
        onClick={() => {
          conditionsetCount(conditioncount + 1);
        }}
      >
        click
      </button>
      {conditioncount == 1 ? (
        <h1>Condition : {conditioncount}</h1>
      ) : conditioncount == 2 ? (
        <h1>Condition : {conditioncount}</h1>
      ) : conditioncount == 3 ? (
        <h1>Condition : {conditioncount}</h1>
      ) : conditioncount == 4 ? (
        <h1>Condition : {conditioncount}</h1>
      ) : conditioncount == 5 ? (
        <h1>Condition : {conditioncount}</h1>
      ) : conditioncount == 6 ? (
        <h1>Condition : {conditioncount}</h1>
      ) : null}

      {/* This is code modification/added for Lec 16 */}
      <h1> This is toggle exercise</h1>
      {/*  Display? <h1>This is dispaly</h1>:null  
    if display variable exist print heading else null */}
      <button onClick={() => setDisplay(!Display)}>Toggle</button>

      {Display ? <h1>This is toggle dispaly</h1> : null}

      {/* This is code modification/added for Lec 16 */}

      {/* This is code modification/added for Lec 14-15 */}

      <Counter />
      <h1>{fruits}</h1>
      <button onClick={handleFruit}> Change Fruits</button>

      {/* This is code modification/added for Lec 14-15 */}

      <Header />
      <ToDo />
      <button onClick={() => fruit("apple")}>Apple</button>
      <WithouJSX />
      <h1>code Step by Step</h1>
      <h1>Hello React 19</h1>
      <h1>
        Counter : {count} :Sum Function : {sum()}
      </h1>
      <User />

      <button onClick={() => setCount(count + 1)}>
        Click to increase Counter
      </button>

      {/* Optionally, fix these components as needed */}
      <Fruit />
      <Color />

      <Login />
      <Profile />
      <Settings />
      <h1>{userKey}</h1>

      {/* This is code modification for Lec 20*/}
      <h1> Get Input Field Value</h1>

      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
        placeholder="Enter username"
      />
      <h1>{val}</h1>
      <button onClick={() => setVal("")}>Clear</button>

      {/* This is code modification for Lec 20*/}

      {/* This is code modification for Lec 21*/}

      <h1> Controller Component</h1>
      <form action="" method="get">
        <input
          type="text"
          value={Name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Name"
        />
        <br /> <br />
        <input
          type="text"
          value={Password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter password"
        />
        <br /> <br />
        <input
          type="text"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter email"
        />
        <br /> <br />
        <button>Submit</button>
        <button
          onClick={() => {
            setEmail("");
            setPassword("");
            setEmail("");
          }}
        >
          Clear
        </button>
        <h3>{Name}</h3>
        <h3>{Password}</h3>
        <h3>{Email}</h3>
      </form>

      {/* The difference Between Arrow Function and Normal*/}
      <h1>The difference Between Arrow Function and Normal</h1>
      <h2>
        {" "}
        Arrow Function Constantly redecreate when render count : {incount}
      </h2>
      <button onClick={incerementCount}> Increment Count</button>
      <h2>
        {" "}
        Normal Function make sure it does not recreated constantly count :{" "}
        {incount2}
      </h2>
      <button onClick={incerementCount2}> Increment Count</button>

      <div>
        {/* This will work but when to pass arguemnt is does not work*/}

        <button onClick={myFunctionToExploreArrow}>Click</button>
      </div>

      <div>
        {/* button will not work :<button onClick={myFunctionToExploreArrowArguements(20)}></button>*/}
        {/* Even if we pass arguments */}
      </div>

      <div>
        {/* button will not work :<button onClick={myFunctionToExploreArrowArguementsWithState(20)}></button>*/}
        {/* Even if we add states it will terminate infinitely execute because it rerenders infinitely */}
      </div>

      <div>
        {/* To make it Work */}

        <button onClick={() => myFunctionToExploreArrowArguemtnsWithState(20)}>
          Click Work with(){" "}
        </button>
      </div>

      <div>
        {/* Lec 22 */}

        <h1>Lec 22: Check boxes</h1>
        <Skills />

        {/* Lec 23 */}
        <h1>Lec 23</h1>

        <h3> Select Gender</h3>
        <input
          type="radio"
          onChange={(event) => setGender(event.target.value)}
          checked={gender == "male"}
          name="gender"
          value="male"
          id="male"
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          onChange={(event) => setGender(event.target.value)}
          checked={gender == "female"}
          name="gender"
          value="female"
          id="female"
        />
        <label htmlFor="female">Female</label>
        <br />
        <h2>Display Gender : {gender}</h2>

        <h3> Select Cities</h3>
        <select
          onChange={(event) => setCity(event.target.value)}
          defaultValue={"Lahore"}
        >
          <option value="Lahore">Lahore</option>
          <option value="Karachi">Karachi</option>
          <option value="Faisalabad">Faisalabad</option>
        </select>

        <h2>Display Gender : {city}</h2>
      </div>

      {/* Lec 24 */}
      <h1>Lec 24</h1>

      <h3>Static Table</h3>
      <table border="1" align="center">
        <thead>
          <tr>
            <th>Name</th> {/* Use <th> for headers */}
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hassan</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Ahmad</td>
            <td>21</td>
          </tr>
        </tbody>
      </table>

      <h3>Loop Map Function Table</h3>
      <table border="1" align="center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div align="center">
        {/* Lec 25 */}
        <h1>Lec 25 : clock and color change according to props</h1>
        <select onChange={(event)=>setColor(event.target.value)}>
          <option value={"green"}>green</option>
          <option value={"orange"}>orange</option>
          <option value={"red"}>red</option>
        </select>
        
        <Clock color={color}/>
      </div>
    </>
  );
}

function Fruit() {
  return <h1>Apple</h1>;
}

function Color() {
  return <h1>Red</h1>;
}

function sum() {
  return 10 + 10;
}

export default App;
