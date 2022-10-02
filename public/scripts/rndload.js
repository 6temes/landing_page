i=6
banner1=new Image();banner1.src="/images/topimages_right_1.jpg";banner2=new Image();banner2.src="/images/topimages_right_2.jpg";banner3=new Image();banner3.src="/images/topimages_right_3.jpg";banner4=new Image();banner4.src="/images/topimages_right_4.jpg";banner5=new Image();banner5.src="/images/topimages_right_5.jpg";banner6=new Image();banner6.src="/images/topimages_right_6.jpg";links=new Array
links[1]="/english/about_kiwi_kitchen/"
links[2]="/english/catering/"
links[3]="/english/home_packs/"
links[4]="/english/catering/"
links[5]="/english/lunch/"
links[6]="/english/catering/"
description=new Array
description[1]="Kiwi Kitchen Gourmet Food"
description[2]="Kiwi Kitchen Gourmet Food"
description[3]="Kiwi Kitchen Gourmet Food"
description[4]="Kiwi Kitchen Gourmet Food"
description[5]="Kiwi Kitchen Gourmet Food"
description[6]="Kiwi Kitchen Gourmet Food"
function randombanner(){var randomnumber=Math.random();i=Math.round((i-1)*randomnumber)+1;document.banner.src=eval("banner"+i+".src");}
function startTime(){var time=new Date();hours=time.getHours();mins=time.getMinutes();secs=time.getSeconds();closeTime=hours*10000+mins*60+secs;closeTime+=5;Timer();}
function Timer(){var time=new Date();hours=time.getHours();mins=time.getMinutes();secs=time.getSeconds();curTime=hours*10000+mins*60+secs
if(curTime>=closeTime){if(i<6){i++;document.banner.src=eval("banner"+i+".src");}
else{i=1;document.banner.src=eval("banner"+i+".src");}
startTime();}
else{window.setTimeout("Timer()",10000)}}
function clickLink(){top.location=links[i]}
function descript(){window.status=description[i]}