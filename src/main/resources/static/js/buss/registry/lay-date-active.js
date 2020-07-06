var start;

var oneHour = 3600000;
//时间选择器
laydate.render({
    elem: '#start'
    ,type: 'datetime'
    , done: function(value, date, endDate){
        start = value;
        if (value == '') {
            $('#start').prop('style', 'border-color: #a94442;');
        } else {
            $('#start').prop('style', '');
        }
    }
});

//时间选择器
laydate.render({
    elem: '#end'
    ,type: 'datetime'
    , done: function(value, date, endDate){
        if (value == '' || start == '') {
            $('#end').prop('style', 'border-color: #a94442;');
            return;
        }
        value = value.replace(/-/g,"/");
        start = start.replace(/-/g,"/");
        var endDate = new Date(value);
        var startDate = new Date(start);
        if (endDate - startDate < oneHour) {
            $('#end').prop('style', 'border-color: #a94442;');
            $('#start').prop('style', 'border-color: #a94442;');
        } else {
            $('#end').prop('style', '');
            $('#start').prop('style', '');
        }

    }

});