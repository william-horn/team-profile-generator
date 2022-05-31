const Manager = require('../lib/Manager');

test('Manager constructor arguments', () => {
    const manager = new Manager(5, 1, 'william@gmail.com', 'Will');

    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.name).toBe('Will');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('william@gmail.com');
})

test('Manager method results', () => {
    const manager = new Manager(5, 2, 'william@gmail.com', 'Will');

    expect(manager.getOfficeNumber()).toBe(5);
    expect(manager.getName()).toBe('Will');
    expect(manager.getId()).toBe(2);
    expect(manager.getEmail()).toBe('william@gmail.com');
    expect(manager.getRole()).toBe('Manager');
})