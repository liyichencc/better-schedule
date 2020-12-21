/** @file 基于adminLte样式的validator */
/**
 * jquery.validate.adminLte
 * 修改validate样式为adminLte样式
 */
$.fn.extend({
    validateAdminLte: function (options) {
        /** 重新配置默认提示语 **/
        $.extend($.validator.messages, {
            required: '必填项',
            remote: 'Please fix this field.',
            email: '必须为邮箱地址',
            url: '必须为URL',
            date: '必须为日期',
            dateISO: '必须为日期 ( ISO )',
            number: '必须为数字',
            digits: '必须为整数',
            creditcard: '必须为卡号',
            equalTo: 'Please enter the same value again',
            maxlength: $.validator.format('长度不能大于{0}个字符'),
            minlength: $.validator.format('长度不能小于{0}个字符'),
            rangelength: $.validator.format('长度必须在 {0} 到 {1} 个字符之间'),
            range: $.validator.format('输入值范围必须在 {0} 到 {1}'),
            max: $.validator.format('输入值必须小于等于 {0}.'),
            min: $.validator.format('输入值必须大于等于 {0}.')
        });
        /** 自定义错误样式 **/
        $.validator.setDefaults({
            ignore: [],
            errorPlacement: function (error, element) {
                var errorTipMessage = '<span class="help-block error-tip-message">' + error[0].innerHTML + '</span>';
                if(element[0].classList.contains("select2")){
                    element.closest('.select2-validate').append(errorTipMessage);
                }else{
                    element.closest('.form-control').after(errorTipMessage);
                }

                element.closest('.form-group').addClass('has-error');
            },
            onfocusout: function (element) {
                $(element).closest('.has-error').find('.error-tip-message').remove();
                $(element).closest('.has-error').removeClass('has-error');
                if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                    this.element(element);
                }
            },
            onfocusin: function (element) {
                var f= element;
                // 不验证
            },
            onkeyup: function (element) {
                $(element).closest('.has-error').find('.error-tip-message').remove();
                $(element).closest('.has-error').removeClass('has-error');
                if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                    this.element(element);
                }
            }
        });

        /** 在表单提交前清空错误样式 **/
        $.validator.prototype.prepareForm = function () {
            $('.has-error').removeClass('has-error');
            $('.error-tip-message').remove();
            this.reset();
            this.toHide = this.errors().add(this.containers);
        };

        /**
         * 增加自定义验证
         */
        /** 验证手机号 **/
        $.validator.addMethod('mobile', function (value, element) {
            var pattern = /^1[3-9][0-9]{9}$/;
            if (value !== '') {
                if (!pattern.exec(value)) {
                    return false;
                }
            }
            return true;
        }, '必须为手机号');
        /** 验证手机号和座机号码 **/
        $.validator.addMethod('tel', function (value, element) {
            var pattern = /(^(\d{3,4}-)?\d{7,8}(-\d{1,4})?$)|(^1[3-9][0-9]{9}$)/;
            if (value !== '') {
                if (!pattern.exec(value)) {
                    return false;
                }
            }
            return true;
        }, '必须为电话号码');
        /** 验证手机号7位前缀 **/
        $.validator.addMethod('mobilePrefix7', function (value, element) {
            var pattern = /^1[3-9][0-9]{5}$/;
            if (value !== '') {
                if (!pattern.exec(value)) {
                    return false;
                }
            }
            return true;
        }, '7位手机号前缀');
        $(this).validate(options);
    }

});
$('.select2').change(function (f){
    var value = $(this).val();
    if (!value || value === "") {
        return;
    }
    $(this).closest('.has-error').find('.error-tip-message').remove();
    $(this).closest('.has-error').removeClass('has-error');
});