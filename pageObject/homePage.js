var value1= $('#lbl_val_1'),
    value2= $('#lbl_val_1'),
    value3= $('#lbl_val_1'),
    value4= $('#lbl_val_1'),
    value5= $('#lbl_val_1'),
    allValues= $$('[id^="lbl_val"]'),
    value1Text= $('#txt_val_1'),
    value2Text= $('#txt_val_2'),
    value3Text= $('#txt_val_3'),
    value4Text= $('#txt_val_4'),
    value5Text= $('#txt_val_5'),
    allValueTexts= $$('[id^="txt_val"]'),
    totalBalanceValue = $('#lbl_ttl_val'),
    totalBalanceText= $('#txt_ttl_val')
module.exports={
    VerifyRightCountofValues: function(){
        for(var i = 0;i<5;i++){
            allValues.get(i).then(function(text){
                text=text.split(' ');
                expect(text[1]).toEqual(i+1)
            })
        }
    },
    verifyValuesGreaterThanZero: function(){
        for(var i = 0;i<5;i++){
            allValueTexts.get(i).then(function(text){
                text=text.replace('$','');
                expect(text>0).toBe('true');
            })
        }
    },
    verifyTotalBalaceCorrect: function(){
        var expectedResult=0;
        for(var i = 0;i<5;i++){
            allValueTexts.get(i).then(function(text){
                text=text.replace('$','');
                expectedResult = expectedResult+text;
            })
        }
        totalBalanceText.then(function(actualResult){
            expect(expectedResult).toEqual(actualResult)
        })
    },
    verifyValuesFormattedCurrencies: function(){
        for(var i = 0;i<5;i++){
            allValueTexts.get(i).then(function(text){
                expect(text).to.contain('$')
            })
        }
    }
     
}


