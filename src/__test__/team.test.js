import Character from "../js/character";
import Team from "../js/team";

// eslint-disable-next-line no-undef
test("Add new character in team", () => {
    const caracter = new Character("Mag", "Magician");
    const team = new Team();
    team.add(caracter);
    // eslint-disable-next-line no-undef
    expect(team.members).toEqual(new Set([caracter]));
})

// eslint-disable-next-line no-undef
test("Add the same character in team", () => {
    const caracter = new Character("Mag", "Magician");
    const team = new Team();
    team.add(caracter);
    // eslint-disable-next-line no-undef
    expect(() => team.add(caracter)).toThrow();
})

// eslint-disable-next-line no-undef
test("Add the same character in team", () => {
    const caracter = new Character("Mag", "Magician");
    const caracter_ = new Character("Angel", "Undead");
    const team = new Team();
    team.add(caracter);
    team.add(caracter_);
    // eslint-disable-next-line no-undef
    expect(team.toArray()).toEqual([caracter, caracter_]);
})

// eslint-disable-next-line no-undef
test("Add all characters in team", () => {
    const caracter = new Character("Mag", "Magician");
    const caracter_ = new Character("Angel", "Undead");
    const characters = [caracter, caracter_]
    const team = new Team();
    team.addAll(...characters);
    // eslint-disable-next-line no-undef
    expect(team.members).toEqual(new Set([...characters]));
})
