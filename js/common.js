//main

$(document).ready(function(){
    //이미지가 위로 3초마다 이동
    setInterval(function(){
        $('.main ul').animate({
            top: '-=' +300 //이미지 높이만큼 위로 올라감
        },'slow',function(){
            $('.main li').first().appendTo('.main ul');
            $('.main ul').css('top',0);
        });
    },3000);
});



//gnb
$(document).ready(function(){
    $('.gnb').hover(function(){
        $('.subnav').stop().slideDown('fast');

    },function(){
        $('.subnav').stop().slideUp('fast');

    });
});


//board

$(document).ready(function(){
    $('.btn a').click(function(){
        $('.btn a').removeClass('active');
        $(this).addClass('active');

        //클릭한 부모의 인덱스번호를 담는 변수
        var index = $(this).parent().index();

        $('.bwrap >div').stop().fadeOut(0);
        $('.bwarp >div').eq(index).stop().fadeIn(0);
    });

});