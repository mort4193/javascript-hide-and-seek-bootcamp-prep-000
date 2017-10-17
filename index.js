function getFirstSelector(selector){
 var sel=document.querySelectorAll(selector)
return sel[0]
}

function nestedTarget (){
  var sel = document.getElementById('nested')
return sel
}

function increaseRankBy (n){
  var current=document.querySelectorAll('ul.ranked-list')
    for(let i=0; i<current.length; i++){
  current[i].innerHtml=parseInt(current[i].innerHtml)+n
return current
    }


}

function deepestChild (){
          var current=document.getElementById('grand-node'.div)
var store=[]
store.push(current)
      return current
  }
