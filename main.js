/*get Element*/
const Name = document.getElementById("MyName");
const From = document.getElementById("from");
const Univercity = document.getElementById("univercity");

const Food = document.getElementById("food");
const Music = document.getElementById("music");
const Language = document.getElementById("Language");
const Dislike = document.getElementById("dislike");

MyPfofiel = {
  myName: ["山本和", "ヤマモト ミキタ"],
  from: ["京都", "京都府 福知山"],
  Univercity: ["信州大学", "工学部 電子情報システム工学科"],
  food: ["寿司", "練り製品"],
  Music: ["iri", "None"],
  Language: ["Python", "C"],
};

/*Block1################################################################*/
/*def Over*/
const BasicOver = function (num) {
  index = 1;
  if (num === 0) {
    Name.textContent = MyPfofiel.myName[index];
  } else if (num === 1) {
    From.textContent = MyPfofiel.from[index];
  } else if (num === 2) {
    Univercity.textContent = MyPfofiel.Univercity[index];
  }
};
/*def Leave*/
const BasicLeave = function (num) {
  index = 0;
  if (num === 0) {
    Name.textContent = MyPfofiel.myName[index];
  } else if (num === 1) {
    From.textContent = MyPfofiel.from[index];
  } else if (num === 2) {
    Univercity.textContent = MyPfofiel.Univercity[index];
  }
};

/*Over*/
Name.onmouseover = function () {
  BasicOver(0);
};
From.onmouseover = function () {
  BasicOver(1);
};
Univercity.onmouseover = function () {
  BasicOver(2);
};

/*leave*/
Name.onmouseleave = function () {
  BasicLeave(0);
};
From.onmouseleave = function () {
  BasicLeave(1);
};
Univercity.onmouseleave = function () {
  BasicLeave(2);
};
/*Block2################################################################*/
const DislikeFun = function () {
  Dislike.textContent = "Dislike";
  Food.textContent = MyPfofiel.food[1];
  Music.textContent = MyPfofiel.Music[1];
  Language.textContent = MyPfofiel.Language[1];
};
const Like = function () {
  Dislike.textContent = "Favorite";
  Food.textContent = MyPfofiel.food[0];
  Music.textContent = MyPfofiel.Music[0];
  Language.textContent = MyPfofiel.Language[0];
};
Dislike.onmouseover = function () {
  DislikeFun();
};
Dislike.onmouseleave = function () {
  Like();
};
/*Block3################################################################*/
//Euclid
const P = document.getElementById("num1");
const Q = document.getElementById("num2");
const Result = document.getElementById("result");
const Calcuration = document.getElementById("cal");
const Clear = document.getElementById("clear");

const GCD = function (p, q) {
  let r;
  r = p % q;
  if (r === 0) {
    return q;
  } else {
    return GCD(q, r);
  }
};
//console.log(GCD(15, 45));
Calcuration.onclick = function () {
  let n, m;
  n = Number(P.value);
  m = Number(Q.value);
  //console.log(n);
  //console.log(m);
  if (n > 0 && m > 0) {
    //console.log(GCD(n, m));
    Result.textContent = GCD(n, m);
  } else {
    Result.textContent = "Unknown";
  }
};
Clear.onclick = function () {
  P.value = "";
  Q.value = "";
  Result.textContent = "Unknown";
};
