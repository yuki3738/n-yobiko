(function(){
    'use strict';
    var myBirthTime = new Date(1982, 11, 17, 12, 30);
    function updateParagraph(){
        var now = new Date();
        var seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
        var days = (seconds / 60 / 60 / 24);
        document.getElementById('birth-time').innerText = '生まれてから' + days + '日経過。';
    }
    setInterval(updateParagraph, 1000);
})();
