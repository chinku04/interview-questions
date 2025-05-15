Whatfix interview
ques 1:
var a = [-4, -2, 0, 3];
function sortedSQ(nums) {
    let result = [];
    let left = 0;
    let right = nums.length - 1;
    let ind = nums.length - 1;
    while (left <= right) {
        let leftSqr = nums[left] * nums[left];
        let RightSqr = nums[right] * nums[right];
        if (leftSqr > RightSqr) {
            result[ind] = leftSqr;
            left++;
        }
        else {
            result[ind] = RightSqr;
            right--;
        }
        ind--;
    }
    return result;

}
console.log(sortedSQ(a));



ques 2:
var a = ["url1", "url2", "url3", "url4", "url5", "url6", "url7"];
var n = 3;

var outUrl = [["https://dummyjson.com/test?id=7", "https://dummyjson.com/test?id=6", "https://dummyjson.com/test?id=5"], ["https://dummyjson.com/test?id=4", "https://dummyjson.com/test?id=3", "https://dummyjson.com/test?id=2"], ["https://dummyjson.com/test?id=1"]];
async function squenceUrlFetch(urls) {
    let result = [];
    for (var url of urls) {
        try {
            console.log("url", url)
            var res = await fetch(url);
            if (!res.ok) {
                throw new Error("error occured")
            }

            var data = res.json();
            console.log("res", data);
            result.push(data);

        }
        catch (error) {
            console.log("error", error)
        }

    }
}

function fetchAll(urls) {
    const promises = urls.map(items => squenceUrlFetch(items));
    return Promise.all(promises);
}
console.log(fetchAll(outUrl));