window.onload=function(){
    $.ajax({
        url:'http://127.0.0.1:3000/header',
        type:'get',
        dataType:'json',
        success:function(res){
            var html='';
            for( var re of res){
                var {hdid,hdSmallImg}=re;
                html+= `<li>
                    <a href="http://127.0.0.1:3000/homeBase.html?hdid=${hdid}">
                        <img src="${hdSmallImg}" alt="" target-toggle="${hdid}">
                    </a>
                </li>`
            }
            var parent=$('.location-fix');
            parent.html(html);
        }
    })
}


$(function(){
    $('<link rel="stylesheet" href="css/header.css">').appendTo('head');
    $.ajax({
        url:'header.html',
        type:'get',
        success: function(res) {
            $(res).replaceAll('#layout-header');
        }
    })
})
