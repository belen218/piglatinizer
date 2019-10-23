$( "document" ).ready(function() {


$('#button').click(function(){
    // console.log('hi')
    var inputValue = $('.input').val();
    var pigLatinizedWord = pigLatinizer(inputValue);
    $('.output').text(pigLatinizedWord);

    //console.log(inputValue)

    //var firstLetter = inputValue[0];
   // var vowels = ['a','e','i','o','u'];

    //if (vowels.includes(firstLetter)){
      //  var pigLatinizedWord = inputValue + "ay"
        //$('.output').text(pigLatinizedWord)
    //inputValue.slice[1] + inputValue[0]+ "ay"
    //}


});

});

function pigLatinizer (inputValue){

    var firstLetter=inputValue[0];
    var vowels=['a','e','o''u'];
}
if (vowels.includes(firstLetter)){
  return 'starts with vowels'
}


