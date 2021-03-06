###
Sophus
un langage de programmation inspiré par COBOL
auteurs:
	Alain Busser
	Patrick Raffinat
	Florian Tobé
©2013
ce logiciel est libre sous license MIT

###

#surcharges de méthodes JavaScript (au secours!)

Boolean::toLocaleString = ->
 if this.valueOf() then " c'est vrai " else " c'est faux "
Number::foisFaire = (fn) -> do fn for i in [0...this]
Number::tantQuePlusGrandQue = (variable,fn) -> do fn while variable.valeur<this
Number::tantQuePlusPetitQue = (variable,fn) -> do fn while variable.valeur>this
Array::empiler = (machin) -> this.push machin
Array::toLocaleString = "["+(x.toLocaleString() for x in this)+"]"
estTableau = (o) ->
    if o.valeur? and Array.isArray o.valeur
        true
    else
        Array.isArray o
taille = (o) ->
    if o.valeur?
        o.valeur.length
    else
        o.length


#utilitaires

décimales = "décimales"
près = "près"
à = "à"
de = "de"
par = "par"
dans = "dans"
#fois = "fois"
sinon = "sinon"
pourcents = "pourcents"
pourcent = "pourcents"
auCarré = "au carré"
auCube = "au cube"
aLaPuissance = "à la puissance"
[un,deux,trois,quatre,cinq,six,sept,huit,neuf,dix] = [1..10]
[demis,tiers,quarts,cinquièmes,sixièmes,septièmes,huitièmes,neuvièmes,dixièmes] = ["demis","tiers","quarts","cinquièmes","sixièmes","septièmes","huitièmes","neuvièmes","dixièmes"]
[demi,tiers,quart,cinquième,sixième,septième,huitième,neuvième,dixième] = ["demis","tiers","quarts","cinquièmes","sixièmes","septièmes","huitièmes","neuvièmes","dixièmes"]
π = Math.PI

#entrées-sorties
#pour savoir si un objet est de type "Variable", on regarde s'il possède une valeur: 
#Si oui on affiche sa valeur, sinon on l'affiche lui-même

montrer = (o) =>
    if o.valeur?
        if Array.isArray o.valeur 
            alert "["+(" "+x.toLocaleString()+" " for x in o.valeur)+"]"
        else
            alert o.valeur.toLocaleString()
    else
        if (x for x in o).length > 1
            alert "["+(" "+x.toLocaleString()+" " for x in o)+"]"
        else
            alert o.toLocaleString()
entrer = (o) => o.valeur = prompt "Quelle valeur donner à cette variable ?"

#le coup de bol de COBOL:
#objet "variable", qui peut varier (il est fait pour ça)

class Variable
    constructor: (@valeur=0) ->
    toString: -> @valeur.toLocaleString()
    estPositif: -> @valeur>0
    estNégatif: -> @valeur<0
    estNul: -> @valeur is 0
    estPair: -> @valeur%2 is 0
    estImpair: -> @valeur%2 is 1

mettreDans = (o,bidule) => 
    o.valeur = bidule.valeur ? bidule
    null
    
mettre = (bidule, dans="dans",o) => 
    o.valeur = bidule.valeur ? bidule
    null
    
carré = (nombre) -> nombre * nombre
cube = (nombre) -> carré(nombre)*nombre
racine = (nombre) -> Math.sqrt(nombre)
sinus = (nombre) -> Math.sin(nombre*π/180)
cosinus = (nombre) -> Math.cos(nombre*π/180)
tangente = (nombre) -> sinus(nombre)/cosinus(nombre)
sin = (x) -> Math.sin x
cos = (x) -> Math.cos x
tan = (x) -> Math.tan x

éleverAuCarré = (o) => o.valeur *= o.valeur
éleverAuCube = (o) => o.valeur *= o.valeur * o.valeur
inverser = (o) => o.valeur = 1/o.valeur
extraireLaRacineDe = (o) => o.valeur = Math.sqrt(o.valeur)

élever = (o,a,exposant=2) =>
    switch a
        when "à la puissance"
            o.valeur = Math.pow(o.valeur, exposant.valeur ? exposant)
        when "au carré"
            o.valeur *= o.valeur
        when "au cube"
            o.valeur *= o.valeur * o.valeur
        else
           alert "Je veux bien élever cette variable mais à quelle puissance ?"


arrondir = (o,a="",epsilon=1,ordre="décimales") => 
    if a is ""
        o.valeur = Math.round(o.valeur)
    if a is "à"
        if ordre is "décimales"
            o.valeur = Math.round(o.valeur*Math.pow(10,epsilon))/Math.pow(10,epsilon)
        if ordre is "près"
            o.valeur = Math.round(o.valeur/epsilon)*epsilon

tronquer = (o,a="",epsilon=1,ordre="décimales") => 
    if a is ""
        o.valeur = Math.floor(o.valeur)
    if a is "à"
        if ordre is "décimales"
            o.valeur = Math.floor(o.valeur*Math.pow(10,epsilon))/Math.pow(10,epsilon)
        if ordre is "près"
            o.valeur = Math.floor(o.valeur/epsilon)*epsilon
            
doubler = (o) =>
	if Array.isArray o.valeur
		o.valeur = (2*x for x in o.valeur)
	else
		o.valeur *= 2
tripler = (o) =>
	if Array.isArray o.valeur
		o.valeur = (3*x for x in o.valeur)
	else
		o.valeur *= 3
quadrupler = (o) =>
	if Array.isArray o.valeur
		o.valeur = (4*x for x in o.valeur)
	else
		o.valeur *= 4
quintupler = (o) =>
	if Array.isArray o.valeur
		o.valeur = (5*x for x in o.valeur)
	else
		o.valeur *= 5
sextupler = (o) =>
	if Array.isArray o.valeur
		o.valeur = (6*x for x in o.valeur)
	else
		o.valeur *= 6
octupler = (o) =>
	if Array.isArray o.valeur
		o.valeur = (8*x for x in o.valeur)
	else
		o.valeur *= 8
décupler = (o) =>
	if Array.isArray o.valeur
		o.valeur = (10*x for x in o.valeur)
	else
		o.valeur *= 10
centupler = (o) =>
	if Array.isArray o.valeur
		o.valeur = (100*x for x in o.valeur)
	else
		o.valeur *= 100

incrémenter = (o) => 
    o.valeur += 1
    null

décrémenter = (o) => 
    o.valeur -= 1
    null

augmenter = (o,de,chouia,mode="") => 
	if estTableau o
		if mode is ""
			if estTableau chouia
				if (taille chouia) is (taille o)
					o.valeur = o.valeur.map (courant,place) -> courant+(chouia.valeur ? chouia)[place]
				else
					alert "erreur de dimension"
	else
		if de is "de"
				switch mode
					when ""
						o.valeur += chouia.valeur ? chouia
					when "demis"
						o.valeur *= (1+(chouia.valeur ? chouia)/2)
					when "tiers"
						o.valeur *= (1+(chouia.valeur ? chouia)/3)
					when "quarts"
						o.valeur *= (1+(chouia.valeur ? chouia)/4)
					when "cinquièmes"
						o.valeur *= (1+(chouia.valeur ? chouia)/5)
					when "sixièmes"
						o.valeur *= (1+(chouia.valeur ? chouia)/6)
					when "septièmes"
						o.valeur *= (1+(chouia.valeur ? chouia)/7)
					when "huitièmes"
						o.valeur *= (1+(chouia.valeur ? chouia)/8)
					when "neuvièmes"
						o.valeur *= (1+(chouia.valeur ? chouia)/9)
					when "dixièmes"
						o.valeur *= (1+(chouia.valeur ? chouia)/10)
					when "pourcents"
						o.valeur *= (1+(chouia.valeur ? chouia)/100)
			else
				alert "Je veux bien augmenter cette variable mais de combien ?"
	null

diminuer = (o,de,chouia,mode="") => 
	if estTableau o
		if mode is ""
			if estTableau chouia
				if (taille chouia) is (taille o)
					o.valeur = o.valeur.map (courant,place) -> courant-(chouia.valeur ? chouia)[place]
				else
					alert "erreur de dimension"
	else
		if de is "de"
				switch mode
					when ""
						o.valeur -= chouia.valeur ? chouia
					when "demis"
						o.valeur *= (1-(chouia.valeur ? chouia)/2)
					when "tiers"
						o.valeur *= (1-(chouia.valeur ? chouia)/3)
					when "quarts"
						o.valeur *= (1-(chouia.valeur ? chouia)/4)
					when "cinquièmes"
						o.valeur *= (1-(chouia.valeur ? chouia)/5)
					when "sixièmes"
						o.valeur *= (1-(chouia.valeur ? chouia)/6)
					when "septièmes"
						o.valeur *= (1-(chouia.valeur ? chouia)/7)
					when "huitièmes"
						o.valeur *= (1-(chouia.valeur ? chouia)/8)
					when "neuvièmes"
						o.valeur *= (1-(chouia.valeur ? chouia)/9)
					when "dixièmes"
						o.valeur *= (1-(chouia.valeur ? chouia)/10)
					when "pourcents"
						o.valeur *= (1-(chouia.valeur ? chouia)/100)
			else
				alert "Je veux bien diminuer cette variable mais de combien ?"
	null


multiplier = (o,par="par",facteur,mode="") =>
	if estTableau o
		o.valeur = o.valeur.map (courant) -> courant *= facteur.valeur ? facteur
	else
		if par is "par"
			switch mode
				when ""
					o.valeur *= facteur.valeur ? facteur
				when "demis"
					o.valeur *= (facteur.valeur ? facteur)/2
				when "tiers"
					o.valeur *= (facteur.valeur ? facteur)/3
				when "quarts"
					o.valeur *= (facteur.valeur ? facteur)/4
				when "cinquièmes"
					o.valeur *= (facteur.valeur ? facteur)/5
				when "sixièmes"
					o.valeur *= (facteur.valeur ? facteur)/6
				when "septièmes"
					o.valeur *= (facteur.valeur ? facteur)/7
				when "huitièmes"
					o.valeur *= (facteur.valeur ? facteur)/8
				when "neuvièmes"
					o.valeur *= (facteur.valeur ? facteur)/9
				when "dixièmes"
					o.valeur *= (facteur.valeur ? facteur)/10
				when "pourcents"
					o.valeur *= (facteur.valeur ? facteur)/100
				else
					alert "erreur opérateur"
		else
			alert "Je veux bien multiplier cette variable mais par quoi ?"

diviser = (o,par="par",facteur,mode="") =>
	if estTableau o
		o.valeur = o.valeur.map (courant) -> courant /= facteur.valeur ? facteur
	else
		if par is "par"
			switch mode
				when ""
					o.valeur /= facteur.valeur ? facteur
				when "demis"
					o.valeur /= (facteur.valeur ? facteur)/2
				when "tiers"
					o.valeur /= (facteur.valeur ? facteur)/3
				when "quarts"
					o.valeur /= (facteur.valeur ? facteur)/4
				when "cinquièmes"
					o.valeur /= (facteur.valeur ? facteur)/5
				when "sixièmes"
					o.valeur /= (facteur.valeur ? facteur)/6
				when "septièmes"
					o.valeur /= (facteur.valeur ? facteur)/7
				when "huitièmes"
					o.valeur /= (facteur.valeur ? facteur)/8
				when "neuvièmes"
					o.valeur /= (facteur.valeur ? facteur)/9
				when "dixièmes"
					o.valeur /= (facteur.valeur ? facteur)/10
				else
					alert "erreur opérateur"
		else
			alert "Je veux bien diviser cette variable mais par quoi ?"



#tests et boucles en lambda-calcul
si = (booleen,fonction) -> 
    do fonction if booleen
    null
aMoinsQue = (booleen,fonction) -> 
    do fonction unless booleen
    null
    
