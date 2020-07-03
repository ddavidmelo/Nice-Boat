var w_w = window.innerWidth;
var w_h = window.innerHeight;

function findScreenCoords(evt) {
  mouseX = evt.clientX;
  mouseY = evt.clientY;
  theta_radians = Math.atan2(mouseY - w_h/2, mouseX - w_w/2)
  //console.log("x = " + mouseX,"\n y = " + mouseY + "\n r = " + theta_radians);

  Drawcircle(0.2,-0.2,55,55,55,1,theta_radians);
}

function Drawcircle(ri,rf,r,g,b,op,rotate) {
  circle.beginPath();
  circle.arc(220, 220, 210, 0,2*Math.PI);
  circle.lineWidth = 5;
  circle.stroke();
  circle.strokeStyle = '#ccc';
  
  circle.beginPath();
  circle.arc(220, 220, 210, (ri+rotate) , (rf+rotate) );
  circle.lineWidth = 8;
  circle.stroke();
  circle.strokeStyle = 'rgba('+r+','+g+','+b+','+op+')';
}

function Drawboat() {
  sizeP=1.2;
  sizeX=-10;
  sizeY=10;

  boat.beginPath();
  boat.moveTo(155*sizeP-sizeX,214*sizeP-sizeY);
  boat.lineTo(156*sizeP-sizeX,121*sizeP-sizeY);
  boat.lineTo(189*sizeP-sizeX,52*sizeP-sizeY);
  boat.lineTo(194*sizeP-sizeX,84*sizeP-sizeY);
  boat.lineTo(205*sizeP-sizeX,126*sizeP-sizeY);
  boat.lineTo(221*sizeP-sizeX,167*sizeP-sizeY);
  boat.lineTo(234*sizeP-sizeX,194*sizeP-sizeY);
  boat.fill();

  boat.beginPath();
  boat.moveTo(45*sizeP-sizeX,198*sizeP-sizeY);
  boat.lineTo(37*sizeP-sizeX,202*sizeP-sizeY);
  boat.lineTo(30*sizeP-sizeX,208*sizeP-sizeY);
  boat.lineTo(26*sizeP-sizeX,214*sizeP-sizeY);
  boat.lineTo(28*sizeP-sizeX,223*sizeP-sizeY);
  boat.lineTo(38*sizeP-sizeX,232*sizeP-sizeY);
  boat.lineTo(50*sizeP-sizeX,240*sizeP-sizeY);
  boat.lineTo(60*sizeP-sizeX,245*sizeP-sizeY);
  boat.lineTo(64*sizeP-sizeX,247*sizeP-sizeY);
  boat.lineTo(73*sizeP-sizeX,251*sizeP-sizeY);
  boat.lineTo(77*sizeP-sizeX,252*sizeP-sizeY);
  boat.lineTo(290*sizeP-sizeX,252*sizeP-sizeY);
  boat.lineTo(295*sizeP-sizeX,250*sizeP-sizeY);
  boat.lineTo(301*sizeP-sizeX,246*sizeP-sizeY);
  boat.lineTo(322*sizeP-sizeX,245*sizeP-sizeY);
  boat.lineTo(315*sizeP-sizeX,231*sizeP-sizeY);
  boat.lineTo(312*sizeP-sizeX,229*sizeP-sizeY);
  boat.lineTo(307*sizeP-sizeX,221*sizeP-sizeY);
  boat.lineTo(301*sizeP-sizeX,213*sizeP-sizeY);
  boat.lineTo(296*sizeP-sizeX,211*sizeP-sizeY);
  boat.lineTo(290*sizeP-sizeX,212*sizeP-sizeY);
  boat.lineTo(293*sizeP-sizeX,219*sizeP-sizeY);
  boat.lineTo(290*sizeP-sizeX,227*sizeP-sizeY);
  boat.lineTo(283*sizeP-sizeX,232*sizeP-sizeY);
  boat.lineTo(271*sizeP-sizeX,235*sizeP-sizeY);
  boat.lineTo(92*sizeP-sizeX,235*sizeP-sizeY);
  boat.lineTo(72*sizeP-sizeX,230*sizeP-sizeY);
  boat.lineTo(56*sizeP-sizeX,226*sizeP-sizeY);
  boat.lineTo(46*sizeP-sizeX,221*sizeP-sizeY);
  boat.lineTo(40*sizeP-sizeX,216*sizeP-sizeY);
  boat.lineTo(38*sizeP-sizeX,211*sizeP-sizeY);
  boat.lineTo(40*sizeP-sizeX,205*sizeP-sizeY);
  boat.lineTo(50*sizeP-sizeX,197*sizeP-sizeY);
  boat.fill();

  boat.beginPath();
  boat.moveTo(155*sizeP-sizeX,209*sizeP-sizeY);
  boat.lineTo(155*sizeP-sizeX,237*sizeP-sizeY);
  boat.lineTo(160*sizeP-sizeX,237*sizeP-sizeY);
  boat.lineTo(160*sizeP-sizeX,209*sizeP-sizeY);
  boat.fill();

}


