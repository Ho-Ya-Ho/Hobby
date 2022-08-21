var answerList = ['basic', 'beach', 'begin', 'below', 'bench', 'black',
                            'blind', 'blood', 'brain', 'bread'];
var answer = answerList[Math.floor(Math.random() * answerList.length)];
var count =6;
document.querySelector('.submit').addEventListener('click', function () {

    var input = document.querySelectorAll('.textBox');
    var inputFullText = "";
    // 빈칸 체크
    for (let i = 0; i < 5; i++) {
        if (input[i].value === "") {
            alert("Please enter all columns");
            return null;
        }
    }

    // count출력
    count--;
    document.getElementById("count").innerText = 'Number of challenges : '+count;

    // submit에 따라 색갈 변경
    for (let i = 0; i < 5; i++) {
        if (input[i].value === answer[i]) {
            input[i].style.background = 'green';
        } else if (answer.includes(input[i].value)) {
            input[i].style.background = 'yellow';
        } else {
            input[i].style.background = 'lightgrey';
        }
        input[i].classList.remove('textBox');
        inputFullText += input[i].value;
    }

    // 정답체크
    if (answer === inputFullText){
        alert("Correct!!!!!! \n정답은 "+answer+"이었습니다.");
        return null;
    }
    if (count === 0){
        alert("아쉽네요ㅜㅜ \n정답은 "+answer+"이었습니다.\n 다시 도전하세요~!~!");
        location.reload(true);
    }
    //새로운 format 생성
    var template = `<div style="text-align: center">
        <input class="textBox" type="text" maxlength="1">
        <input class="textBox" type="text" maxlength="1">
        <input class="textBox" type="text" maxlength="1">
        <input class="textBox" type="text" maxlength="1">
        <input class="textBox" type="text" maxlength="1">
        </div>`;
    document.querySelector('body').insertAdjacentHTML('beforeend', template);
})

document.querySelector('.textBox').addEventListener('keyup', function (e){
    e.target.nextElementSibling.focus();
})