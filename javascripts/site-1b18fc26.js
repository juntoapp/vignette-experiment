var parseName=function(){var n=function(n){var e,t,a=decodeURIComponent(window.location.search.substring(1)),r=a.split("&");for(t=0;t<r.length;t++)if(e=r[t].split("="),e[0]===n)return e[1]===undefined||e[1]},e=n("name");return $("#name").text(e),$("#nameForm").val(e),e},application=function(){var n={};return n.data={},n.click=function(e){var t=n.getArea(e.offsetX,e.offsetY);console.log(t),!1===t?n.showAreas():t.url!==undefined&&(location.href=t.url)},n.showAreas=function(){function e(n,e){for(var t=0;t<e.length;t++){var a=e[t];n.beginPath(),n.lineWidth="4",n.strokeStyle="green",n.rect(a.x,a.y,a.w,a.h),n.stroke()}}var t=document.getElementById("canvas"),a=t.getContext("2d"),r=n.data.areas;!function(){function n(){o+=i,(o<=0||o>=1)&&(i=-i,c=!0),a.clearRect(0,0,t.width,t.height),a.globalAlpha=o,e(a,r),!0===c&&o<=0||requestAnimationFrame(n)}var o=0,i=.1,c=!1;n()}()},n.draw=function(){var e=function(n){$(".canvas").css("background","urL('"+n+"')"),$(".canvas").css("background-size","cover"),$(".canvas").css("background-repeat","no-repeat")};console.log("state:",n.data),e(n.data.picture)},n.getArea=function(e,t){console.log(e,t);for(var a=n.data.areas,r=0;r<a.length;r++){var o=a[r];if(o.x<=e&&e<=o.x+o.w&&o.y<=t&&t<=o.y+o.h)return o}return!1},n.init=function(e){n.data=e,n.draw(),$(".canvas").click(n.click),window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(n){window.setTimeout(n,1e3/60)}}()},n};