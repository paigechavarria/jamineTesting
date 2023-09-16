it('should calculate the monthly rate correctly', function () {
  expect(setupInitialValues({principle: 17000, interest: 0.05, months: 5}).toEqual(354.17));
  expect(setupInitialValues({principle: 20000, interest: 0.06, months: 6})).toEqual(377.78);
});
  
  
  it("should return a result with 2 decimal places", function() {
    expect(setupInitialValues({principle: 20000, interest: 0.06, months: 6})).toEqual(monthlyPayment.toFixed(2));
  });
  
