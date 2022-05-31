
const Employee = require('../lib/Employee');

test('Employee constructor arguments', () => {
    const employee = new Employee(1, 'william@gmail.com', 'Will');

    expect(employee.name).toBe('Will');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('william@gmail.com');
})

test('Employee method results', () => {
    const employee = new Employee(2, 'william@gmail.com', 'Will');

    expect(employee.getName()).toBe('Will');
    expect(employee.getId()).toBe(2);
    expect(employee.getEmail()).toBe('william@gmail.com');
    expect(employee.getRole()).toBe('Employee');
})
