$(function () {
    $('[data-toggle="popover"]').popover()
})
function checkEmail(thiz) {

    var inputEmail = $(thiz).val();

    var reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$'); //正则表达式　　var obj = document.getElementById("mazey"); //要验证的对象
    if (inputEmail === ''
        || !reg.test(inputEmail)) { //输入不能为空
        $(thiz).prop('style', 'border-color: #a94442;');
    } else {
        $(thiz).prop('style', '');
    }

}

function checkName(thiz) {

    var inputName = $(thiz).val();

    var regName = /^[\u4e00-\u9fa5]{2,4}$/;
    if (!regName.test(inputName)) {
        $(thiz).prop('style', 'border-color: #a94442;');
    } else {
        $(thiz).prop('style', '');
    }
}

function checkPwd(thiz) {
    var inputPassword = $(thiz).val();
    var reg = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}');
    if (inputPassword === ''
        || !reg.test(inputPassword)) { //输入不能为空
        $(thiz).prop('style', 'border-color: #a94442;');
    } else {
        $(thiz).prop('style', '');
    }
}

function doubleCheckPwd(thiz) {
    var pwd = $("input[name='password']").val();
    if (pwd != $(thiz).val()) {
        $(thiz).prop('style', 'border-color: #a94442;');
    } else {
        $(thiz).prop('style', '');
    }
}

function checkAllData() {

    var userNameStyle = $("input[name='username']").attr('style');

    if (userNameStyle != '') {
        $('#nextBtn').prop('class','btn btn-danger disabled');
        $('#nextBtn').html('姓名格式错误!');
        return;
    }

}

function clickNext() {
    $('#demo-bsc-tab-1').removeClass('in active');
    $('#demo-bsc-tab-2').addClass('in active');
    $('#pre').removeClass(' disabled');
    $('#next').addClass('disabled');
    $('#next').css('display','none');
    $('#finish').css('display','');
}

function clickPre() {
    $('#demo-bsc-tab-2').removeClass('in active');
    $('#demo-bsc-tab-1').addClass('in active');
    $('#next').removeClass(' disabled');
    $('#pre').addClass('disabled');
    $('#finish').css('display','none');
    $('#next').css('display','');

}

// $('#registerForm').validateAdminLte({
//     submitHandler: function (f) {
//         console.log("pass")
//     }
//
// });