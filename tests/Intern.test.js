const Intern = require('../lib/intern')

test('Should create an employee', () => {
    const employee = new Intern('Alec','email@email',28, 'UCF')
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.school).toEqual(expect.any(String))
});