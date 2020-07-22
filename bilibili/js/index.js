window.addEventListener('load', function () {
    var lbox = this.document.querySelector('.lbox');
    var rbox = this.document.querySelector('.rbox');
    var content = this.document.querySelector('.content');
    var more = this.document.querySelector('.more')
    content.addEventListener('mouseenter', function () {
        lbox.style.display = 'block';
        rbox.style.display = 'block';
        more.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    content.addEventListener('mouseleave', function () {
        lbox.style.display = 'none';
        rbox.style.display = 'none';
        more.style.display = 'none';
        timer = setInterval(function () {
            rbox.click();
        }, 5000);
    })
    var ul1 = content.querySelector('ul');
    var point = content.querySelector('.point');
    var ul2 = point.querySelector('ul');
    var contentWith = content.offsetWidth;
    for (var i = 0; i < ul1.children.length; i++) {
        var li = this.document.createElement('li');
        li.setAttribute('index', i);
        ul2.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ul1.children.length; i++) {
                ul2.children[i].className = '';
            }
            this.className = 'select';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul1, -index * contentWith);
        })
    }
    ul2.children[0].className = 'select';
    var first = ul1.children[0].cloneNode(true);
    ul1.appendChild(first);
    var num = 0;
    var circle = 0;
    var flag = true;
    rbox.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul1.children.length - 1) {
                ul1.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul1, -num * contentWith, function () {
                flag = true;
            });
            circle++;
            if (circle == ul1.children.length - 1) {
                circle = 0;
            }
            circleChange();
        }
    })
    lbox.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul1.children.length - 1;
                ul1.style.left = -num * contentWith + 'px';

            }
            num--;
            animate(ul1, -num * contentWith, function () {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ul2.children.length - 1;
            }
            circleChange();
        }

    })

    function circleChange() {
        for (var i = 0; i < ul2.children.length; i++) {
            ul2.children[i].className = '';
        }
        ul2.children[circle].className = 'select';
    }

    var timer = setInterval(function () {
        rbox.click();
    }, 3000)

    var Time2 = document.querySelector('.time');
    var inputTime = +new Date('2020-10-01 00:00:00');
    var Time1 = this.document.querySelector('.data');
    countdown();
    setInterval(countdown, 1000);
    function countdown() {
        var time = +new Date();
        var times = (inputTime - time) / 1000;
        var h = parseInt((times / 60 / 60 / 24)+1);
        h =h < 10 ? '0' + h : h;
        Time2.innerHTML = h;
        var now = new Date();
        var year = now.getFullYear(); 
        var month = now.getMonth();
        month++;
        var date = now.getDate();
        var day = now.getDay();
        var index = day;
        var riqi=['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
        var hour = now.getHours();
        var minu = now.getMinutes();
        var sec = now.getSeconds();
        if (hour < 10) hour = "0" + hour;
        if (minu < 10) minu = "0" + minu;
        if (sec < 10) sec = "0" + sec;
        Time1.innerHTML = year + '年' + month + '月' + date + '日' + ' ' + riqi[index] +' '+ hour + ':' + minu + ':' + sec
    }

    var mousebtn = this.document.querySelector('.body-nav-right-btn');
    var body = this.document.body;
    var gb = this.document.querySelector('#body-nav-right-box')
    var btnflag = true;
    mousebtn.addEventListener('click',function(){
        if(btnflag){
            btnflag = false;
            mousebtn.style.background='linear-gradient(145deg,#5bc6ff, #4da7db)';
            // body.style.cursor='';
            body.style.cursor='default';
            gb.innerHTML = '开启鼠标';
            console.log(btnflag);
            
        }else{
            btnflag = true;
            mousebtn.style.background='linear-gradient(145deg, #4da7db, #5bc6ff )';
            // body.style.cursor='';
            body.style.cursor='url(../img/cursor_2.png), default';
            gb.innerHTML = '关闭鼠标';
        }
    })


    var title = document.querySelector('.title');
    var login = document.querySelector('.login');
    title.addEventListener('mousedown', function (e) {
        var x = e.pageX - login.offsetLeft;
        var y = e.pageY - login.offsetTop;
        document.addEventListener('mousemove', move)
        function move(e) {
            login.style.left = e.pageX - x + 'px';
            login.style.top = e.pageY - y + 'px';
        }
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', move)
        })
    })


    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    })

    var ziliaoka = this.document.querySelector('.tx');
    ziliaoka.addEventListener('click', function () {
        login.style.display = 'block';
    })

    var loginexit = document.querySelector('.login-exit');
    loginexit.addEventListener('click', function () {
        login.style.display = 'none';
        document.documentElement.style.backgroundColor = null;
    })

    var collbtns = document.querySelectorAll('.collection-left-content');
    var collconts = document.querySelectorAll('.collection-content');
    for(var i = 0;i<collbtns.length;i++){
        collbtns[i].setAttribute('index',i)
        collbtns[i].addEventListener('click',function(){
            for(var i = 0;i<collbtns.length;i++){
                collbtns[i].className='collection-left-content';
                collconts[i].style.display='none';
            }
            this.className='collection-left-content collection-left-color';
            var index = this.getAttribute('index');
            collconts[index].style.display='block';
        })
    }

    var shoucang = document.querySelector("#shoucang");
    var collection = document.querySelector(".collection");
    shoucang.addEventListener('mouseover',function(){
        collection.style.display='block';
    })
    collection.addEventListener('mouseout',function(){
        this.style.display='none';
    })

    var laters = document.querySelectorAll('.later');
    var beforelaters = document.querySelectorAll('.beforeLater');
    for(let i = 0;i<laters.length;i++){
        laters[i].onmouseenter = function(){
            beforelaters[i].style.display='block';
            setTimeout(function(){
                beforelaters[i].style.opacity=0.7;
                beforelaters[i].style.transform='scale(1)';
            },100)
        }
    }
    for(let i =0;i<laters.length;i++){
        laters[i].onmouseleave = function(){
            beforelaters[i].style.display='none';
            beforelaters[i].style.opacity=0;
            beforelaters[i].style.transform='scale(0.8)';
        }
    }

    var gotop = document.querySelector(".gotop");
    var aerialleft = document.querySelector(".aerial-left");
    var aerialright = document.querySelector(".aerial-right");
    gotop.addEventListener('mouseenter',function(){
        aerialleft.className='aerial-left move1';
        aerialright.className='aerial-right move2';
    })
    gotop.addEventListener('mouseleave',function(){
        aerialleft.className='aerial-left';
        aerialright.className='aerial-right';
    })

    var gotopbtn = document.querySelector('.gotopbtn');
    gotopbtn.onclick=function(){
        window.scrollTo(0,0);
    }

    var gotopbtn = document.querySelector('.gotopbtn');
    gotopbtn.onclick=function(){
        window.scrollTo(0,0);
    }

    var gotopbtn = document.querySelector('.gotopbtn');
    gotopbtn.onclick= function(){
        aa(window,0);
    }

    function aa(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
            }
            window.scroll(0,window.pageYOffset+step)
        }, 10);
    }

    var scrollcontents = document.querySelectorAll('.scroll-content');
    scrollcontents[0].onclick=function(){
        aa(window,110);
    }
    scrollcontents[1].onclick=function(){
        aa(window,450);
    }
    scrollcontents[2].onclick=function(){
        aa(window,1030);
    }
    scrollcontents[3].onclick=function(){
        aa(window,1530);
    }
})