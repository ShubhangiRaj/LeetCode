var containsNearbyDuplicate = function(nums, k) {
    let hashMap = {}
        for(let [index, value] of nums.entries()){
            if(hashMap[value]){
                hashMap[value].push(index);
            } else {
                hashMap[value] = [index];
            }
        }
        console.log(hashMap);
}
containsNearbyDuplicate([1,2,3,1,2,3])