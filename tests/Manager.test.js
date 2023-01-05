

const Manager = require('../lib/Manager');

test('Should create an employee', () => {
    const employee = new Manager('Alec','email@email',28, 123456789)
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.phone).toEqual(expect.any(Number))
});