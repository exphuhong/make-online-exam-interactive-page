var No0, No1,No2,No3,No4,No5,No6,No7,No8,No9,No10;
var comBlank　= []; //填空题答案集合
function getResult () {
    //填空题
     No0 = document.getElementById('1.1.0').value;
     No1 = document.getElementById('1.1.1').value;
     No2 = document.getElementById('1.1.2').value;
     No3 = document.getElementById('1.1.3').value;
    comBlank.push(No0);
    comBlank.push(No1);
    comBlank.push(No2);
    comBlank.push(No3);
    //单选题
     No4 = document.getElementsByName('sofat');
     No5 = document.getElementsByName('java');

    //多选题
     No6 = document.getElementsByName('lidu');
     No7 = document.getElementsByName('leitu');

    //判断题

     No8 = document.getElementsByName('first');
     No9 = document.getElementsByName('second');
    //简答题

     No10 = document.getElementById('text').innerHTML;

}
function isComplete() {

    if (No1!==null&&No1!==null&&No2!==null&&No3!==null&No10!==null)
        return true;
    else
        return false;
}
//计算总分数
function submit(){
    getResult();
    if (!isComplete()) {
        alert('请做完所有的题目');
        return false;
    }else {
        let totalScore = 0;
        var error = [];
        const text = '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是物理实体；' +
            '可以是某种图像；或者是一种数学表达式。';
        var comAnswer = ["统一性建模语言","封装性","继承性","多态性"];
        for(let i = 0;i<comAnswer.length;i++) {
            if (comBlank[i]===comAnswer[i]) {
                totalScore += 5;
            }else {
                error.push('填空题第'+parseInt(i+1)+'题错误');
            }
        }
        if (No4[1].checked) {
            totalScore += 10;
        }else {
            error.push('单选题第一题错误');
        }

        if (No5[0].checked) {
            totalScore += 10;
        }else {
            error.push('单选题第二题错误');
        }

        if (No6[0].checked&&No6[1]&&No6[3].checked){
            totalScore += 10;
        }else {
            error.push('多选题第一题错误');
        }

        if (No7[0].checked&&No7[1].checked&&No7[2].checked){
            totalScore += 10;
        }else {
            error.push('多选题第二题错误');
        }

        if (No8[1].checked) {
            totalScore += 10;
        }else {
            error.push('判断题第一题错误');
        }

        if (No9[0].checked) {
            totalScore += 10;
        }else {
            error.push('判断题第二题错误');
        }

        if (No10 === text) {
            totalScore += 20;
        }else {
            error.push('简答题错误');
        }

        var user = document.getElementById('userName').value;
        alert(user+'总分为' + totalScore);
        error.forEach((val)=> {
            alert(val);
        })

    }

}