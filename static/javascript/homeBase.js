(async function(){
    var hdid=location.search.split('=')[1];
    var res=await $.ajax({
        url:`http://www.qiaxiaojiu:5000/homeBase/`,
        type:'get',
        dataType:'json',
        data:{'hdid':hdid}
    });
    var {hdid,hdtitle,hdSmallImg,hdBigImg,hdVideo,srcs,hdGuest}=res;
    var hdBigImgs=hdBigImg.split(' ');
    var html='';
    for(var bigImg of hdBigImgs){
        html+= `<img src="${bigImg}" alt="">`
    }
    var parent=$('#home>.home-big-img');
    parent.html(html);


    var srcs=srcs.split(' ');
    var html='';
    for(var src of srcs){
        html+=`<div class='home-park'>
                <img src="${src}" alt="">
                </div>`;
    }
    var parent=$('#homeBase_d');
    parent.html(html);

    var hdGuest=hdGuest.split(' ');
    var html='';
    for(var guest of hdGuest){
        html+=`<li>
        <a href="#">
            <img src="${guest}" alt="">
        </a>
        <h2>客片欣赏-GUEST SELECTION</h2>
        <p>GIVE YOU THE BEST LOVE</p>
        </li>`
    }
    var parent=$('#home>.home-park-30>ul');
    parent.html(html);

})()