function multiply(a, b) {
    return a*b;
}

describe('Assess the accuracy of products', ()=>{
    test('Should equal to 50', () => {
      expect (multiply(2, 10)) .toBe(20)
    })
    
})


test('should be greater than 4', ()=>{
    let number = 3+1;
    expect(number).toBe(4);
   expect(number).toBeLessThan(12)
   expect(number).toBeGreaterThan(2)
})

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.3);
  });

test('Theres no xy in samuel Douglas', () => {
    let name = "Samuel Douglas Othieno";
    expect(name).not.toMatch(/xy/)
})

test('Theres no xy in samuel Douglas', () => {
    let name = "Samuel Douglas Othieno";
    expect(name).toMatch(/Douglas/)
})
