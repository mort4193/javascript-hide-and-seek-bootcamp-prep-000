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
  current[i].innerHTML= parseInt(current[i].innerHTML)+n

    }

return current
}

  function deepestChild (criteriaFn){
            var current=document.getElementById('grand-node')
            while (current) {
               if (criteriaFn(current[i])) {
                 return current[i]
               }
             }
           }
