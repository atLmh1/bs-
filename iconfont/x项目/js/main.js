var allA =document.querySelectorAll("#content>a")
var visible =document.querySelector("#text-first>.visible")
var block = document.querySelector("#text-first>.block")
allA[0].onmousemove=function(){
   visible.style.display="block"
   block.style.display="none"
  
}   
allA[1].onmousemove=function(){
    visible.style.display="none"
    block.style.display="block"
}


var p =document.querySelectorAll(".ending>p")
			var dateStr = formatDate();
			// 将时间放置到span内
			p[1].innerText = dateStr;
			// 每隔一秒，再放置一次最新的时间
			setInterval(function(){
				p[1].innerText = formatDate();
			},1000);
			//格式化年月日时分秒 
			function formatDate(){
				var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth()+1;
				month = month<10?'0'+month:month;
				var day = date.getDate();
				day = day<10?'0'+day:day;
				var hours = date.getHours();
				hours = hours<10?'0'+hours:hours;
				var minutes = date.getMinutes();
				minutes = minutes<10?'0'+minutes:minutes;
				var seconds = date.getSeconds();
				seconds = seconds<10?'0'+seconds:seconds;
				// 2019-07-23 09:40:30
				return year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
			}


 let allAs= document.querySelectorAll(".navbar-nav>a")
 allAs[0].onclick=function(){
    location="index1.html"
 }
 allAs[1].onclick=function(){
    location="index2.html"
 }
 allAs[2].onclick=function(){
    location="index3.html"
 }
 allAs[3].onclick=function(){
    location="index4.html"
 }
 allAs[4].onclick=function(){
    location="index5.html"
 }
 allAs[5].onclick=function(){
    location="index6.html"
 }


 