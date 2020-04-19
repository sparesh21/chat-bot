$(function () {
    winWidth = $(window).width();

    $('.click-to-chat').on('click', function () {
        $('.click-to-chat').removeClass('grp-active');
        $(this).addClass('grp-active');
        var getTitle = $(this).find('small').text();
        $('.grp-name a small').text(getTitle);
        if (winWidth <= 767) {
            $('#group-chat-screen').fadeIn();
        }
    });
    $('.individual-listing .listing-items').on('click', function () {
        $('.individual-listing .listing-items').removeClass('active');
        $(this).addClass('active');
        var getTitle = $(this).find('h4').text();
        var getImg = $(this).find('img').attr('src');
        $('.grp-name a small').text(getTitle);
        $('.grp-name a .user-icon-pic img').attr('src', getImg);
        if (winWidth <= 767) {
            $('#individual-chat-screen').fadeIn();
        }
    });
    if (winWidth > 767) {
        $('.nav-tabs .nav-link').on('click', function () {
            var currentTab = $(this).attr('href');
            if (currentTab === "#rooms") {
                $('#individual-chat-screen').hide();
                $('#group-chat-screen').fadeIn();
            }
            if (currentTab === "#directs") {
                $('#group-chat-screen').hide();
                $('#individual-chat-screen').fadeIn();
            }
        })
    }
    /*==== for chatting with new message ====*/
    if (winWidth <= 767) {
        $('.close-btn').on('click', function () {
            $('.chat-screen-panel').fadeOut();
        })
    }
    /*==== for chat sccreen scroll always on bottom ====*/
    $(".chat-screen").animate({
        scrollTop: $(document).height()
    }, "slow");

    /*==== for chatting with new message ====*/


    //message chatting
    $('.message-submit').on('click', function () {
        setFlag = $(this).data('flag');
        newMessage(setFlag)
    });

    function newMessage(flag) {
        message = $('.' + flag + '-chat-message-val').val();
        if ($.trim(message) == '') {
            return false;
        }
        console.log(message);
        $('<div class="recived-msg sent-message"> <div class="ppl-profile"> <img src="images/user.png" class="img-fluid"> <div class="name">You</div> <div class="time">15:47</div> </div> <div class="msgs"> <p>' + message + '</p> </div> </div>').appendTo($('.' + flag + '-chat-screen'));
        $('.message-input input').val(null);
        $('.contact.active .preview').html('<span>You: </span>' + message);
        $('.' + flag + '-chat-screen').animate({ scrollTop: $(document).height() }, "fast");

        // to clear input box
        setTimeout(() => {
            message = $('.' + flag + '-chat-message-val').val("");
        }, 100);
    };
    $(window).on('keydown', function (e) {
        if (e.which == 13) {
            newMessage();
            return false;
        }
    });

    /*==== for chatting with new message end ====*/
})