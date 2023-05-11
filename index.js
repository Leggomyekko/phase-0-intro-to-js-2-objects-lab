// Write your solution in this file!
const employee = {
    name: `Joe`,
    streetAddress: `42 Wallaby Way`,
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
const newName = destructivelyUpdateEmployeeWithKeyAndValue(employee, `name`, `Sam`);
const newAdress = destructivelyUpdateEmployeeWithKeyAndValue(employee, `streetAddress`, `12 Broadway`)
  
  function deleteFromEmployeeByKey(employee, key, value) {
    const updatedEmployee = {...employee };
    updatedEmployee[key] = value;
    return updatedEmployee
  }

  delete name. Joe

  function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    return employee;
  }

  delete name. Joe