test('Should handle current dates', () => {
    expect({date: new Date()}).toMatchSnapshot()
})

test('Should handle non-current dates', () => {
    expect({date: new Date(2018, 1, 1)}).toMatchSnapshot()
})

test('Should ignore non-date objects', () => {
    expect({notADate: {something: 'else'}}).toMatchSnapshot()
})

test('Should ignore non-objects', () => {
    let val = {
        string: 'string',
        bool: true,
        undef: undefined,
        obj: {not: 'an object'},
        num: 1,
        arr: ['nope', 'nope', 'nope']
    }
    expect(val).toMatchSnapshot()
})