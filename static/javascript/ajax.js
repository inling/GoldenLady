function createXhr(){
    var xhr;
    if(window.XMLHttpRequest){
        var xhr=new XMLHttpRequest();
    }else{
        var xhr=new ActiveXObject('Microsoft.XMLHttp')
    }
    return xhr;
}

function ajax({url,type,data,datatype}) {
    return new Promise(function(open,err){
        //1.创建异步对象
        var xhr = createXhr();
        //2.绑定监听事件
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                if(datatype!==undefined&&datatype.toLowerCase()==='json')
                    var res = JSON.parse(xhr.responseText);
                else
                    var res=xhr.responseText;
                open(res);
            }
        }
        if(type.toLowerCase()=='get'&&data!=undefined){
            url+='?'+data;
        }
        //3.打开连接
        xhr.open(type, url, true);
        //如果是post，要设置消息头
        if(type.toLowerCase()==='post')
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
        //4.发送请求
        if(type.toLowerCase()=='post'&&data!=undefined)
            xhr.send(data);
        else
            xhr.send(null);
    })
}
