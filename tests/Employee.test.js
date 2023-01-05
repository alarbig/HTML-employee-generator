const Employee = require('../lib/employee')

test('Should create an employee', () => {
    const employee = new Employee('Alec','email@email',28)
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))

});

