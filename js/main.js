$(document).ready(function() {
    'use strict'; // Prevents certain (unsafe) actions from being taken and throws more exceptions.

    $(btnGeneratepw).click( function() {
        let inputNbr = $(pwLength).val();
        let finalPw = generateRandpw(inputNbr);

        $(result).text(finalPw);
    });

    function generateRandpw(lenght) {
        var randCharFreq = " ";
        var charset = "abcdefghijklmnopqrstuvwxyz0123456789*#?!";

        if( lenght <= 0 | lenght > 100 | isNaN(lenght)){
            randCharFreq = "The password length must be between 1 - 100";
        }
        else {
            for( var i=0; i < lenght; i++ ){
                randCharFreq += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            if (lenght < 8) {
               $(helpfulMessage).text("We suggest a password with the length of at least 8 chars");
           }
           else{
               $(helpfulMessage).text(" ");
           }
        }

        return randCharFreq;
    }
});
