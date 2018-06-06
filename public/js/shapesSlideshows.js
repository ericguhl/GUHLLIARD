var slideIndex = [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1];
var slideId = ["chellaSlides",
  "smoothcriminalSlides",
  "splashhouseSlides",
  "suzyqSlides",
  "swangSlides",

  "sweepSlides",
  "toeheeltwistSlides",
  "turbineSlides",
  "twisterSlides",
  "weedwackerSlides",

  "bigwillystyleSlides",
  "charlestonSlides",
  "crisscrossSlides",
  "ecruzSlides",
  "turnnburnSlides",

  "zigzagSlides",
  "cutsSlides",
  "cutsrevSlides",
  "frontstutterSlides",
  "rearkickSlides",

  "vsteppinSlides",
  "yankedSlides",
  "flyfeetSlides",
  "flyfeetrevSlides",
  "giddyupSlides",

  "karaokeSlides",
  "whackySlides",
  "innoutSlides",
  "roundaboutsSlides",
  "shimmySlides",

  "siderockSlides",
  "stomperSlides",
  "tsteppinSlides",
  "toepogoSlides",
  "insidespinSlides",

  "outsidespinSlides"
  ]
// showDivs(1, 0);
// showDivs(1, 1);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
