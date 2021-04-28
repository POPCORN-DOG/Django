// Ctrl+shift+i > console : 자바스크립트 코드 test //
function scrollUp(){
    // $('html, body').animate({scrollTop: 1000}, 500); - 스크롤 이동  // 
    // 500 값은 듀레이션이다. //
    // 1000값은 고정값이 아니다. 즉, 각 .test의 height값을 가져와야한다. //

    // $('.test').height(); - .test의 상단 픽셀 값 반환  //
    // vheight 변수 선언 //
    const vheight = $('.test').height();

    $('html, body').animate({
        // $(window).scrollTop(): 현재 상단의 픽셀 위치를 반환 //
        // Math.floor: 버림 // 
        scrollTop: (    ( Math.floor($(window).scrollTop() / vheight) - 1 ) * vheight)
    }, 500); 
}

// //
function scrollDown(){
    const vheight = $('.test').height();

    $('html, body').animate({
        // $(window).scrollTop(): 현재 상단의 픽셀 위치를 반환 //
        // Math.floor: 버림 // 
        scrollTop: (    ( Math.floor($(window).scrollTop() / vheight) + 1 ) * vheight)
    }, 500); 
}

// //
$(function(){
    // next 버튼을 눌렀을 때 다음 문항(scrollDown) 호출 //
    $('.next_btn').click(function(e){
        // 문제 check 후 넘어갈 수 있게 유효성 검사를 한다. //

        // this: 클릭 이벤트가 발생한 요소 //

        // parent: 클릭 이벤트가 발생한 요소(.next_btn)의 부모 //
        // 즉, 버튼을 감싸고 있는 div 태그 //

        // prev: 버튼을 감싸고 있는 div 태그의 이전 태그 //
        // 즉, 문항들을 감싸고 있는 또 다른 div 태그 //

        // children: 문항들을 감싸고 있던 div 태그의 자식들 //
        // 즉, 문항들의 배열 //

        // 을 가져와서 체킹이 된 것이 있는지 검사를 한다.//
        let divs = $(this).parent().prev().children()
        let inputs = divs.find('input:checked');

        // 만약에 inputs의 길이가 1보다 작다면 문항 출력
        if(inputs.length < 1){
            alert('문항이 선택되지 않았습니다.');
            return false // if 함수 종료//
        }
        e.preventDefault();
        scrollDown();
    })

    // orev 버튼을 눌렀을 떄 이전 문항(scrollUp) 호출 //
    $('.prev_btn').click(function(e){
        e.preventDefault();
        scrollUp();
    })

    // 제출 전 전체적으로 문항이 전부 선택됐는지 확인 //
    // $(#form).submit(function(e){ //
    $('.submit_btn').click(function(e){

        // 체크된 input의 모든 radio버튼 //
        let radios = $('input[type=radio]:checked');
        if(radios.length < 3){
            alert('선택되지 않은 문항이 있습니다.');
            return false;
        }
        return true;
    })

    // 새로고침을 했을 때, 화면이 이동되게 만드는 코드//
    $('html, body').animate({
        
    })
});
