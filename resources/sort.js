function quickSort(arr, left, right) {
    //left < right , 继续排序
    if (left < right) {
        var i = left, j = right + 1;//j=right+1,用于--j
        var key = arr[left];
        var temp;

        while (true) {
            while (arr[--j] > key);
            while (arr[++i] < key && i < right);
            if (i >= j) break;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        arr[left] = arr[j];
        arr[j] = key;
        var tt=arr.slice(0,j),t2=arr.slice(j+1);
        quickSort(arr, left, j - 1);
        quickSort(arr, j + 1, right);
    }
}
var t = [1, 2, 3, 4, 5, 6, 9, 7, 10, 8];
// console.log(quickSort(t, 0, t.length - 1));

var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function (data) {
    // var arr=data.split(" ");
    // console.log(typeof arr[0]);
    var arr = data.split(" ").map(x => Number(x));
    var arr2 = data.split(" ");
    console.log(arr.sort()+"\n"+arr2.sort());//sort()以字符串作为比较
    // console.log(arr2,typeof arr2[0]);
    quickSort(arr, 0, arr.length - 1);
    quickSort(arr2, 0, arr2.length - 1);//string
    console.log(arr+"\n"+arr2);
})


var count=0;
function quickSort2(arr) {
    //left < right , 继续排序
    var left=0,right=arr.length-1;
    if (left < right) {
        var i = left, j = right + 1;//j=right+1,用于--j
        var key = arr[left];
        var temp;
        while (true) {
            while (arr[--j] > key);
            while (arr[++i] < key && i < right);
            if (i >= j) break;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        arr[left] = arr[j];
        arr[j] = key;
        var tt=arr.slice(0,j),t2=arr.slice(j+1);
        console.log(tt,arr[j],t2);
        quickSort2(tt);
        quickSort2(t2);
        // arr=tt.concat(arr[j]).concat(t2);
        arr.splice(0,tt.length,...tt);
        arr.splice(j+1,t2.length,...t2);
        // for(var m=0;m