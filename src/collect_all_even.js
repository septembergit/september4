function collect_same_elements(collection_a, object_b){
    var splitA=collection_a.map(function(item){
      	return item.key;
    }),
        splitB=object_b.value,
        result=[];
    splitA.forEach(function(itemA){
        splitB.forEach(function(itemB){
        	if(itemA===itemB){
        		result.push(itemA);
        	}
        });
    });
    return result;
}
module.exports = collect_same_elements;
