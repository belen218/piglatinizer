$( "document" ).ready(function() {


$('#button').click(function(){
    console.log('hi')
    var inputValue = $('.input').val()
    console.log(inputValue)

    var firstLetter=inputValue[0];
    var vowels=['a','e','o','u'];

    if (vowels.includes(firstLetter)){
        return 'starts with vowels'
    }

    $('.output').text(inputValue)

});



})


