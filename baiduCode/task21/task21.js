/**
 * Created by Administrator on 2018/8/26.
 */


//存放tag数据
var tagData = [];
//存放interest数据
var interestData = [];

var tag = document.getElementById('tag');
var interest = document.getElementById('interest');
var tagContainer = document.getElementById('tagContainer');
var interestContainer = document.getElementById('interestContainer');
var btn = document.getElementById('btn');

//事件兼容函数
function addEventHandler(element,type,handler){
    if(element.addEventListener){
        element.addEventListener(type,handler,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,handler);
    }else{
        element["on"+type] = handler;
    }
}

//输入内容裁剪
function splitData(str){
    var inputData = str.trim().split(/[,，;；、。.\s\n]+/);
    return inputData;
}


//渲染TAG图表
function renderChart(data,container){
    var innerHTML = '';
    for(var i =0;i<data.length;i++){
         innerHTML +="<li>"+data[i]+"</li>";
    }
    container.innerHTML = innerHTML;
}

//tag中数据的变化
function showTag(){
    if (/[,，;；、\s\n]+/.test(tag.value) || event.keyCode == 13) {
        var data = splitData(tag.value);
        tagData.push(data);
        if(tagData.length>10){
            tagData.shift();
        }
        renderChart(tagData,tagContainer);
        tag.value = "";
    }
}

//interest中数据的变换
function showInterest(){
        var interests = splitData(interest.value);
        interestData.push(interests);

        if(interestData.length >10){
            interestData.shift();
        }
        renderChart(interestData,interestContainer);
        interest.value = "";
}


window.onload = function(){
    addEventHandler(tag,'keyup',showTag);
    addEventHandler(btn,'click',showInterest);
    addEventHandler(tagContainer,'mouseover',function(e){
        if(e.target && e.target.nodeName =='LI'){
            e.target.firstChild.insertData(0,'点击删除');
            e.target.style.background = 'gray';

        }
    });
    addEventHandler(tagContainer,'mouseout',function(e){
        if(e.target && e.target.nodeName =='LI'){
            e.target.firstChild.deleteData(0,4);
            e.target.style.background = 'red';
        }
    });
    addEventHandler(tagContainer,'click',function(e){
        if(e.target&&e.target.nodeName =='LI'&& e.target.style.background=='gray'){
            tagContainer.removeChild(e.target);
        }
    });
}



