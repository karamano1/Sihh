var homePage = requirePage('homePage');

describe('Verify values',function(){
    it('Verify right count of values apeear',function(){
        homePage.VerifyRightCountofValues();
    }) 
    it('verify the values on the screen are greater than 0',function(){
        homePage.verifyValuesGreaterThanZero();
    }) 
    it('verify the total balance is correct based on the values',function(){
        homePage.verifyTotalBalaceCorrect();
    }) 
    it('verify the values are formatted as currencies',function(){
        homePage.verifyValuesFormattedCurrencies();
    }) 
    it('verify the total balance matches the sum of the values',function(){
        homePage.VerifyRightCountofValues();
    }) 

})