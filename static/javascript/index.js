(async function(){
    var res= await ajax({
        type:'get',
        url:'http://www.qiaxiaojiu:5000/index',
        datatype:'json'
    });

    //轮播图
   
    Vue.directive('slider',{
        inserted(el){
            var i=0;
        }
    });
    var carousels=res.carousel.slice(res.length-4);
    console.log(carousels)
    Vue.component('lunbo',{
        template:'#tpllunbo',
        data(){
            return {
                timer:null,
                carousels,
                mark:0
            }
        },
        methods:{
            autoPlay(){
                this.mark++;
                if(this.mark===4){
                    this.mark=0;
                }
            },
            play(){
                this.timer= setInterval(this.autoPlay,2500)
            },
            change(i){
                this.mark=i;
            },
            stop(){
                clearInterval(this.timer);
            },
            move(){
                this.timer=setInterval(this.autoPlay,2500);
            }
        },
        created(){
            this.play();
        }
    });
    new Vue({
        el: ".home-slider-map",
    });
     /*var html='';
    for(var i=0;i<carousels.length;i++){
        var {cid,cname,src,href}=carousels[i];
        html+=`<li><a href="${href}"><img src="${src}"></a></li>`;
    }
    var parent=document.querySelector(
        '#home>.home-slider-map>.home-map>.slider-img-item'
    )
    parent.innerHTML=html;
    */


    //摄影基地
    var homeBase=res.homeBase;
    var html_1='';
    var html_2='';
    var index1=0;
    var index2=0;
    for(var i=0;i<homeBase.length;i++){
        var {hid,htype,hname,title,details,src,href}=homeBase[i];
        if(htype==1){
            index1++;
            if(index1<=2){
                html_1+=`<li>
                <div>
                <img src="${src}" alt=""/>
                </div>
                <p class="text-title1">${title}</p>
                <p class="text-title2">${details}</p>
                </li>`;
            }
        }else{
            index2++;
            if(index2<=3){
                html_2+=`<li>
                <div>
                <img src="${src}" alt=""/>
                </div>
                <p class="text-title1">${title}</p>
                <p class="text-title2">${details}</p>
                </li>`
            }
        }
    }
    var parent=document.querySelector(
        '#home>.home-base>.home-base-img1'
    );
    parent.innerHTML=html_1;
    var parent=document.querySelector(
        '#home>.home-base>.home-base-img2'
    );
    parent.innerHTML=html_2;

    //每周最新客片
    var homeWeek=res.homeWeek;
    var oneList='';
    var twoList='';
    for(var i=homeWeek.length-1;i>=homeWeek.length-4;i--){
        var {wtime,wtext,src,href}=homeWeek[i];
        oneList+=`<li>
        <div>
        <div class="point"></div>
        <div class="point"></div>
        <div class="point"></div>
        <div class="point"></div>
        <div class="modal">
            <div>Golden</div>
        </div>
        <img src="${src}" alt=""/>
        </div>
        <p class="home-week-p1">${wtime}}</p>
        <p class="home-week-p2">${wtext}</p>
        </li>`;
    }
    var parent=document.querySelector(
        '#home>.home-week>ul:nth-child(3)'
    );
    parent.innerHTML=oneList;

    for(var i=homeWeek.length-5;i>=homeWeek.length-8;i--){
        var {wtime,wtext,src,href}=homeWeek[i];
        twoList+=`<li>
        <div>
        <div class="point"></div>
        <div class="point"></div>
        <div class="point"></div>
        <div class="point"></div>
        <div class="modal">
            <div>Golden</div>
        </div>
        <img src="${src}" alt=""/>
        </div>
        <p class="home-week-p1">${wtime}}</p>
        <p class="home-week-p2">${wtext}</p>
        </li>`;
    }
    var parent=document.querySelector(
        '#home>.home-week>ul:nth-child(4)'
    );
    parent.innerHTML=twoList;

})();