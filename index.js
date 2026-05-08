(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,736,1103],[738,0,673,1200],[0,1105,405,371]]},
		{name:"index_atlas_2", frames: [[738,0,736,1103],[0,0,736,1307]]},
		{name:"index_atlas_3", frames: [[0,0,1152,2048],[1154,0,736,1313]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.a = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.chinola = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.choco = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fresa = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.naranja = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NewProject20 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pistacho = function() {
	this.initialize(ss["index_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yelato = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Yelatos", "bold 40px 'Tw Cen MT Condensed'", "#995935");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(104.3,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#000000"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208.7,59.2);


(lib.Símbolo11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.choco();
	this.instance.setTransform(0,1364.9,1.8545,2.4925,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(0,0,2749.2,1364.9), null);


(lib.servicios = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Servicios", "bold 40px 'Tw Cen MT Condensed'", "#995935");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 211;
	this.text.parent = this;
	this.text.setTransform(107.35,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#000000"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214.7,73.3);


(lib.nosotros = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Sobre nosotros", "bold 40px 'Tw Cen MT Condensed'", "#995935");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 252;
	this.text.parent = this;
	this.text.setTransform(127.95,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#000000"},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,255.9,68.1);


(lib.inicio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Inicio", "bold 40px 'Tw Cen MT Condensed'", "#995935");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 252;
	this.text.parent = this;
	this.text.setTransform(127.95,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#000000"},0).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,255.9,68.1);


(lib.contenedors = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.a();
	this.instance.setTransform(0,506.4,0.4396,0.8424,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.contenedors, new cjs.Rectangle(0,0,1725.3,506.4), null);


(lib.contacto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Contacto", "bold 40px 'Tw Cen MT Condensed'", "#995935");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 252;
	this.text.parent = this;
	this.text.setTransform(127.95,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#000000"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,255.9,68.1);


(lib.Símbolo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.pistacho();
	this.instance.setTransform(6957.1,54,0.6896,1.3413,89.8762);

	this.instance_1 = new lib.naranja();
	this.instance_1.setTransform(3496,565,0.7385,1.4401,-90);

	this.instance_2 = new lib.pistacho();
	this.instance_2.setTransform(1714.2,156.65,0.6763,1.3043,90.1884);

	this.instance_3 = new lib.naranja();
	this.instance_3.setTransform(3525.4,165.3,0.7522,1.5065,90.4219);

	this.instance_4 = new lib.chinola();
	this.instance_4.setTransform(8620.45,84,0.6534,1.5344,89.9994);

	this.instance_5 = new lib.choco();
	this.instance_5.setTransform(8632.85,0,0.8444,1.5457,90);

	this.instance_6 = new lib.contenedors();
	this.instance_6.setTransform(7790.6,336.2,1,1,0,0,0,862.6,253.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(0,0,8653.3,671.5), null);


(lib.Símbolo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.naranja();
	this.instance.setTransform(5200,565,0.7385,1.4401,-90);

	this.instance_1 = new lib.pistacho();
	this.instance_1.setTransform(1714.2,156.65,0.6763,1.3043,90.1884);

	this.instance_2 = new lib.naranja();
	this.instance_2.setTransform(3525.4,165.3,0.7522,1.5065,90.4219);

	this.instance_3 = new lib.chinola();
	this.instance_3.setTransform(8620.45,84,0.6534,1.5344,89.9994);

	this.instance_4 = new lib.choco();
	this.instance_4.setTransform(8632.85,0,0.8444,1.5457,90);

	this.instance_5 = new lib.contenedors();
	this.instance_5.setTransform(7790.6,336.2,1,1,0,0,0,862.6,253.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(0,0,8653.3,671.5), null);


(lib.Símbolo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.pistacho();
	this.instance.setTransform(1714.2,73.65,0.6763,1.3043,90.1884);

	this.instance_1 = new lib.naranja();
	this.instance_1.setTransform(3525.4,82.3,0.7522,1.5065,90.4219);

	this.instance_2 = new lib.chinola();
	this.instance_2.setTransform(8620.45,0,0.6534,1.5344,89.9994);

	this.instance_3 = new lib.choco();
	this.instance_3.setTransform(5220.85,0,0.8444,1.5457,90);

	this.instance_4 = new lib.contenedors();
	this.instance_4.setTransform(4387.5,335.2,1,1,0,0,0,862.6,253.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,8620.5,621.5), null);


(lib.Símbolo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.pistacho();
	this.instance.setTransform(1714.2,73.65,0.6763,1.3043,90.1884);

	this.instance_1 = new lib.naranja();
	this.instance_1.setTransform(3525.4,82.3,0.7522,1.5065,90.4219);

	this.instance_2 = new lib.chinola();
	this.instance_2.setTransform(8620.45,0,0.6534,1.5344,89.9994);

	this.instance_3 = new lib.choco();
	this.instance_3.setTransform(5220.85,0,0.8444,1.5457,90);

	this.instance_4 = new lib.contenedors();
	this.instance_4.setTransform(4387.6,335.2,1,1,0,0,0,862.6,253.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,8620.5,621.5), null);


(lib.Símbolo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.pistacho();
	this.instance.setTransform(1714.2,73.65,0.6763,1.3043,90.1884);

	this.instance_1 = new lib.naranja();
	this.instance_1.setTransform(3525.4,82.3,0.7522,1.5065,90.4219);

	this.instance_2 = new lib.chinola();
	this.instance_2.setTransform(8620.45,0,0.6534,1.5344,89.9994);

	this.instance_3 = new lib.choco();
	this.instance_3.setTransform(6927.85,38,0.8444,1.5457,90);

	this.instance_4 = new lib.contenedors();
	this.instance_4.setTransform(4387.6,335.2,1,1,0,0,0,862.6,253.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,8620.5,659.5), null);


(lib.heladoprinci = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiFoAlgMAAAhK/MELRAAAMAAABK/g");
	mask.setTransform(-851.55,212.3);

	// IMAGENES
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(785.2,247.8,1,1,0,0,0,4310.2,329.8);

	this.instance_1 = new lib.Símbolo3();
	this.instance_1.setTransform(785.2,228.8,1,1,0,0,0,4310.2,310.8);
	this.instance_1._off = true;

	this.instance_2 = new lib.Símbolo4();
	this.instance_2.setTransform(-2613.8,310.8,1,1,0,0,0,4310.2,310.8);
	this.instance_2._off = true;

	this.instance_3 = new lib.Símbolo5();
	this.instance_3.setTransform(-902.4,252.8,1,1,0,0,0,4326.6,335.8);
	this.instance_3._off = true;

	this.instance_4 = new lib.Símbolo6();
	this.instance_4.setTransform(-902.4,252.8,1,1,0,0,0,4326.6,335.8);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:329.7,y:247.7},0).wait(17).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(1).to({regY:310.7,y:228.7},0).wait(18).to({_off:true},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(1).to({regY:310.7,y:310.7},0).wait(18).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).wait(1).to({regY:335.7,y:252.7},0).wait(18).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6924,-83,12019.5,704.5);


(lib.Símbolo10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.fresa();
	this.instance.setTransform(8942.95,1883.95,1.5991,1.6053,-90);

	this.instance_1 = new lib.pistacho();
	this.instance_1.setTransform(7805.95,762,1.3083,1.5941,90);

	this.instance_2 = new lib.choco();
	this.instance_2.setTransform(3498.95,579,2.3456,1.2771);

	this.instance_3 = new lib.chinola();
	this.instance_3.setTransform(1286.95,0,3.1114,2.1136);

	this.instance_4 = new lib.heladoprinci();
	this.instance_4.setTransform(2569.45,1392.6,1,1.9917,0,0,0,862.6,253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo10, new cjs.Rectangle(-1818.1,0,12859.300000000001,2331.3), null);


(lib.Símbolo9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.fresa();
	this.instance.setTransform(8943.4,1883.95,1.5991,1.6053,-90);

	this.instance_1 = new lib.pistacho();
	this.instance_1.setTransform(7806.4,762,1.3083,1.5941,90);

	this.instance_2 = new lib.choco();
	this.instance_2.setTransform(3499.4,579,2.3456,1.2771);

	this.instance_3 = new lib.chinola();
	this.instance_3.setTransform(1287.4,0,3.1114,2.1136);

	this.instance_4 = new lib.heladoprinci();
	this.instance_4.setTransform(2569.45,1392.6,1,1.9917,0,0,0,862.6,253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(-1818.1,0,12859.7,2331.3), null);


(lib.Símbolo7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.fresa();
	this.instance.setTransform(8943.65,1883.95,1.5991,1.6053,-90);

	this.instance_1 = new lib.pistacho();
	this.instance_1.setTransform(7806.65,762,1.3083,1.5941,90);

	this.instance_2 = new lib.choco();
	this.instance_2.setTransform(3987.65,556,2.3456,1.2771);

	this.instance_3 = new lib.chinola();
	this.instance_3.setTransform(1697.65,0,3.1114,2.1136);

	this.instance_4 = new lib.heladoprinci();
	this.instance_4.setTransform(2569.45,1393.4,1,1.9917,0,0,0,862.6,253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(-1818.1,0,12860,2331.3), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.inicio.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('index.html', '_self');
		});
		_this.nosotros.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('Sobre nosotros.html', '_self');
		});
		_this.servicios.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('Servicios.html', '_self');
		});
		_this.yelato.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('Yelato.html', '_self');
		});
		_this.contacto.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('contacto.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(112));

	// TODO
	this.yelato = new lib.yelato();
	this.yelato.name = "yelato";
	this.yelato.setTransform(1216.05,96.05,1,1,0,0,0,104.3,29.6);
	new cjs.ButtonHelper(this.yelato, 0, 1, 1);

	this.servicios = new lib.servicios();
	this.servicios.name = "servicios";
	this.servicios.setTransform(1004.45,103.05,1,1,0,0,0,107.4,36.6);
	new cjs.ButtonHelper(this.servicios, 0, 1, 1);

	this.contacto = new lib.contacto();
	this.contacto.name = "contacto";
	this.contacto.setTransform(1422.3,100.45,1,1,0,0,0,128,34);
	new cjs.ButtonHelper(this.contacto, 0, 1, 1);

	this.nosotros = new lib.nosotros();
	this.nosotros.name = "nosotros";
	this.nosotros.setTransform(760.9,100.45,1,1,0,0,0,128,34);
	new cjs.ButtonHelper(this.nosotros, 0, 1, 2, false, new lib.nosotros(), 3);

	this.inicio = new lib.inicio();
	this.inicio.name = "inicio";
	this.inicio.setTransform(527.05,100.45,1,1,0,0,0,128,34);
	new cjs.ButtonHelper(this.inicio, 0, 1, 2, false, new lib.inicio(), 3);

	this.text = new cjs.Text("Abiertos de Lun/Vie -9:00 AM -11:30 PM", "40px 'Tw Cen MT Condensed'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 739;
	this.text.parent = this;
	this.text.setTransform(874.6,4.1);

	this.instance = new lib.NewProject20();
	this.instance.setTransform(27,50,0.3839,0.2898);

	this.text_1 = new cjs.Text("YELATO", "250px 'Super Creamy'", "#003300");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 309;
	this.text_1.lineWidth = 875;
	this.text_1.parent = this;
	this.text_1.setTransform(838.45,287.2,1,0.7934);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("EiHcAJWIAAysMEO5AAAIAASsg");
	this.shape.setTransform(831.075,101.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_1},{t:this.instance},{t:this.text},{t:this.inicio},{t:this.nosotros},{t:this.contacto},{t:this.servicios},{t:this.yelato}]}).wait(112));

	// IMAGENHELADO
	this.instance_1 = new lib.heladoprinci();
	this.instance_1.setTransform(2569.45,461.7,1,1.9917,0,0,0,862.6,252);
	this.instance_1.alpha = 0.7813;

	this.instance_2 = new lib.Símbolo7();
	this.instance_2.setTransform(2787.65,1958.6,1,1,0,0,0,4611.9,1165.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Símbolo11();
	this.instance_3.setTransform(678.6,462.5,1,1,0,0,0,1374.6,682.5);
	this.instance_3.alpha = 0.7813;
	this.instance_3._off = true;

	this.instance_4 = new lib.Símbolo9();
	this.instance_4.setTransform(-1235.7,394.6,1,1,0,0,0,4611.7,1165.6);
	this.instance_4.alpha = 0.7813;
	this.instance_4._off = true;

	this.instance_5 = new lib.Símbolo10();
	this.instance_5.setTransform(-4333.2,1249.35,1,1,0,0,0,4611.5,1165.6);
	this.instance_5.alpha = 0.7813;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-851.5,regY:212.3,x:933.1,y:379.8,alpha:0.78},0).wait(1).to({x:1010.85,y:376.9},0).wait(1).to({x:1088.6,y:374.05},0).wait(1).to({x:1166.35,y:371.15},0).wait(1).to({x:1244.1,y:368.3},0).wait(1).to({x:1321.9,y:365.4},0).wait(1).to({x:1399.65,y:362.55},0).wait(1).to({x:1477.4,y:359.65},0).wait(1).to({x:1555.15,y:356.8},0).wait(1).to({x:1632.9,y:353.9},0).wait(1).to({x:1710.65,y:351.05},0).wait(1).to({x:1788.45,y:348.15},0).wait(1).to({x:1866.2,y:345.3},0).wait(1).to({x:1943.95,y:342.4},0).wait(1).to({x:2021.7,y:339.55},0).wait(1).to({x:2099.45,y:336.65},0).wait(1).to({x:2177.2,y:333.8},0).wait(1).to({x:2255,y:330.9},0).wait(1).to({x:2332.75,y:328.05},0).wait(1).to({x:2410.5,y:325.15},0).wait(1).to({x:2488.25,y:322.25},0).wait(1).to({x:2566,y:319.4},0).wait(1).to({x:2643.8,y:316.5},0).to({_off:true},1).wait(88));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({regX:5520.9,x:3695.45,y:1917.75,alpha:0.989},0).wait(1).to({x:3694.2,y:1876.95,alpha:0.978},0).wait(1).to({x:3692.95,y:1836.1,alpha:0.967},0).wait(1).to({x:3691.7,y:1795.3,alpha:0.956},0).wait(1).to({x:3690.45,y:1754.5,alpha:0.945},0).wait(1).to({x:3689.2,y:1713.65,alpha:0.934},0).wait(1).to({x:3688,y:1672.85,alpha:0.923},0).wait(1).to({x:3686.75,y:1632.05,alpha:0.912},0).wait(1).to({x:3685.5,y:1591.2,alpha:0.901},0).wait(1).to({x:3684.25,y:1550.4,alpha:0.89},0).wait(1).to({x:3683,y:1509.6,alpha:0.879},0).wait(1).to({x:3681.75,y:1468.75,alpha:0.868},0).wait(1).to({x:3680.5,y:1427.95,alpha:0.857},0).wait(1).to({x:3679.3,y:1387.15,alpha:0.846},0).wait(1).to({x:3678.05,y:1346.3,alpha:0.835},0).wait(1).to({x:3676.8,y:1305.5,alpha:0.824},0).wait(1).to({x:3675.55,y:1264.7,alpha:0.813},0).wait(1).to({x:3674.3,y:1223.85,alpha:0.802},0).wait(1).to({x:3673.05,y:1183.05,alpha:0.791},0).wait(1).to({x:3671.8,y:1142.25,alpha:0.78},0).to({_off:true},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({_off:false},0).wait(1).to({x:559.9,alpha:0.78},0).wait(1).to({x:441.2},0).wait(1).to({x:322.45},0).wait(1).to({x:203.75},0).wait(1).to({x:85},0).wait(1).to({x:-33.7},0).wait(1).to({x:-152.45},0).wait(1).to({x:-271.15},0).wait(1).to({x:-389.9},0).wait(1).to({x:-508.6},0).wait(1).to({x:-627.35},0).wait(1).to({x:-746.05},0).wait(1).to({x:-864.8},0).wait(1).to({x:-983.5},0).wait(1).to({x:-1102.25},0).wait(1).to({x:-1220.95},0).wait(1).to({x:-1339.7},0).wait(1).to({x:-1458.4},0).wait(1).to({x:-1577.15},0).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).wait(1).to({regX:5520.8,x:-321.7,y:346.85,alpha:0.78},0).wait(1).to({x:-316.85,y:299.1},0).wait(1).to({x:-312,y:251.35},0).wait(1).to({x:-307.15,y:203.6},0).wait(1).to({x:-302.3,y:155.85},0).wait(1).to({x:-297.45,y:108.1},0).wait(1).to({x:-292.6,y:60.35},0).wait(1).to({x:-287.75,y:12.6},0).wait(1).to({x:-282.9,y:-35.15},0).wait(1).to({x:-278.05,y:-82.95},0).wait(1).to({x:-273.2,y:-130.7},0).wait(1).to({x:-268.35,y:-178.45},0).wait(1).to({x:-263.5,y:-226.2},0).wait(1).to({x:-258.65,y:-273.95},0).wait(1).to({x:-253.8,y:-321.7},0).wait(1).to({x:-248.95,y:-369.45},0).wait(1).to({x:-244.1,y:-417.2},0).wait(1).to({x:-239.25,y:-464.95},0).wait(1).to({x:-234.4,y:-512.7},0).wait(1).to({x:-229.55,y:-560.5},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(86).to({_off:false},0).wait(1).to({regX:5520.6,x:-3424.1,y:1216.4,alpha:0.78},0).wait(1).to({y:1183.45},0).wait(1).to({y:1150.55},0).wait(1).to({y:1117.65},0).wait(1).to({y:1084.7},0).wait(1).to({y:1051.75},0).wait(1).to({y:1018.85},0).wait(1).to({y:985.9},0).wait(1).to({y:952.95},0).wait(1).to({y:920.05},0).wait(1).to({y:887.1},0).wait(1).to({y:854.15},0).wait(1).to({y:821.25},0).wait(1).to({y:788.3},0).wait(1).to({y:755.35},0).wait(1).to({y:722.45},0).wait(1).to({y:689.5},0).wait(1).to({y:656.55},0).wait(1).to({y:623.65},0).wait(1).to({y:590.7},0).wait(1).to({y:557.75},0).wait(1).to({y:524.85},0).wait(1).to({y:491.9},0).wait(1).to({y:458.95},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-9914.8,-1329.6,19132.4,4453.9);
// library properties:
lib.properties = {
	id: 'BCDAD7B7DBC7E84E902AFDF9A5256DC5',
	width: 1696,
	height: 793,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1778203375887", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png?1778203375888", id:"index_atlas_2"},
		{src:"images/index_atlas_3.png?1778203375889", id:"index_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BCDAD7B7DBC7E84E902AFDF9A5256DC5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;