$(".header").on("click",function(){
		e = window.event || e;
		obj = $(e.srcElement || e.target);
		if ($(obj).is(".header_title")) {
			console.log('not allowed jump');
			if ($(obj).is("a")) {
				var url=$(obj).attr('href');
				window.location.href=url;
			}
		}else{
		  window.location.href="../Web/优尼拜尔首页副本.html";
		}
});