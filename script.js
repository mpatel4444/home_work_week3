var generatePassword = document.querySelector("#generate");
var checkbox1 = document.querySelector("#example1");
var checkbox2 = document.querySelector("#example2");
var checkbox3 = document.querySelector("#example3");
var checkbox4 = document.querySelector("#example4");
var chararacterSubmit = document.querySelector("#charSubmit");
var characterType = document.querySelector("#charType");
var characterLength = document.querySelector("#lengthSubmit");


generatePassword.addEventListener("click", function () {
    $("#myModal").modal();

}
)

characterLength.addEventListener("click", function () {
    charLength();
})

chararacterSubmit.addEventListener("click", function () {
    checkBox();
})

function checkBox() {

    if (document.getElementById("example1").checked == false && document.getElementById("example2").checked == false && document.getElementById("example3").checked == false && document.getElementById("example4").checked == false)
        $("#promptModal").modal();
    else randomPass(parseInt(document.getElementById("noOfChar").value),document.getElementById("example1").checked,document.getElementById("example2").checked,document.getElementById("example3").checked,document.getElementById("example4").checked);

}

function charLength() {

    if (parseInt(document.getElementById("noOfChar").value) <= 0 || Number.isInteger(parseInt(document.getElementById("noOfChar").value)) == false)
        $("#lengthCheckModal").modal();
    else
        $("#charType").modal();
}


function randomPass(len, c1, c2, c3, c4) {

    var n = "0123456789";
    var l = "abcdefghijklmnopqrstuvwxyz";
    var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var s = "!\"#$%" + String.fromCharCode(38) + "'()*+,-./:;" + String.fromCharCode(60) + "=>?@[\\]^_`{|}~";
    var passWord = "";
    var flag = false;
    

    for (let i = 0; i < len; i++) {

        if (passWord.length == 0 && flag == true) i = 0;

        var charSelect = Math.floor(Math.random() * 4);
        if (charSelect == 0 && c1 == true) {
            
            passWord += l.charAt(Math.floor(Math.random() * 10));

        }

        else if (charSelect == 1 && c2 == true) {
            passWord += u.charAt(Math.floor(Math.random() * 26));

        }
        else if (charSelect == 2 && c3 == true) {
            passWord += n.charAt(Math.floor(Math.random() * 26));

        }
        else if (charSelect == 3 && c4 == true) {
            passWord += s.charAt(Math.floor(Math.random() * 32));

        }
        else if (i == 0 && passWord.length == 0) flag == true;

        else if (i != 0) i--;

        document.getElementById("finalPassword").value = passWord;
    }
    
}