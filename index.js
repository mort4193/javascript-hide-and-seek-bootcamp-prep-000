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

function deepestChild (){
  function deepestChild (array, criteriaFn){
            var current=document.getElementById('grand-node')
            for (let i = 0; i < array.length; i++) {
               if (criteriaFn(array[i])) {
                 return array[i]
               }
             }
           }
         }
         function find(array, criteriaFn) {
           let current = array
           let next = []
           while (current) {
             if (criteriaFn(current)) {
               return current
             }
             if (Array.isArray(current)) {
               for (let i = 0; i < current.length; i++) {
                 next.push(current[i])
               }
             }
  
             current = next.shift()
           }
  
           return null
         }