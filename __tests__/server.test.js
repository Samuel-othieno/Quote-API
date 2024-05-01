function multiply(a, b) {
    return a*b;
}

describe('Assess the accuracy of products', ()=>{
    test('Should equal to 50', () => {
      expect (multiply(2, 10)) .toBe(20)
    })
    
})