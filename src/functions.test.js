const functions = require('./functions');

//toBE
test('Add num' , () => {
    expect(functions.add(2, 2)).toBe(4);
});


//toBeNull
test('Should be Null' , () => {
    expect(functions.isNull()).toBeNull();
});


//toBeLessThan
test('Should be less than 2000' , () => {
    expect(functions.add(376, 1564)).toBeLessThan(2000);
});

//toBeLessThanOrEqual
test('Should be less than or equal to 2000' , () => {
    expect(functions.add(1200, 800)).toBeLessThanOrEqual(2000);
});

//Regex
test('There is no I in my name' , () => {
    expect('Sahara').not.toMatch(/I/);
});

//Arrays
test('John should be in Usernames', () => {
    Usernames = ['john','harry','caesar'];
    expect(Usernames).toContain('john');
});

//Async data
test('User fetched should be Leanne Graham', () =>{
    expect.assertions(1);
    return functions.fetchUser().then(data =>{
      expect(data.name).toEqual('Leanne Graham');

    });
});

//Async await
test('User fetched should be Leanne Graham(Using aync await)', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
      expect(data.name).toEqual('Leanne Graham');
});