function Account(bank, id, name, money) {
    //멤버 변수
    var bank = bank;
    var id = id;
    var name = name;
    var money = money;
    //멤버 함수
    var deposit   = function(money){
         this.money += money;
    };
    var withdraw  = function(money){
        this.money -= money;
    };
    var show      = function(){
        document.write('----------------------------------<br />');
        document.write('은행명: '+this.bank+'<br />');
        document.write('계좌번호: '+this.id+'<br />');
        document.write('이름: '+this.name+'<br />');
        document.write('예금주: '+this.money+'<br />');
        document.write('----------------------------------<br />');
    };
}