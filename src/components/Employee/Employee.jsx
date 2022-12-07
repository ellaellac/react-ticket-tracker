import "./Employee.scss";
import Counter from "../Counter/Counter";

const Employee = ({ name, role }) => {
  return (
    <div className="employee__card">
      <div className="employee__info">
        <h3>Name: {name} </h3>
        <h3>Role: {role} </h3>
      </div>
      <Counter />
    </div>
  );
};

export default Employee;
