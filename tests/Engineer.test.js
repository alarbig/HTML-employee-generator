const Engineer = require('../lib/engineer')
const Employee = require('../lib/employee');

test('Should create an employee', () => {
    const employee = new Engineer('Alec','email@email',28, 'alec@github.com')
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.github).toEqual(expect.any(String))
});