// Generated by CoffeeScript 1.4.0

Blockly.JavaScript['sophus_angle'] = function(block) {
  var angledeg;
  return angledeg = block.getFieldValue('angle');
};

Blockly.JavaScript['sophus_carre'] = function(block) {
  var dropdown_pow, varName;
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  dropdown_pow = block.getFieldValue('POW');
  return varName + ' = Math.pow(' + varName + ',' + dropdown_pow + ');\n';
};

Blockly.JavaScript['sophus_doubler'] = function(block) {
  var choix, varName;
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  choix = block.getFieldValue('CHOIX');
  return varName + ' = ' + varName + ' * ' + choix + ';\n';
};

Blockly.JavaScript['sophus_augmenter'] = function(block) {
  var argument0, varName;
  argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0';
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName + ' + ' + argument0 + ';\n';
};

Blockly.JavaScript['sophus_diminuer'] = function(block) {
  var argument0, varName;
  argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0';
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName + ' - ' + argument0 + ';\n';
};

Blockly.JavaScript['sophus_augmenter_fract'] = function(block) {
  var argument0, dropdown_denom, varName;
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0';
  dropdown_denom = block.getFieldValue('DENOM');
  return varName + ' = ' + varName + ' + ' + varName + ' * ' + argument0 + ' / ' + dropdown_denom + ';\n';
};

Blockly.JavaScript['sophus_augmenter_pct'] = function(block) {
  var argument0, varName;
  argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0';
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName + ' * (1 + ' + argument0 + ' / 100)' + ';\n';
};

Blockly.JavaScript['sophus_diminuer_fract'] = function(block) {
  var argument0, dropdown_denom, varName;
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0';
  dropdown_denom = block.getFieldValue('DENOM');
  return varName + ' = ' + varName + ' - ' + varName + ' * ' + argument0 + ' / ' + dropdown_denom + ';\n';
};

Blockly.JavaScript['sophus_diminuer_pct'] = function(block) {
  var argument0, varName;
  argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0';
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName + ' * (1 - ' + argument0 + ' / 100)' + ';\n';
};

Blockly.JavaScript['controls_for'] = function(block) {
  var up;

  var argument0, argument1, branch, code, increment, step, up, variable0;
  variable0 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  argument0 = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  argument1 = Blockly.JavaScript.valueToCode(block, 'TO', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  increment = Blockly.JavaScript.valueToCode(block, 'BY', Blockly.JavaScript.ORDER_ASSIGNMENT) || '1';
  branch = Blockly.JavaScript.statementToCode(block, 'DO');
  branch = Blockly.JavaScript.addLoopTrap(branch, block.id);
  if (Blockly.isNumber(increment)) {
    up = parseFloat(increment) >= 0;
    code = 'for (' + variable0 + ' = ' + argument0 + '; ' + variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' + variable0;
    step = Math.abs(parseFloat(increment));
    if (step === 1) {
      code += up ? '++' : '--';
    } else {
      code += (up ? ' += ' : ' -= ') + step;
    }
    code += ') {\n' + branch + '}\n';
  } else {
    up = true;
    code = 'for (' + variable0 + ' = ' + argument0 + '; ' + variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' + variable0;
    code += (up ? ' += ' : ' -= ') + increment;
    code += ') {\n' + branch + '}\n';
  }
  return code;
};

Blockly.JavaScript['sophus_multiplier'] = function(block) {
  var argument0, varName;
  argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0';
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName + ' * ' + argument0 + ';\n';
};

Blockly.JavaScript['sophus_diviser'] = function(block) {
  var argument0, varName;
  argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0';
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + varName + ' / ' + argument0 + ';\n';
};

Blockly.JavaScript['sophus_multiplier_fract'] = function(block) {
  var argument0, dropdown_denom, varName;
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0';
  dropdown_denom = block.getFieldValue('DENOM');
  return varName + ' = ' + varName + ' * ' + argument0 + ' / ' + dropdown_denom + ';\n';
};

Blockly.JavaScript['sophus_diviser_fract'] = function(block) {
  var argument0, dropdown_denom, varName;
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0';
  dropdown_denom = block.getFieldValue('DENOM');
  return varName + ' = ' + varName + ' * ' + dropdown_denom + ' / ' + argument0 + ';\n';
};

Blockly.JavaScript['sophus_arrondir'] = function(block) {
  var argument0, dropdown_grad, varName;
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0';
  dropdown_grad = block.getFieldValue('GRAD');
  return varName + ' = Math.round(' + varName + ' / ' + dropdown_grad + argument0 + ') * ' + dropdown_grad + argument0 + ';\n';
};

Blockly.JavaScript['sophus_tronquer'] = function(block) {
  var argument0, dropdown_grad, varName;
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  argument0 = Blockly.JavaScript.valueToCode(block, 'DELTA', Blockly.JavaScript.ORDER_ADDITION) || '0';
  dropdown_grad = block.getFieldValue('GRAD');
  return varName + ' = Math.floor(' + varName + ' / ' + dropdown_grad + argument0 + ') * ' + dropdown_grad + argument0 + ';\n';
};

Blockly.JavaScript['sophus_puissance'] = function(block) {
  var argument0, varName;
  argument0 = Blockly.JavaScript.valueToCode(block, 'POW', Blockly.JavaScript.ORDER_ADDITION) || '0';
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = Math.pow(' + varName + ' , ' + argument0 + ');\n';
};

Blockly.JavaScript['sophus_inverser'] = function(block) {
  var varName;
  varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + ' 1 / ' + varName + ';\n';
};

Blockly.JavaScript['big_aff'] = function(block) {
  var code, value_var;
  value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  return code = 'document.getElementById("sortieNum").value += "\\n" + ' + value_var + ';\n';
};

Blockly.JavaScript['big_efface'] = function(block) {
  var code;
  return code = 'document.getElementById("sortieNum").value = "";\n';
};

Blockly.JavaScript['tortue_x'] = function(block) {
  var code;
  code = 'totos[toto].x-320';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['tortue_y'] = function(block) {
  var code;
  code = '240-totos[toto].y';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['tortue_t'] = function(block) {
  var code;
  code = '-totos[toto].t/Math.PI*180';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['tortue_c'] = function(block) {
  var code;
  code = 'totos[toto].c';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['avancer'] = function(block) {
  var code, value_name;
  value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  return code = "totos[toto].av(" + value_name + ");\n";
};

Blockly.JavaScript['reculer'] = function(block) {
  var code, value_name;
  value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  return code = 'totos[toto].re(' + value_name + ');\n';
};

Blockly.JavaScript['tortue_gauche'] = function(block) {
  var angle_name, code;
  angle_name = block.getFieldValue('NAME');
  return code = 'totos[toto].tg(' + angle_name + ');\n';
};

Blockly.JavaScript['tortue_droite'] = function(block) {
  var angle_name, code;
  angle_name = block.getFieldValue('NAME');
  return code = 'totos[toto].td(' + angle_name + ');\n';
};

Blockly.JavaScript['var_gauche'] = function(block) {
  var code, value_angle;
  value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  return code = 'totos[toto].tg(' + value_angle + ');\n';
};

Blockly.JavaScript['var_droite'] = function(block) {
  var code, value_angle;
  value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  return code = 'totos[toto].td(' + value_angle + ');\n';
};

Blockly.JavaScript['mettre_angle'] = function(block) {
  var code, value_angle;
  value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  return code = 'totos[toto].orient(' + value_angle + ');\n';
};

Blockly.JavaScript['teleport'] = function(block) {
  var code, text_x, text_y;
  text_x = block.getFieldValue('X');
  text_y = block.getFieldValue('Y');
  return code = 'totos[toto].teleport(' + text_x + '+320,240-(' + text_y + '));\n';
};

Blockly.JavaScript['tortue_teleport'] = function(block) {
  var code, value_abs, value_ord;
  value_abs = Blockly.JavaScript.valueToCode(block, 'ABS', Blockly.JavaScript.ORDER_ATOMIC);
  value_ord = Blockly.JavaScript.valueToCode(block, 'ORD', Blockly.JavaScript.ORDER_ATOMIC);
  code = 'totos[toto].teleport(' + value_abs + '+320' + ',240-(' + value_ord + '));\n';
  return code;
};

Blockly.JavaScript['teleport_var'] = function(block) {
  var code, variable_x, variable_y;
  variable_x = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('X'), Blockly.Variables.NAME_TYPE);
  variable_y = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Y'), Blockly.Variables.NAME_TYPE);
  return code = 'totos[toto].teleport(' + variable_x + '+320' + ',240-(' + variable_y + '));\n';
};

Blockly.JavaScript['cacher_tortue'] = function(block) {
  var code;
  return code = 'totos[toto].hide();\n';
};

Blockly.JavaScript['montrer_tortue'] = function(block) {
  var code;
  return code = 'totos[toto].show();\n';
};

Blockly.JavaScript['lever_stylo'] = function(block) {
  var code;
  return code = 'totos[toto].penup();\n';
};

Blockly.JavaScript['baisser_stylo'] = function(block) {
  var code;
  return code = 'totos[toto].pendown();\n';
};

Blockly.JavaScript['scribe'] = function(block) {
  var code, value_texte;
  value_texte = Blockly.JavaScript.valueToCode(block, 'texte', Blockly.JavaScript.ORDER_ATOMIC);
  return code = "totos[toto].write('" + value_texte + "');\n";
};

Blockly.JavaScript['tampon'] = function(block) {
  var code;
  return code = 'totos[toto].cercle();\n';
};

Blockly.JavaScript['couleur_stylo'] = function(block) {
  var code, colour_colstyle;
  colour_colstyle = block.getFieldValue('colstyle');
  return code = "totos[toto].c = '" + colour_colstyle + "';\n";
};

Blockly.JavaScript['eff_svg'] = function(block) {
  var code;
  return code = 'effaceDessin();\n';
};

Blockly.JavaScript['reset'] = function(block) {
  var code;
  return code = 'effaceDessin(); toto = 1; ' + 'totos[toto].t = 0;' + 'totos[toto].teleport(320,240);\n';
};

Blockly.JavaScript['axeX'] = function(block) {
  var code;
  return code = 'axeX();\n';
};

Blockly.JavaScript['axeY'] = function(block) {
  var code;
  return code = 'axeY();\n';
};

Blockly.JavaScript['axes'] = function(block) {
  var code;
  return code = 'axes();\n';
};

Blockly.JavaScript['grille'] = function(block) {
  var code;
  return code = 'grille();\n';
};

Blockly.JavaScript['creer_tortue'] = function(block) {
  var code, text_n;
  text_n = block.getFieldValue('N');
  return code = "totos['" + text_n + "'] = new Tortue(" + value_name + ");\nconsole.log(totos);\n";
};

Blockly.JavaScript['creer_tortue_var'] = function(block) {
  var code, value_name;
  value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  return code = "totos[" + value_name + "] = new Tortue(" + value_name + ");\nconsole.log('Après création dune tortue, voici les totos:',totos);\n";
};

Blockly.JavaScript['choisir_tortue'] = function(block) {
  var code, statements, text_n;
  text_n = block.getFieldValue('N');
  statements = Blockly.JavaScript.statementToCode(block, 'DO');
  return code = "toto = " + text_n + ";\n" + statements;
};

Blockly.JavaScript['choisir_tortue_var'] = function(block) {
  var code, statements, value_name;
  value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  statements = Blockly.JavaScript.statementToCode(block, 'DO');
  return code = "toto = " + value_name + ";\n" + statements;
};

Blockly.JavaScript['distance_avec_tortue_var'] = function(block) {
  var code, value_name;
  value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  code = "totos[toto].distance(totos[" + value_name + "])";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['tourner_vers_tortue_var'] = function(block) {
  var code, value_name;
  value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  return code = 'totos[toto].azimuth(totos[' + value_name + ']);\n';
};

Blockly.JavaScript['costume_suivant'] = function(block) {
  var code;
  return code = 'totos[toto].costume_suivant();\n';
};

Blockly.JavaScript['costume_pred'] = function(block) {
  var code;
  return code = 'totos[toto].costume_pred();\n';
};

Blockly.JavaScript['costume'] = function(block) {
  var code, dropdown_cid;
  dropdown_cid = block.getFieldValue('CID');
  return code = 'totos[toto].avatar(' + dropdown_cid + ');\n';
};

Blockly.JavaScript['repeter_doucement'] = function(block) {
  var code, statements, times;
  times = Blockly.JavaScript.valueToCode(block, 'TIMES', Blockly.JavaScript.ORDER_ATOMIC);
  statements = Blockly.JavaScript.statementToCode(block, 'DO');
  return code = "for (var i = 0; i < " + times + "; i++) { setTimeout(function(){" + statements + "}, 1000);$('#graphique').show(100);}\n";
};
