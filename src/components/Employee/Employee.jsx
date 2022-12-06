import "./Employee.scss";

const Employee = ({ name, role }) => {
  return (
    <div className="employee__card">
      <h3>Name: {name} </h3>
      <h3>Role: {role} </h3>
      <div className="employee__counter">
        <h3>Counter</h3>
        <p>0</p>
        <button> + </button>
        <button> - </button>
      </div>
    </div>
  );
};

export default Employee;
