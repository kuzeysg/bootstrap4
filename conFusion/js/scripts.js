$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-button").click(function(){
        if ($("#carousel-button").children("span").hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');                    
        }
    });
});

$(document).ready(function(){
    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    });
    $("#loginCancel").click(function(){
        $("#loginModal").modal('hide');
    });
});

$(document).ready(function(){
    $("#reserveButton").click(function(){
        $("#reserveModal").modal('show');
    });
    $("#reserveCancel").click(function(){
        $("#reserveModal").modal('hide');
    });
});
