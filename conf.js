let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    framework: 'jasmine',

    directConnect: 'true',
    specs: ['testCases/verifyValues.js'],
    
    
    onPrepare: function(){
      browser.manage().window().maximize();
      jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
      }));

      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'demo/screenshots',
        
        preserveDirectory: false,
         screenshotsSubfolder: 'images',
         jsonsSubfolder: 'jsons',
         docName: 'Verification-Report.html'
     }).getJasmine2Reporter());



    } 
  };