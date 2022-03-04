const ourVision = [
  "B$u$i$ld",
  "$t$$h$e",
  "N$e$x$t",
  "E$$ra",
  "$$o$f$",
  "S$$of$t$wa$r$e",
  "De$$ve$l$op$me$n$t",
];

const result = ourVision.reduce(
  (acc, word) => (acc += " " + word.replace(/\$/g, "").toUpperCase()),
  ""
);

console.log(result);
