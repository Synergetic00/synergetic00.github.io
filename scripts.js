var pageNum = 1;

var pageNums = [1];
var maxPages = [4];

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

    for (var i = 1; i <= maxPages[0]; i++) {
        document.getElementById('skillsP'+i).style.display='none';
    }
    document.getElementById('skillsP'+pageNums[0]).style.display='block';

    return false;
};
