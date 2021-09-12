//Stoic

$('#getStoic').click(function() {
    $('#stoicAudio').trigger('play');
    $('#stoicAudio').css('display', 'flex');
})

$('#pauseStoic').click(function() {
    $('#stoicAudio').trigger('pause');
})
$('#restartStoic').click(function() {
    let vid = document.getElementById("stoicAudio");
    vid.currentTime = 0;
    $('#stoicAudio').css('display', 'none')
})

$('#2XStoic').click(function() {
    let vid = document.getElementById("stoicAudio");
    vid.playbackRate = 2.0;
})

$('#1.5XStoic').click(function() {
    let vid = document.getElementById("stoicAudio");
    vid.playbackRate = 1.5;
})

$('#1XStoic').click(function() {
    let vid = document.getElementById("stoicAudio");
    vid.playbackRate = 1.0;
})

//SimpCheck
$('#getSimpCheck').click(function() {
    $('#simpAudio').trigger('play');
    $('#simpAudio').css('display', 'flex');
})

$('#pauseSimpCheck').click(function() {
    $('#simpAudio').trigger('pause');
})
$('#restartSimpCheck').click(function() {
    let vid = document.getElementById("simpAudio");
    vid.currentTime = 0;
    $('#simpAudio').css('display', 'none');
})

$('#2XSimpCheck').click(function() {
    let vid = document.getElementById("simpAudio");
    vid.playbackRate = 2.0;
})

$('#1.5XSimpCheck').click(function() {
    let vid = document.getElementById("simpAudio");
    vid.playbackRate = 1.5;
})

$('#1XSimpCheck').click(function() {
    let vid = document.getElementById("simpAudio");
    vid.playbackRate = 1.0;
})
//Zen
$('#getZen').click(function() {
    $('#Zen').trigger('play');
    $('#Zen').css('display', 'flex');
})

$('#pauseZen').click(function() {
    $('#Zen').trigger('pause');
})
$('#restartZen').click(function() {
    let vid = document.getElementById("Zen");
    vid.currentTime = 0;
    $('#Zen').css('display', 'none');
})

$('#2XZen').click(function() {
    let vid = document.getElementById("Zen");
    vid.playbackRate = 2.0;
})

$('#1.5XZen').click(function() {
    let vid = document.getElementById("Zen");
    vid.playbackRate = 1.5;
})

$('#1XZen').click(function() {
    let vid = document.getElementById("Zen");
    vid.playbackRate = 1.0;
})

//Limitless1

$('#getLimitless1').click(function() {
    $('#Limitless1').trigger('play');
    $('#Limitless1').css('display', 'flex');
})

$('#pauseLimitless1').click(function() {
    $('#Limitless1').trigger('pause');
})
$('#restartLimitless1').click(function() {
    let vid = document.getElementById("Limitless1");
    vid.currentTime = 0;
    $('#Limitless1').css('display', 'none');
})

$('#2XLimitless1').click(function() {
    let vid = document.getElementById("Limitless1");
    vid.playbackRate = 2.0;
})

$('#1.5XLimitless1').click(function() {
    let vid = document.getElementById("Limitless1");
    vid.playbackRate = 1.5;
})

$('#1XLimitless1').click(function() {
    let vid = document.getElementById("Limitless1");
    vid.playbackRate = 1.0;
})

//Limitless2

$('#getLimitless2').click(function() {
    $('#Limitless2').trigger('play');
    $('#Limitless2').css('display', 'flex');
})

$('#pauseLimitless2').click(function() {
    $('#Limitless2').trigger('pause');
})
$('#restartLimitless2').click(function() {
    let vid = document.getElementById("Limitless2");
    vid.currentTime = 0;
    $('#Limitless2').css('display', 'none');
})

$('#2XLimitless2').click(function() {
    let vid = document.getElementById("Limitless2");
    vid.playbackRate = 2.0;
})

$('#1.5XLimitless2').click(function() {
    let vid = document.getElementById("Limitless2");
    vid.playbackRate = 1.5;
})

$('#1XLimitless2').click(function() {
    let vid = document.getElementById("Limitless2");
    vid.playbackRate = 1.0;
})

//Observations scribed or engraved 

$('#scribe').click(function() {
    let message = $('textarea').val();
    if (message != '') {
        alert(message);
    }
    else {
        alert('Message field left blank.');
    }

})

$('#engrave').click(function() {
    let message = $('textarea').val();
    let text = $('#observationBody').text();
    if (message != '') {
        text + message;
    }
    else {
        alert('Message field left blank.');
    }

})