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
        //1.�����첽����
        var xhr = createXhr();
        //2.�󶨼����¼�
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
        //3.������
        xhr.open(type, url, true);
        //�����post��Ҫ������Ϣͷ
        if(type.toLowerCase()==='post')
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
        //4.��������
        if(type.toLowerCase()=='post'&&data!=undefined)
            xhr.send(data);
        else
            xhr.send(null);
    })
}
