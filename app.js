var pageNum = 1;

var pageNums = [1,1,1,1,1];
var maxPages = [3,3,3,3,3];

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
        document.getElementById('graphicsP'+i).style.display='none';
    }
    document.getElementById('graphicsP'+pageNums[0]).style.display='block';

    for (var i = 1; i <= maxPages[1]; i++) {
        document.getElementById('animationsP'+i).style.display='none';
    }
    document.getElementById('animationsP'+pageNums[1]).style.display='block';

    for (var i = 1; i <= maxPages[1]; i++) {
        document.getElementById('modelsP'+i).style.display='none';
    }
    document.getElementById('modelsP'+pageNums[2]).style.display='block';

    for (var i = 1; i <= maxPages[1]; i++) {
        document.getElementById('gamesP'+i).style.display='none';
    }
    document.getElementById('gamesP'+pageNums[3]).style.display='block';

    for (var i = 1; i <= maxPages[1]; i++) {
        document.getElementById('miscP'+i).style.display='none';
    }
    document.getElementById('miscP'+pageNums[4]).style.display='block';

    return false;
};