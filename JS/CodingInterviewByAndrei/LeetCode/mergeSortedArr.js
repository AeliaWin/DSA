function merge(nums1,m,nums2,n){
    if(m===0){
        for(let i=0;i<n;i++){
            nums1[i] = nums2[i];
        }
    } else if(n === 0){
        return nums1
    } else {
        for(let i = 0; i < n; i++){
            for(let j = 0; j < (m+n); j++){
                // console.log(j, nums1[j])
                if(nums1[j] > nums2[i]){
                    // console.log(nums1[j],nums2[i])
                    let temp = nums1[j];
                    nums1[j] = nums2[i];
                    nums1[m+i] = temp

                    break;
                    // console.log(nums1)
                    // console.log(nums2);

                } else if (nums1[j] === 0){
                    console.log(nums2[i],i,j)
                    nums1[j] = nums2[i];
                    // n--;
                    break;
                } else {
                    nums1[m+i] = nums2[i];
                    break;
                }
            }
        }
        console.log(nums1)
        // insertion sort
        for(let i = 0; i < nums1.length; i++){
            for(let j = i+1; j >=0 ; j--){
                if(nums1[j] < nums1[j-1]){
                    let temp = nums1[j];
                    nums1[j] = nums1[j-1];
                    nums1[j-1] = temp;
                }
            }
        }
    }
    
    return nums1
}
let nums1 = [-12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let m = 1;
let nums2 = [-49,-45,-42,-41,-40,-39,-39,-39,-38,-36,-34,-34,-33,-33,-32,-31,-29,-28,-26,-26,-24,-21,-20,-20,-18,-16,-16,-14,-11,-7,-6,-5,-4,-4,-3,-3,-2,-2,-1,0,0,0,2,2,6,7,7,8,10,10,13,13,15,15,16,17,17,19,19,20,20,20,21,21,22,22,24,24,25,26,27,29,30,30,30,35,36,36,36,37,39,40,41,42,45,46,46,46,47,48]
let n = 90;
// console.log(merge([1,2,4,5,6,0],5,[3],1));
console.log(merge(nums1,m,nums2,n));
// console.log(merge([],0,[1,2],2))