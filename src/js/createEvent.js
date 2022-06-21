

$( function() {
    $( "#eventDate" ).datepicker({
        dateFormat: 'yy/mm/dd',
        changeMonth: true,
        changeYear: true,
        constrainInput: true,
        minDate: "0D",
        maxDate: "+1M",
    });

    $('#eventTimeStart').timepicker({
        timeFormat: 'hh p',
        interval: 60,
        minTime: '10',
        maxTime: '5:00pm',
        defaultTime: '10',
        startTime: '10:00',
        dynamic: false,
        dropdown: true,
        scrollbar: false
    });

    $('#eventTimeEnd').timepicker({
        timeFormat: 'hh p',
        interval: 60,
        minTime: '11',
        maxTime: '6:00pm',
        defaultTime: '11',
        startTime: '10:00',
        dynamic: false,
        dropdown: true,
        scrollbar: false
    });
} );




