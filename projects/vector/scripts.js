let ox, oy, oz;
let tx, ty, tz;
let rx, ry, rz;
let sx, sy, sz;
let fx, fy, fz;

function submit() {
    // Original
    ox = document.getElementById('ox').value*1;
    oy = document.getElementById('oy').value*1;
    oz = document.getElementById('oz').value*1;

    // Transform
    tx = document.getElementById('tx').value*1;
    ty = document.getElementById('ty').value*1;
    tz = document.getElementById('tz').value*1;
    
    // Rotation
    rx = document.getElementById('rx').value*1;
    ry = document.getElementById('ry').value*1;
    rz = document.getElementById('rz').value*1;
    
    // Scale
    sx = document.getElementById('sx').value*1;
    sy = document.getElementById('sy').value*1;
    sz = document.getElementById('sz').value*1;

    // Final
    fx = document.getElementById('fx');
    fy = document.getElementById('fy');
    fz = document.getElementById('fz');

    calculate();
};

function calculate() {
    scale();
    rotate();
    translate();
    output();
};

function translate() {
    ox += tx;
    oy += ty;
    oz += tz;
};

function rotate() {
    let rrx = rx * (Math.PI / 180);
    let rry = ry * (Math.PI / 180);
    let rrz = rz * (Math.PI / 180);

    let cosa = Math.cos(rrz);
    let sina = Math.sin(rrz);

    let cosb = Math.cos(rrx);
    let sinb = Math.sin(rrx);

    let cosc = Math.cos(rry);
    let sinc = Math.sin(rry);

    let Axx = cosa*cosb;
    let Axy = cosa*sinb*sinc - sina*cosc;
    let Axz = cosa*sinb*cosc + sina*sinc;

    let Ayx = sina*cosb;
    let Ayy = sina*sinb*sinc + cosa*cosc;
    let Ayz = sina*sinb*cosc - cosa*sinc;

    let Azx = -sinb;
    let Azy = cosb*sinc;
    let Azz = cosb*cosc;

    let px = ox;
    let py = oy;
    let pz = oz;

    ox = Axx*px + Axy*py + Axz*pz;
    oy = Ayx*px + Ayy*py + Ayz*pz;
    oz = Azx*px + Azy*py + Azz*pz;
}

/*
function rotate() {
    rrx = rx * (Math.PI / 180);
    rry = ry * (Math.PI / 180);
    rrz = rz * (Math.PI / 180);
    s = Math.sin(rrz);
    c = Math.cos(rrz);

    ox *= c;
    oy *= s;
};
*/

function scale() {
    ox *= sx;
    oy *= sy;
    oz *= sz;
};

function output() {
    fx.value = ox.toFixed(4);
    fy.value = oy.toFixed(4);
    fz.value = oz.toFixed(4);
};