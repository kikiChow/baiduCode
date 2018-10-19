/**
 * Created by Administrator on 2018/10/10.
 */
function Tree(){
    this.interval = '';
    this.array = new Array();
    this.searchResult = new Array();
}

Tree.prototype.initColor = function(){
    for(var i= 0;i<this.array.length;i++){
        this.array[i].style.backgroundColor = '#fff';
    }
};
Tree.prototype.preOrder = function(node){
    if(node==null){
        return;
    }
    if(node.tagName=='DIV'){
        this.array.push(node);
        for(var i = 0;i<node.children.length;i++){
            this.preOrder(node.children[i]);
        }
    }
};

Tree.prototype.preOrderSearch = function(node,str){
    if(node==null){
        return;
    }
    if(node.tagName =='DIV'){
        this.array.push(node);
        if(node.children[0].innerText ==str){
            this.searchResult.push(true);
        }
        else{
            this.searchResult.push(false);
        }
        for(var i = 0;i<node.children.length;i++){
            this.preOrderSearch(node.children[i],str);
        }
    }
};

Tree.prototype.renderColor = function(){
    var k = 0;
    var that = this;
    this.array[i].interval = setInterval(function(){
           if( k<that.array.length){
               that.array[k].style.backgroundColor = '#00cc66';
               for(var n =0;n<that.array.length;n++){
                   if(k!=n){
                       that.array[n].style.backgroundColor='#fff';
                   }
               }
           }
        k++;
        if(k>that.array.length){
            clearInterval(that.interval);
            that.initColor(that.array)
        }
    },500);
};

Tree.prototype.renderColorSearch = function(){
    var j = 0;
    var searchFlag = false;
    var that = this;
    this.interval = setInterval(function(){
        if(j<that.array.length){
            if(!that.searchResult[j]){
                that.array[j].style.backgroundColor = '#00cc66';
            }else{
                searchFlag = true;
                that.array[j].style.backgroundColor = 'red';
            }
            for(var n =0;n<that.array.length;n++){
                if(j!=n &&!that.searchResult[n]){
                    that.array[n].style.backgroundColor = '#fff';
                }
            }
        }
        j++;
        if(j>that.array.length){
            if(!that.searchResult[that.array.length-1]){
                that.array[that.array.length-1].style.backgroundColor = '#fff';
            }
            if(!searchFlag){
                alert('未找到');
            }
        }
    },500)
};

Tree.property.AddClickEvent = function(){
    var start = document.getElementById('main');
    var parent = document.getElementById('parent');
    var divs = document.getElementsByTagName('div');
    parent.addEventListener('click',function(e){
        if(e.target.nodeName =='DIV'){
            e.target.style.backgroundColor ='#cacaca';
            for(var n = 0;n<divs.length;n++){
                divs[n].chooseFlag ==false;
                if(divs[n] != e.target){
                    divs[n].style.backgroundColor = '#fff';
                }
                else{
                    e.chooseFlag = true;
                }
            }
        }
    })
};

window.onload = function(){
    var pre = document.getElementById('pre_ord');
    var searchTxt = document.getElementById('search_txt');
    var searchBtn = document.getElementById('search_btn');

}




