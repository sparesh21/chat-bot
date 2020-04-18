$(function () {
    $('.click-to-chat').on('click', function () {
        $('.click-to-chat').removeClass('grp-active');
        $(this).addClass('grp-active');
        var getTitle = $(this).find('small').text();
        $('.grp-name a small').text(getTitle);
    });

    /*==== for chat sccreen always on bottom ====*/
    $(".chat-screen").animate({
        scrollTop: $(document).height()
    }, "slow");
    $('#message-submit').on('click', function () {
        newMessage();
    });
    function newMessage() {
        message = $("#chat-message-val").val();
        console.log('function called', message);
        if ($.trim(message) == '') {
            return false;
        }
        $('<div class="recived-msg sent-message"> <div class="ppl-profile"> <img src="images/user.png" class="img-fluid"> <div class="name">You</div> <div class="time">15:47</div> </div> <div class="msgs"> <p>' + message + '</p> </div> </div>').appendTo($('.chat-screen'));
        // $('<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>' + message + '</p></li>').appendTo($('.chat-screen'));
        $('.message-input input').val(null);
        $('.contact.active .preview').html('<span>You: </span>' + message);
        $(".chat-screen").animate({ scrollTop: $(document).height() }, "fast");
    };
})