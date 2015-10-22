function to_all(num){
    if(num<10){
         return '0'+num;
    }
    else{
        return ''+num;
        }
}
function week_chin(num){
    if(num==0){
        return ''+7;
    }
    else{
        return ''+num;
    }
}
function chinese_week(num){
    var chinese_name;
    switch(num){
        case 1:
            chinese_name="一";
            break;
        case 2:
            chinese_name="二";
            break;
        case 3:
            chinese_name="三";
            break;
        case 4:
            chinese_name="四";
            break;
        case 5:
            chinese_name="五";
            break;
        case 6:
            chinese_name="六";
            break;
        case 7:
            chinese_name="日";
            break;
    }
    return chinese_name;
}

    var arr_time=[];
    var oP=document.getElementsByTagName('p');
    for(var i=0;i<oP.length;i++){
        if(oP[i].className=="time"){
            arr_time.push(oP[i]);
        }
    }
    function all(){
        function time(){
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            var years=date.getFullYear();
            var month=date.getMonth();
            var day=date.getDate();
            var week=date.getDay();
            return to_all(h) + to_all(m) +to_all(years)+to_all(month+1)+to_all(day)+week_chin(week);
        }
        var str = time();
        for (var i = 0; i < arr_time.length; i++){
            if(i==arr_time.length-1){
                arr_time[i].innerHTML=chinese_week(parseInt(str.charAt(i)));
            }
            else{
                arr_time[i].innerHTML = str.charAt(i);
            }
        }
    }
    all();
    setInterval(all,200);
document.onselectstart=function(){
    return false;
}
