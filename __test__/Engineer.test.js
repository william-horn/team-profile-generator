

const Engineer = require('../lib/Engineer');

test('Engineer constructor arguments', () => {
    const eng = new Engineer('https://github.com/william-horn', 1, 'william@gmail.com', 'Will');

    expect(eng.github).toBe('https://github.com/william-horn');
    expect(eng.name).toBe('Will');
    expect(eng.id).toEqual(expect.any(Number));
    expect(eng.email).toBe('william@gmail.com');
})

test('Engineer method results', () => {
    const eng = new Engineer('https://github.com/william-horn', 2, 'william@gmail.com', 'Will');

    expect(eng.getGithub()).toBe('https://github.com/william-horn');
    expect(eng.getName()).toBe('Will');
    expect(eng.getId()).toBe(2);
    expect(eng.getEmail()).toBe('william@gmail.com');
    expect(eng.getRole()).toBe('Engineer');
})
