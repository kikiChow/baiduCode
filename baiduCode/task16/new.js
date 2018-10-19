/**
 * Created by Administrator on 2018/10/13.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var table = document.getElementById('aqi-table');


/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = document.getElementById('aqi-city-input').value.trim();
    var cityReg = /^[\u4e00-\u9fa5a-zA-Z]+$/;

    if(!cityReg.exec(city)){
        alert('城市名必须为中英文');
        city = null
    }

    var value = document.getElementById('aqi-value-input').value.trim();
    var valueReg = /^\+?[1-9][0-9]*$/;
    if(!valueReg.exec(value)){
        alert('空气质量必须为正整数');
        value = null;
    }
    aqiData[city] = value;

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var str = '';

    str = "<tr><td>"+'城市'+"</td><td>"+'空气质量'+"</td><td>操作</td></tr>";
    for(var city in aqiData){

        str += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button>删除</button></td></tr>";
    }
    table.innerHTML = str;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(target) {
    // do sth.
    var father = target.parentNode.parentNode;
    var cityName = father.firstChild.innerText.trim();
    delete aqiData[cityName];

    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var addBtn = document.getElementById('add-btn');
    addBtn.onclick = addBtnHandle;
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    table.addEventListener('click',function(ev){
        var ev = ev||window.event;
        var target = ev.target;
        if(target.nodeName.toLocaleLowerCase()=='button'){
            delBtnHandle(target);
        }
    },false);
}

init();
