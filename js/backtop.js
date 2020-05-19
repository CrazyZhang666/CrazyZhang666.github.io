var visi = document.getElementById('backtop');
visi.style.visibility = 'hidden';
window.onload = function() {
    window.onscroll = function() {
        var height = window.outerHeight * 0.8;
        var nowHeight = document.body.scrollTop || document.documentElement.scrollTop;
        if (nowHeight > height) {
            visi.style.visibility = 'visible';
            visi.style.display = 'inline-block';
        } else {
            visi.style.visibility = 'hidden';
            visi.style.display = 'none';
        }
    }
    var timer  = null;
    backtop.onclick = function(){
        cancelAnimationFrame(timer);
        //获取当前毫秒数
        var startTime = +new Date();     
        //获取当前页面的滚动高度
        var b = document.body.scrollTop || document.documentElement.scrollTop;
        var d = 500;
        var c = b;
        timer = requestAnimationFrame(function func(){
            var t = d - Math.max(0,startTime - (+new Date()) + d);
            document.documentElement.scrollTop = document.body.scrollTop = t * (-c) / d + b;
            timer = requestAnimationFrame(func);
            if(t == d){
              cancelAnimationFrame(timer);
            }
        });
    }
}