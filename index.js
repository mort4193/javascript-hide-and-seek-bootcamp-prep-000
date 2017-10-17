function getFirstSelector(selector){
 var sel=document.querySelectorAll(selector)
return sel[0]
}

function nestedTarget (){
  var sel = document.getElementById('nested')
return sel
}

function increaseRankBy (n){
  var current=document.querySelectorAll(parseInt('ul.ranked-list'))
    for(let i=0; i<current.length; i++){
    var  next=[]
      next.push(current[i])
      next+=n
    }

    return next
}

function deepestChild (){
          var current=document.getElementById('grand-node'.div)
var store=[]
store.push(current)
      return current
  }
