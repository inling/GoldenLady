//���������¼�
window.onscroll=function(){
	var t=document.documentElement.scrollTop||document.body.scrollTop;
	var top_nav=document.getElementsByClassName('top-nav')[0];
	if(t>166){
		top_nav.style="position:fixed;top:-18px;width:100%;z-index:20;width:100%;min-width:1440px;margin:0 auto";
	}else{
		top_nav.style="position:static;";
	}
}
