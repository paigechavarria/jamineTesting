it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({principle: 17000, interest: .05, months: 5})).toEqual('354.17');
  expect(calculateMonthlyPayment({principle: 20000, interest: .06, months: 6})).toEqual('377.78');
});
  
  
  it("should return a result with 2 decimal places", function() {
    expect(updateMonthly(675.78888888)).toEqual('675.79');
  });

  afterEach(function(){
    const update = document.querySelector('#monthly-payment');
    update.innerHTML = '';
  })
  
