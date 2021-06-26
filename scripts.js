var pageNum = 1;

var elements = ["skills","graphics","coding","games","videos"];

var pageNums = [1,1,1,1,1];
var maxPages = [4,2,2,3,2];

function changePage(dir, id) {
    var max = maxPages[id];

    if (dir) {
        //forward
        pageNums[id]++;
    } else {
        //backward
        pageNums[id]--;
    }

    if (pageNums[id] > max) pageNums[id] = 1;
    if (pageNums[id] < 1) pageNums[id] = max;

    changeShownPages();

    return false;
};

function changeShownPages() {

    for (var i = 0; i < elements.length; i++) {
        for (var j = 1; j <= maxPages[i]; j++) {
            console.log(elements[i]+'P'+j);
            document.getElementById(elements[i]+'P'+j).style.display='none';
        }
        document.getElementById(elements[i]+'P'+pageNums[i]).style.display='flex';
    }

    return false;
};
