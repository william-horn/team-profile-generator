const Intern = require('../lib/Intern');

test('Intern constructor arguments', () => {
    const intern = new Intern('UNC', 1, 'william@gmail.com', 'Will');
    
    expect(intern.school).toBe('UNC');
    expect(intern.name).toBe('Will');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('william@gmail.com');
})

test('Intern method results', () => {
    const intern = new Intern('UNC', 2, 'william@gmail.com', 'Will');

    expect(intern.getSchool()).toBe('UNC');
    expect(intern.getName()).toBe('Will');
    expect(intern.getId()).toBe(2);
    expect(intern.getEmail()).toBe('william@gmail.com');
    expect(intern.getRole()).toBe('Intern');
})