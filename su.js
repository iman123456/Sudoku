var row1;
var row2;
var row3;
var row4;
var col1;
var col2;
var col3;
var col4;

alert("Navigate with arrows, delete with backspace and End ^_^ Play!");
//********************************************************************************************************//
$(function() {

    currentRow=0;
    currentCell=1;
    var current;
    current = $("tr:eq(" + currentRow + ") td input:first");
    current.focus();
    current.css({"border": "5px solid DarkSalmon "});

  //*********************************************************************************************************//
    //position used in navigation with arrows

    function position() {
        current = $("tr:eq(" + currentRow + ")>td:eq(" + currentCell + ")>input");
        current.focus();
        current.css({"border": "5px solid DarkSalmon "});
    }
    //*************************************************************************************************************//
    //winning state and finish button

    $("#but1").on("click", function () {
        // alert("game");
        row1 = parseInt($("#navigate :input").eq(0).val())
            + parseInt($("#navigate :input").eq(1).val())
            + parseInt($("#navigate :input").eq(2).val())
            + parseInt(d1.innerText);
        // alert('row1');
        // alert(row1);

        row2 = parseInt($("#navigate :input").eq(3).val())
            + parseInt($("#navigate :input").eq(4).val())
            + parseInt($("#navigate :input").eq(5).val())
            + parseInt(d8.innerText);
        // alert('row2');
        // alert(row2);

        row3 = parseInt($("#navigate :input").eq(6).val())
            + parseInt($("#navigate :input").eq(7).val())
            + parseInt($("#navigate :input").eq(8).val())
            + parseInt(d10.innerText);
        // alert("row3");
        // alert(row3);

        row4 = parseInt($("#navigate :input").eq(9).val())
            + parseInt($("#navigate :input").eq(10).val())
            + parseInt($("#navigate :input").eq(11).val())
            + parseInt(d15.innerText);
        // alert("row4");
        // alert(row4);


        col1 = parseInt($("#navigate :input").eq(3).val())
            + parseInt($("#navigate :input").eq(6).val())
            + parseInt($("#navigate :input").eq(9).val())
            + parseInt(d1.innerText);
        // alert("col1");
        // alert(col1);

        col2 = parseInt($("#navigate :input").eq(0).val())
            + parseInt($("#navigate :input").eq(4).val())
            + parseInt($("#navigate :input").eq(10).val())
            + parseInt(d10.innerText);
        // alert("col2");
        // alert(col2);

        col3 = parseInt($("#navigate :input").eq(1).val())
            + parseInt($("#navigate :input").eq(5).val())
            + parseInt($("#navigate :input").eq(7).val())
            + parseInt(d15.innerText);
        // alert("col3");
        // alert(col3);

        col4 = parseInt($("#navigate :input").eq(2).val())
            + parseInt($("#navigate :input").eq(8).val())
            + parseInt($("#navigate :input").eq(11).val())
            + parseInt(d8.innerText);
        // alert("col4");
        // alert(col4);


        if (row1 == 10 && row2 == 10 && row3 == 10 && row4 == 10 && col1 == 10 && col2 == 10 && col3 == 10 && col4 == 10) {
            var reply = confirm("WIN, Play again!");
            if (reply == true) {
                location.reload();
            } else {
                open(location, '_self').close();
            }
        }
        else {
            var reply = confirm("LOSER, Play again!");
            if (reply == true) {
                location.reload();
            } else {
                open(location, '_self').close();
            }
        }

    }); //end of winning

    //*******************************************************************************************//
    // prevent mouse
    $(":input").mousedown(function (e) {
        e.preventDefault();
    })

    //to navigate in game use keyboard arrows
    //use backspace tp delete
    //end helps to enable delete

    //end
    //***************************************************************************//
    //timer
    var start = 120; // 2 minutes --> 60*2
    var i = 0;

    var timer = setInterval(function () {
        $('#timing').text(Math.floor((start - i) / 60) + " : " + ((start - i) % 60 ));       //#timing-->time
        i++;
        if (start == i)
        {
            window.clearInterval(timer);
            var UserReply = confirm("The time finished,Play again?");
            if (UserReply == true)
                location.reload();
            else
                open(location, '_self').close();
        }
    }, 1000); //end of timer
    //************************************************************************************************************//
    //restart button
    $(":button").click(function () {
        location.reload();
    });   //end of restart

    //************************************************************************************************************//

    //random element in fixed cells
    var items = [1, 2, 3, 4];
    d1.innerHTML = items[Math.floor(Math.random() * 4)];
    d8.innerHTML = items[Math.floor(Math.random() * 4)];
    d10.innerHTML = items[Math.floor(Math.random() * 4)];
    d15.innerHTML = items[Math.floor(Math.random() * 4)];
    //end of random element assignment

    //*****************************************************************************************************//
    // to ensure that not 3 of them are the same random values to enable the user to play
    //  if(((d1.innerText==d8.innerText)&&(d8.innerText)||d10.innerText))||((d10.innerText==d15.innerText)&&(d1.innerText==d8.innerText)))
    //      location.reload();//end
    //
    //
    //
    // console.log(d1, d10, d15, d8); //to ensure it's working
    //************************************************************************************************************//
   // to restrict inputs to be numbers

    $("table td").keydown(function (e) {
        // Allow backspace,escape, enter, delete and refresh
        if ($.inArray(e.keyCode, [8, 27, 13, 127, 116]) !== -1 ||

            //Allow left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number from 1 to 4 and stop the keypress
        if (!((e.keyCode > 48 && e.keyCode < 53))) {
            e.preventDefault();
        }
    });
    //end

     // ***********************************************************************************************************//
    //to force input one number from the user
    $(".validate").keyup(function (e) {
        var val = $(this).val();
        if (val.length > 1) {
            val = val.substring(1);
            $(this).val(val);
            return false;
        }
    }).keypress(function (event) {
        if ($(this).val().length > 1) {
            return false;
        }

    });
    //end of input validation

     //***************************************************************************************************************//
    // //indicator of input values from the user
    var values = [];
    $("#all :input").keyup(function () {
        values[$(this)] = $(this).val();
        console.log(values);
    })
        .keyup(); //end

//*******************************************************************************************************************//
    $(document).keydown(function (e) {
        if (e.keyCode == 39) { //right
            current = $("tr:eq(" + currentRow + ")>td:eq(" + currentCell + ")>input");
            current.css({"border": "none"});
            currentCell++;
            if (currentCell > 3)
                currentCell = 0;
            current = $("tr:eq(" + currentRow + ")>td:eq(" + currentCell + ")>input");
            if(current.length ==0) {
                currentCell++;
                if (currentCell > 3)
                    currentCell = 0;
            }
            console.log(currentCell);
            position();
        }


        else if (e.keyCode == 37) { //left
            current = $("tr:eq(" + currentRow + ")>td:eq(" + currentCell + ")>input");
            current.css("border", "none");
            currentCell--;
            if (currentCell < 0)
                currentCell = 3;
            current = $("tr:eq(" + currentRow + ")>td:eq(" + currentCell + ")>input");
            if(current.length ==0) {0
                currentCell--;
                if (currentCell < 0)
                    currentCell = 3;
            }
            console.log(currentCell);
            position();


        }
        else if (e.keyCode == 38) //up
        {
            current = $("tr:eq(" + currentRow + ")>td:eq(" + currentCell + ")>input");
            current.css("border", "none");
            currentRow--;
            if (currentRow < 0)
                currentRow = 3;
            current = $("tr:eq(" + currentRow + ")>td:eq(" + currentCell + ")>input");
            if(current.length ==0) {
                currentRow--;
                if (currentRow < 0)
                    currentRow = 3;
            }
            console.log(currentRow);
            position();
        }

        else if (e.keyCode == 40) //down
        {
            current = $("tr:eq(" + currentRow + ")>td:eq(" + currentCell + ")>input");
            current.css("border", "none");
            currentRow++;
            if (currentRow > 3)
                currentRow = 0;
            current = $("tr:eq(" + currentRow + ")>td:eq(" + currentCell + ")>input");
            if(current.length ==0) {
                currentRow++;
                if (currentRow > 3)
                    currentRow = 0;
            }
            console.log(currentRow);
            position();
        }
    });
        //****************************************************************************




});