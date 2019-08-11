$(function () {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
  // TODO: your code here!
  
  let wordArray = html.innerText.split(' ');
  let isOpenTag = false;
  // let color = ["<span style = \"red\">","<span style = \"yellow\">","<span style = \"orange\">","<span style = \"green\">","<span style = \"blue\">","<span style = \"purple\">"]
  // let index = [Math.random()*(color.length-1)];
  
  html = wordArray.reduce(function (acc, curr) {
    if (curr.includes("Lorem") && curr.includes(".")) { //문단 사이가 띄워져 있지만 띄어쓰기로 인식되지 않아 추가
      curr = curr.split('.');
      acc += "<span>" + curr[0] + ".</span>" + "<span>" + curr[1] + "</span>";
    }
    else {
      if (isOpenTag === false) {
        acc += "<span>" + curr;
      }
      acc += "</span>";
    }
    return acc;
  }, '')
  console.log(html);

  // return setTimeout(function(arg1) {}, 1000);

});