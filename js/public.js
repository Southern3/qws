
window.onload = function(){
    var top = document.querySelector('.top');
    var ul = document.querySelector('.top ul');
    var lis = document.querySelectorAll('.top ul li');

    var img = [
        "(imges/t1.png)",
        "(imges/t2.png)",
        "(imges/t3.png)"
    ];
    for(var i = 0; i <= img.length-1; i++){
        lis[i].style.backgroundImage="url"+img[i];
        lis[i].style.backgroundSize="100% 100%";
    }

    var time = null;
    var wd = 1798;
    var j = 0;
    time = setInterval(fn,1000);
    function fn(){
        j++;
           if(j>lis.length-1){
               j=0;
           }
        ul.style.marginLeft=-(j*wd)+"px";
    }







    };
