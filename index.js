
/*
window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});


var mHtml = $("html");
var page = 1;

mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 4) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})

*/

const wrap = document.getElementsByClassName('leftPer')[0]; // 보일 영역
const container = document.getElementsByClassName('perImg');
//const lotto = document.querySelector('#lotto').getBoundingClientRect(); //로또 불러오기
let page = 0; // 영역 포지션 초기값
let scrollPlus = 50;
const lastPage = container.length - 1; // 마지막 페이지


window.addEventListener('wheel',(e)=>{
    e.preventDefault();
    const lotto = document.querySelector('#lotto');
    if(e.deltaY > 0){

        
        page+=2;
        // 스크롤 할수록 줄어드는 로또 사이즈
        
        
        if(page < 1){
            lotto.animate(
                {
                transform: [
                    'scale(1)', // 시작 값
                    'scale(1)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }else if(page == 2){
            lotto.animate(
                {
                transform: [
                    'scale(1)', // 시작 값
                    'scale(0.7)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }else if(page == 6){
            lotto.animate(
                {
                transform: [
                    'scale(0.7)', // 시작 값
                    'scale(0.6)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }else if(page ==10){
            lotto.animate(
                {
                transform: [
                    'scale(0.6)', // 시작 값
                    'scale(0.4)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }else if(page == 16 ){
            lotto.animate(
                {
                transform: [
                    'scale(0.4)', // 시작 값
                    'scale(0.3)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }else if(page == 22){
            lotto.animate(
                {
                transform: [
                    'scale(0.3)', // 시작 값
                    'scale(0.1)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }else if(page == 24){
            lotto.animate(
                {
                transform: [
                    'scale(0.1)', // 시작 값
                    'scale(0.05)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }else if(page == 32){
            lotto.animate(
                {
                transform: [
                    'scale(0.05)', // 시작 값
                    'scale(0.01)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }
       // console.log("width = " + document.querySelector('#lotto').clientWidth);
    }else if(e.deltaY < 0){
        page-=2;

        // 스크롤 할수록 줄어드는 로또 사이즈
        if(page < 1){
            lotto.animate(
                {
                transform: [
                    'scale(0.7)', // 시작 값
                    'scale(1)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }else if(page == 0){
            lotto.animate(
                {
                transform: [
                    'scale(0.7)', // 시작 값
                    'scale(1)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }else if(page == 4){
            lotto.animate(
                {
                transform: [
                    'scale(0.6)', // 시작 값
                    'scale(0.7)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }else if(page ==8){
            lotto.animate(
                {
                transform: [
                    'scale(0.5)', // 시작 값
                    'scale(0.6)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }else if(page == 14 ){
            lotto.animate(
                {
                transform: [
                    'scale(0.3)', // 시작 값
                    'scale(0.5)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }else if(page == 20){
            lotto.animate(
                {
                transform: [
                    'scale(0.1)', // 시작 값
                    'scale(0.3)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }else if(page == 22){
            lotto.animate(
                {
                transform: [
                    'scale(0.05)', // 시작 값
                    'scale(0.1)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }else if(page == 30){
            lotto.animate(
                {
                transform: [
                    'scale(0.01)', // 시작 값
                    'scale(0.05)' // 종료 값
                ]},
                {
                  duration: 500, // 밀리초 지정
                  fill: 'forwards', // 종료 시 속성을 지님
                  easing: 'ease' // 가속도 종류
                });
        }
    }
    if(page < 0){
        page=0;
    }else if(page > lastPage){
        page = lastPage;

    }
    console.log(e.deltaY);
    wrap.style.top = page * -scrollPlus + 'vmax';
    changeUrl(page);
},{passive:false}); // 디폴트 기능 제거 - 스크롤



function toTop(){

    page = 0;
    wrap.style.top = page * -scrollPlus + 'vmax';
    lotto.animate(
        {
        transform: [
            'scale(0.01)', // 시작 값
            'scale(1)' // 종료 값
        ]},
        {
          duration: 500, // 밀리초 지정
          fill: 'forwards', // 종료 시 속성을 지님
          easing: 'ease' // 가속도 종류
        });
        changeUrl(page);
}



// 커서 위치 잡기 -----------------------------------------------------------

const docuE = document.documentElement;
const newCursor = document.getElementById("per_cursor");

let posX = 0;
let posY = 0;
let imgRoot = document.getElementById("cccc");
imgRoot.src = "img/FF/perInfo/drink_per.png";

document.addEventListener('DOMContentLoaded', () =>
    document.body.onmousemove = function(e) {

        posX = e.clientX + "px";
        posY = e.clientY + "px";

        newCursor.style.left = posX;
        newCursor.style.top = posY;
        
        
        console.log(imgRoot);
    }
);



// 마우스 이미지 URL바꿔주는 함수 + 스크롤바만드는중  ----------------------------------------------------
function changeUrl(x3) {
    let drink_Url = "img/FF/perInfo/drink_per.png";
    let thunder_Url = "img/FF/perInfo/thunder_per.png";
    let shell_Url = "img/FF/perInfo/shell_per.png";
    let clover_Url = "img/FF/perInfo/clover_per.png";
    let egg_Url = "img/FF/perInfo/egg_per.png";
    let blueMoon_Url = "img/FF/perInfo/blueMoon_per.png";
    let ball_Url = "img/FF/perInfo/ball_per.png";
    let ramen_Url = "img/FF/perInfo/ramen_per.png";
    let paper_Url = "img/FF/perInfo/paper_per.png";
    let rock_Url = "img/FF/perInfo/rock_per.png";
    let seoul_Url = "img/FF/perInfo/seoul_per.png";
    let hand_Url = "img/FF/perInfo/hand_per.png";
    let wood_Url = "img/FF/perInfo/wood_per.png";
    let dice_Url = "img/FF/perInfo/dice_per.png";
    let coin_Url = "img/FF/perInfo/coin_per.png";
    let cancer_Url = "img/FF/perInfo/cancer_per.png";
    let faker_Url = "img/FF/perInfo/faker_per.png";
    let noLotto_Url = "img/FF/perInfo/noLotto_per.png";
    
    switch (x3) {
        case 0:imgRoot.src = drink_Url;break;
    
        case 2:imgRoot.src = thunder_Url;break;

        case 4:imgRoot.src = shell_Url;break;

        case 6:imgRoot.src = clover_Url;break;

        case 8:imgRoot.src = egg_Url;break;

        case 10:imgRoot.src = blueMoon_Url;break;

        case 12:imgRoot.src = ball_Url;break;

        case 14:imgRoot.src = ramen_Url;break;

        case 16:imgRoot.src = paper_Url;break;

        case 18:imgRoot.src = rock_Url;break;

        case 20:imgRoot.src = seoul_Url;break;

        case 22:imgRoot.src = hand_Url;break;

        case 24:imgRoot.src = wood_Url;break;

        case 26:imgRoot.src = dice_Url;break;

        case 28:imgRoot.src = coin_Url;break;

        case 30:imgRoot.src = cancer_Url;break;

        case 32:imgRoot.src = faker_Url;break;

        case 34:imgRoot.src = noLotto_Url;break;

    }

};

const btn01 = document.querySelector('#img1');
const btn02 = document.querySelector('#img2');
const btn03 = document.querySelector('#img3');
const btn04 = document.querySelector('#img4');
const btn05 = document.querySelector('#img5');
const btn06 = document.querySelector('#img6');
const btn07 = document.querySelector('#img7');
const btn08 = document.querySelector('#img8');
const btn09 = document.querySelector('#img9');
const btn10 = document.querySelector('#img10');
const btn11 = document.querySelector('#img11');
const btn12 = document.querySelector('#img12');
const btn13 = document.querySelector('#img13');
const btn14 = document.querySelector('#img14');
const btn15 = document.querySelector('#img15');
const btn16 = document.querySelector('#img16');
const btn17 = document.querySelector('#img17');
const btn18 = document.querySelector('#img18');
const btn19 = document.querySelector('#img19');
const btn20 = document.querySelector('#img20');

btn01.addEventListener('click',move1 )
btn02.addEventListener('click',move2 )
btn03.addEventListener('click',move3 )

function move1()
{
    btn01.style.padding = '3px 5px'
    btn01.style.backgroundColor = 'rgba(255, 255, 255, 0.956)'

    btn02.style.padding = '3px 16px'
    btn02.style.backgroundColor ='rgba(255, 255, 255, 0.547)'

    btn03.style.padding = '3px 16px'
    btn03.style.backgroundColor ='rgba(255, 255, 255, 0.547)'

    page = 0;
}

function move2()
{
    btn01.style.padding = '3px 16px'
    btn01.style.backgroundColor ='rgba(255, 255, 255, 0.547)'

    btn02.style.padding = '3px 5px'
    btn02.style.backgroundColor ='rgba(255, 255, 255, 0.956)'

    btn03.style.padding = '3px 16px'
    btn03.style.backgroundColor ='rgba(255, 255, 255, 0.547)'

    page = 2;

}

function move3()
{
    btn01.style.padding = '3px 16px'
    btn01.style.backgroundColor ='rgba(255, 255, 255, 0.547)'

    btn02.style.padding = '3px 16px'
    btn02.style.backgroundColor ='rgba(255, 255, 255, 0.547)'

    btn03.style.padding = '3px 5px'
    btn03.style.backgroundColor ='rgba(255, 255, 255, 0.956)'
    page = 4;

}