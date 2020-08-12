var bgColor = localStorage.getItem('userTheme');
$(function(){
    /*将皮肤选中默认选中缓存中的值*/
    //$("input[value="+bgColor+"]")[0].setAttribute("checked",'true');
    $("input[value="+bgColor+"]").attr('checked',true);
    if(bgColor){ $("#bgBox").removeClass().addClass(bgColor); }

    //背景色切换选框
    $('input[type=radio][name=setBackground]').bind('change',function() {
        localStorage['userTheme']=this.value;
        $("#bgBox").removeClass().addClass(this.value);

    });

    /*执行I18n翻译*/
    execI18n();

    /*将语言选择默认选中缓存中的值*/
    //$("input[value="+i18nLanguage+"]")[0].setAttribute("checked",'true');
    $("input[value="+i18nLanguage+"]").attr('checked',true);

    /* 选择语言 */
    $("input[name='setLangue']").bind('change',function(){
        var language = getRadioButtonCheckedValue("setLangue");
        getCookie("userLanguage",language,{
            expires: 30,
            path:'/coinTrading'
        });
        location.reload();
    });

    //设置下拉框
    $("#setting").on('click',function(){
        $(".setBox").toggle('slow');
    });

    //radio beauty
    $("span.radioInput").on('click',function(){
        $(this).parent().children("label").click();

    });

    //dataTable
    $('#dataTable').DataTable( {
        "ajax": "js/objects.txt",
        "columns": [
            { "data": "id" },
            { "data": "name" },
            { "data": "position" },
            { "data": "salary" },
            { "data": "start_date" },
            { "data": "office" },
            { "data": "extn" }
        ]
    } );


    //$.ajax({
    //    type:"get",
    //    url:"http://news.at.zhihu.com/api/4/news/before/20131119",
    //    success:function(data){
    //        console.log(data);
    //    }
    //})

});


