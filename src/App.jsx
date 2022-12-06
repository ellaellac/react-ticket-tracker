import "./App.scss";
import team from "./data/data";
import Employee from "./components/Employee/Employee";

const App = () => {
  const employeeCardJsx = team.map(({ id, name, role }) => (
    <Employee key={id} name={name} role={role} />
  ));
  return (
    <body className="container">
      <h1 className="title">Ticket Tracker</h1>
      <main>{employeeCardJsx}</main>
    </body>
  );
};

export default App;
