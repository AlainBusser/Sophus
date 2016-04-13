// Generated by CoffeeScript 1.4.0
var SVG, Tortue, axeX, axeY, axes, dessineCercle, dessineSegment, dessineTexte, effaceDessin, garderobe, grille, toto, totos;

totos = {};

toto = 1;

SVG = function(tag) {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
};

garderobe = ["<line x1='4' y1='12' x2='28' y2='32' stroke-linecap='round' style='stroke: green; stroke-width: 4'/>\n<line x1='4' y1='28' x2='28' y2='8' stroke-linecap='round' style='stroke: green; stroke-width: 4'/>\n<line x1='20' y1='20' x2='36' y2='20' stroke-linecap='round' style='stroke: green; stroke-width: 8'/>\n<ellipse cx='16' cy='20' rx='14' ry='10' style='fill: orange; stroke: brown; stroke-width: 2'/>\n<circle cx='34' cy='16' r='2' style='fill: black; '/>\n<circle cx='34' cy='24' r='2' style='fill: black; '/>", "<line x1=\"6\" y1=\"12\" x2=\"24\" y2=\"32\" stroke-linecap=\"round\" style=\"stroke: green; stroke-width: 4\"/>\n<line x1=\"2\" y1=\"28\" x2=\"32\" y2=\"8\" stroke-linecap=\"round\" style=\"stroke: green; stroke-width: 4\"/>\n<line x1=\"20\" y1=\"20\" x2=\"36\" y2=\"20\" stroke-linecap=\"round\" style=\"stroke: green; stroke-width: 8\"/>\n<ellipse cx=\"16\" cy=\"20\" rx=\"14\" ry=\"10\" style=\"fill: orange; stroke: brown; stroke-width: 2\"/>\n<circle cx=\"34\" cy=\"16\" r=\"2\" style=\"fill: black; \"/>\n<circle cx=\"34\" cy=\"24\" r=\"2\" style=\"fill: black; \"/>", "<line x1=\"2\" y1=\"12\" x2=\"32\" y2=\"32\" stroke-linecap=\"round\" style=\"stroke: green; stroke-width: 4\"/>\n<line x1=\"6\" y1=\"28\" x2=\"24\" y2=\"8\" stroke-linecap=\"round\" style=\"stroke: green; stroke-width: 4\"/>\n<line x1=\"20\" y1=\"20\" x2=\"36\" y2=\"20\" stroke-linecap=\"round\" style=\"stroke: green; stroke-width: 8\"/>\n<ellipse cx=\"16\" cy=\"20\" rx=\"14\" ry=\"10\" style=\"fill: orange; stroke: brown; stroke-width: 2\"/>\n<circle cx=\"34\" cy=\"16\" r=\"2\" style=\"fill: black; \"/>\n<circle cx=\"34\" cy=\"24\" r=\"2\" style=\"fill: black; \"/>", "<line x1=\"12\" y1=\"20\" x2=\"30\" y2=\"20\" style=\"stroke: blue; stroke-width: 1\"/>\n<line x1=\"20\" y1=\"25\" x2=\"20\" y2=\"10\" style=\"stroke: red; stroke-width: 1\"/>\n<text x=\"0\" y=\"24\" style=\"fill: blue;\">x</text>\n<text x=\"16\" y=\"34\" style=\"fill: red;\">y</text>\n<polygon style=\"fill: blue\" points=\"30,18 36,20 30,22\"></polygon>\n<polygon style=\"fill: red\" points=\"18,10 20,4 22,10\"></polygon>", "<line x1=\"4\" y1=\"8\" x2=\"4\" y2=\"32\" style=\"stroke: darkGray; stroke-width: 4\"/>\n<line x1=\"3\" y1=\"8\" x2=\"3\" y2=\"32\" style=\"stroke: lightGray; stroke-width: 2\"/>\n<line x1=\"4\" y1=\"6\" x2=\"4\" y2=\"10\" style=\"stroke: brown; stroke-width: 8\"/>\n<line x1=\"34\" y1=\"14\" x2=\"34\" y2=\"26\" style=\"stroke: darkBlue; stroke-width: 4\"/>\n<line x1=\"4\" y1=\"30\" x2=\"4\" y2=\"34\" style=\"stroke: brown; stroke-width: 8\"/>\n<line x1=\"20\" y1=\"20\" x2=\"36\" y2=\"20\" stroke-linecap=\"round\" style=\"stroke: darkGray; stroke-width: 8\"/>\n<line x1=\"20\" y1=\"19\" x2=\"36\" y2=\"19\" stroke-linecap=\"round\" style=\"stroke: gray; stroke-width: 6\"/>\n<line x1=\"20\" y1=\"18\" x2=\"36\" y2=\"18\" stroke-linecap=\"round\" style=\"stroke: lightGray; stroke-width: 4\"/>\n<ellipse cx=\"16\" cy=\"20\" rx=\"14\" ry=\"10\" style=\"fill: gray; \"/>\n<ellipse cx=\"15\" cy=\"19\" rx=\"12\" ry=\"8\" style=\"fill: darkGray; \"/>\n<ellipse cx=\"14\" cy=\"18\" rx=\"10\" ry=\"6\" style=\"fill: lightGray; \"/>\n<ellipse cx=\"13\" cy=\"17\" rx=\"8\" ry=\"4\" style=\"fill: white; \"/>", "<line x1=\"8\" y1=\"20\" x2=\"20\" y2=\"20\" style=\"stroke: brown; stroke-width: 1\"/>\n<polygon style=\"fill: brown\" points=\"20,12 40,20 20,28\"></polygon>"];

effaceDessin = function() {
  var dessin, k, v, _results;
  dessin = $('#leSVG');
  dessin.empty();
  _results = [];
  for (k in totos) {
    v = totos[k];
    _results.push(dessin.append($($.parseXML(v.svg)).find("#" + v.id)));
  }
  return _results;
};

dessineSegment = function(x1, y1, x2, y2, couleur) {
  var dessin;
  if (x1 === null) {
    x1 = 0;
  }
  if (y1 === null) {
    y1 = 0;
  }
  if (x2 === null) {
    x2 = 1;
  }
  if (y2 === null) {
    y2 = 1;
  }
  if (couleur === null) {
    couleur = 'black';
  }
  dessin = $('#leSVG');
  return $(SVG('line')).attr('x1', x1).attr('y1', y1).attr('x2', x2).attr('y2', y2).attr('stroke', couleur).attr('stroke-width', 1).appendTo(dessin);
};

dessineTexte = function(texte, x, y, couleur) {
  var dessin;
  dessin = void 0;
  if (x === null) {
    x = 20;
  }
  if (y === null) {
    y = 20;
  }
  if (couleur === null) {
    couleur = 'black';
  }
  dessin = $('#leSVG');
  return $(SVG('text')).attr('x', x).attr('y', y).attr('fill', couleur).text(texte).appendTo(dessin);
};

dessineCercle = function(cx, cy, r, couleur) {
  var dessin;
  dessin = void 0;
  if (cx === null) {
    cx = 0;
  }
  if (cy === null) {
    cy = 0;
  }
  if (r === null) {
    r = 5;
  }
  if (couleur === null) {
    couleur = 'red';
  }
  dessin = $('#leSVG');
  return $(SVG('circle')).attr('cx', cx).attr('cy', cy).attr('r', r).attr('fill', couleur).attr('fill-opacity', 0.4).attr('stroke', couleur).attr('stroke-width', 1).appendTo(dessin);
};

axeX = function() {
  var x, _results;
  dessineSegment(20, 240, 620, 240, 'black');
  dessineSegment(620, 240, 600, 234, 'black');
  dessineSegment(620, 240, 600, 246, 'black');
  x = -300;
  _results = [];
  while (x < 300) {
    if (Math.abs(x) % 50 > 0) {
      dessineSegment(320 + x, 242, 320 + x, 238, 'black');
    } else {
      if (Math.abs(x) % 100 > 0) {
        dessineSegment(320 + x, 244, 320 + x, 236, 'black');
      } else {
        dessineSegment(320 + x, 245, 320 + x, 235, 'black');
        dessineTexte(x, 320 + x, 260);
      }
    }
    _results.push(x += 10);
  }
  return _results;
};

axeY = function() {
  var y, _results;
  dessineSegment(320, 440, 320, 40, 'black');
  dessineSegment(320, 40, 314, 60, 'black');
  dessineSegment(320, 40, 326, 60, 'black');
  y = -200;
  _results = [];
  while (y < 200) {
    if (Math.abs(y) % 50 > 0) {
      dessineSegment(318, 240 - y, 322, 240 - y, 'black');
    } else {
      if (Math.abs(y) % 100 > 0) {
        dessineSegment(316, 240 - y, 324, 240 - y, 'black');
      } else {
        dessineSegment(315, 240 - y, 325, 240 - y, 'black');
        dessineTexte(y, 322, 240 - y);
      }
    }
    _results.push(y += 10);
  }
  return _results;
};

grille = function() {
  var x, y, _results;
  x = -300;
  while (x <= 300) {
    if (Math.abs(x) % 50 > 0) {
      dessineSegment(320 + x, 40, 320 + x, 440, 'yellow');
    } else {
      dessineSegment(320 + x, 40, 320 + x, 440, 'orange');
    }
    x += 10;
  }
  y = -200;
  _results = [];
  while (y <= 200) {
    if (Math.abs(y) % 50 > 0) {
      dessineSegment(20, 240 - y, 620, 240 - y, 'yellow');
    } else {
      dessineSegment(20, 240 - y, 620, 240 - y, 'orange');
    }
    _results.push(y += 10);
  }
  return _results;
};

axes = function() {
  axeX();
  return axeY();
};

Tortue = (function() {

  function Tortue(id) {
    var $dessin;
    this.id = id;
    this.x = 320;
    this.y = 240;
    this.t = 0;
    this.c = '#000066';
    this.stylo = true;
    this.costumeId = 0;
    this.svg = "<svg xmlns='http://www.w3.org/2000/svg' version='1.1'>\n  <g id='" + this.id + "' transform='translate(300 220) rotate(0 20 20)' width='40' height='40' >\n    " + garderobe[this.costumeId] + "\n  </g>\n</svg>";
    $dessin = $('#leSVG');
    if ($dessin.find("#" + this.id).length === 0) {
      $dessin.append($($.parseXML(this.svg)).find("#" + this.id));
    }
    console.log($("#" + this.id).attr("transform"));
  }

  Tortue.prototype.toto_update = function() {
    return $("#" + this.id).attr("transform", "translate(" + (this.x - 20) + " " + (this.y - 20) + ") rotate(" + (this.t * 180 / Math.PI) + " 20 20)");
  };

  Tortue.prototype.svg_update = function() {
    var $svg;
    this.svg = garderobe[this.costumeId];
    $svg = "<svg xmlns='http://www.w3.org/2000/svg' version='1.1'>\n    <g id='toto' transform='translate(300 220) rotate(0 20 20)' width='40' height='40' >\n    " + this.svg + "\n    </g>\n</svg>";
    return $("#" + this.id).empty().append($($.parseXML($svg)).find("#toto").contents());
  };

  Tortue.prototype.penup = function() {
    return this.stylo = false;
  };

  Tortue.prototype.pendown = function() {
    return this.stylo = true;
  };

  Tortue.prototype.show = function() {
    return $('#' + this.id).show();
  };

  Tortue.prototype.hide = function() {
    return $('#' + this.id).hide();
  };

  Tortue.prototype.couleur = function(coul) {
    return this.c = coul;
  };

  Tortue.prototype.tg = function(a) {
    this.t -= a / 180 * Math.PI;
    return this.toto_update();
  };

  Tortue.prototype.td = function(a) {
    this.t += a / 180 * Math.PI;
    return this.toto_update();
  };

  Tortue.prototype.orient = function(a) {
    this.t = a / 180 * Math.PI;
    return this.toto_update();
  };

  Tortue.prototype.write = function(texte) {
    return dessineTexte(texte, this.x, this.y, this.c);
  };

  Tortue.prototype.cercle = function() {
    return dessineCercle(this.x, this.y, 4, this.c);
  };

  Tortue.prototype.teleport = function(x, y) {
    var _ref;
    _ref = [x, y], this.x = _ref[0], this.y = _ref[1];
    return this.toto_update();
  };

  Tortue.prototype.av = function(d) {
    var oldx, oldy;
    oldx = this.x;
    oldy = this.y;
    this.x += d * Math.cos(this.t);
    this.y += d * Math.sin(this.t);
    if (this.stylo) {
      dessineSegment(oldx, oldy, this.x, this.y, this.c);
    }
    return this.toto_update();
  };

  Tortue.prototype.re = function(d) {
    var oldx, oldy;
    oldx = void 0;
    oldy = void 0;
    oldx = this.x;
    oldy = this.y;
    this.x -= d * Math.cos(this.t);
    this.y -= d * Math.sin(this.t);
    if (this.stylo) {
      dessineSegment(oldx, oldy, this.x, this.y, this.c);
    }
    return this.toto_update();
  };

  Tortue.prototype.distance = function(autre) {
    var d;
    d = Math.sqrt(Math.pow(autre.x - this.x, 2) + Math.pow(autre.y - this.y, 2));
    console.log("distance: " + d);
    return d;
  };

  Tortue.prototype.azimuth = function(autre) {
    var a;
    a = Math.atan2(autre.y - this.y, autre.x - this.x);
    this.t = a;
    return this.toto_update();
  };

  Tortue.prototype.avatar = function(nb) {
    this.costumeId = nb;
    return this.svg_update();
  };

  Tortue.prototype.costume_suivant = function() {
    this.costumeId = (this.costumeId + 1) % garderobe.length;
    return this.svg_update();
  };

  Tortue.prototype.costume_pred = function() {
    this.costumeId = (this.costumeId + garderobe.length - 1) % garderobe.length;
    return this.svg_update();
  };

  return Tortue;

})();

$(function() {
  return totos[toto] = new Tortue(toto);
});
