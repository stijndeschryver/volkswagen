(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.IMG_BG = function() {
	this.initialize(img.IMG_BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2261,812);


(lib.IMG_Car = function() {
	this.initialize(img.IMG_Car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,523,326);


(lib.IMG_Rim = function() {
	this.initialize(img.IMG_Rim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,166);


(lib.VEC_VW_Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#001E50").s().p("Ai1C2QhLhLAAhrQAAhqBLhKQBLhMBqAAQBrAABKBMQBMBKAABqQAABrhMBLQhKBLhrAAQhqAAhLhLgAjiAAQAABdBDBEQBCBCBdAAQBcAABDhCQBDhEABhdQAAgkgNgkIiED/QgDAHgGgBQgFABgDgHIg/iJQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAgCADIg8CJQgFAHgFgBQgFABgDgHIiEj/QgNAiAAAmgAAUACQADABAEAFIArBgQABABAAAAQAAABABABQAAAAAAAAQABABAAAAQACgBABgDIBzjdQgegyg1gfIhRCxQgDADgDABIgpAAQgFgBgDgDIhQixQg3AfgdAyIBzDdIABABIADABIABgCIAshgQADgFAFgBgAhJjVIBGCYIABACQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAgBIBHiYQgkgNgkAAQgkAAglANg");
	this.shape.setTransform(25.725,25.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.5,51.4);


(lib.VEC_Radial_Gradient = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.549)","rgba(0,0,0,0)"],[0.216,1],0.1,0,0,0.1,0,25).s().p("AiwCxQhJhJAAhoQAAhmBJhKQBKhJBmAAQBnAABKBJQBJBKAABmQAABohJBJQhKBJhnAAQhmAAhKhJg");
	this.shape.setTransform(25,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.VEC_Bottom_Shadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AtdDRQn4gTi1gZQiCgRCFgrQBdgdCbgaQg9ACgkgVQglgXBbgPQNDiVFHglQADgDGFgKIGFgJIPvgGQgDA9gIBCQgPCFgYAeQnHBClOAgQlEAgmKARQiNAGizAAQkEAAlQgNg");
	var mask_graphics_1 = new cjs.Graphics().p("Aj+haIH6AMIA3ASQAyAWgWASQgXASlIAwIlFAtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:161.1435,y:25.9911}).wait(1).to({graphics:mask_graphics_1,x:356.8241,y:9.075}).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(47,59,73,0.4)").s().p("Ay1DkQn3gUi1gYQiDgSCFgqQBdgeCcgaQg+ADgjgWQgmgXBbgQQNEiTFGgmQADgDGGgKIGFgJIRJgrIH7AMIA3ASQAyAWgXASQgWASlJAwIlFAtIgMA4QgRA8gYAeQnIBClNAhQlFAfmJASQiOAGizAAQkDAAlRgNg");
	this.shape.setTransform(195.4926,24.1161);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,391,48.3);


(lib.Text_CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Aj/BeIAAiyIH/AAIAACyg");
	var mask_graphics_1 = new cjs.Graphics().p("Aj/BZIAAixIH/AAIAACxg");
	var mask_graphics_2 = new cjs.Graphics().p("Aj/BeIAAiyIH/AAIAACyg");
	var mask_graphics_3 = new cjs.Graphics().p("Aj/BZIAAixIH/AAIAACxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:19.75,y:9.35}).wait(1).to({graphics:mask_graphics_1,x:70.45,y:9.8}).wait(1).to({graphics:mask_graphics_2,x:19.75,y:9.35}).wait(1).to({graphics:mask_graphics_3,x:70.45,y:9.8}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#001E50").s().p("AgiAiQgLgOAAgUQAAgSALgPQAMgOAWAAQAXAAAMAOQALAPAAASQAAAUgLAOQgMAOgXAAQgWAAgMgOgAgPgUQgGAIAAAMQAAAOAGAHQAGAIAJAAQAKAAAGgIQAFgHAAgOQAAgMgFgIQgGgHgKAAQgJAAgGAHg");
	this.shape.setTransform(73.175,10.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#001E50").s().p("AgMA+IAAhIIgNAAIAAgRIANAAIAAgGQAAgOAFgGQAFgIATAAIAEAAIAFABIAAATIgHAAQgFgBgBADQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIAAAIIAPAAIAAARIgPAAIAABIg");
	this.shape_1.setTransform(65.125,8.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#001E50").s().p("AARAuIAAg2QAAgHgCgEQgDgHgLAAQgLAAgEAKQgCAGAAAIIAAAwIgYAAIAAhZIAXAAIAAANQAFgHADgDQAIgFAKAAQAOAAAJAHQAJAHAAARIAAA8g");
	this.shape_2.setTransform(57.2,10.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#001E50").s().p("AgLA+IAAhaIAXAAIAABagAgLgnIAAgWIAXAAIAAAWg");
	this.shape_3.setTransform(49.65,8.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#001E50").s().p("AgZAuIAAhZIAWAAIAAAQQAFgKAEgDQAGgFALAAIABAAIACAAIAAAYIgEAAIgDAAQgOAAgFAJQgCAFAAAKIAAArg");
	this.shape_4.setTransform(39.725,10.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#001E50").s().p("AgdAlQgNgMAAgZQAAgWAMgNQAMgMASAAQALAAAJAEQAJAFAGAJQAGAIABAKQABAGAAAMIg9AAQAAANAJAFQAEAEAGAAQAIAAAEgEQADgCACgFIAYAAQgBAJgIAIQgLANgVAAQgQAAgOgLgAASgJQAAgIgFgFQgFgGgIAAQgHABgFAFQgEAFgBAIIAjAAIAAAAg");
	this.shape_5.setTransform(31.2333,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#001E50").s().p("AgdAlQgNgMAAgZQAAgWAMgNQAMgMASAAQALAAAJAEQAJAFAGAJQAGAIABAKQABAGAAAMIg9AAQAAANAJAFQAEAEAGAAQAIAAAEgEQADgCACgFIAYAAQgBAJgIAIQgLANgVAAQgQAAgOgLgAASgJQAAgIgFgFQgFgGgIAAQgHABgFAFQgEAFgBAIIAjAAIAAAAg");
	this.shape_6.setTransform(21.7833,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#001E50").s().p("AAoAuIAAg4QABgGgCgDQgEgGgHAAQgLAAgEAIQgBAEAAAGIAAA1IgXAAIAAg1QAAgIgCgDQgDgHgIAAQgLAAgDAHQgCADAAAIIAAA1IgYAAIAAhZIAXAAIAAANQAFgHAEgDQAGgFAMAAQAKAAAFAEQAFAFADAGQAEgIAIgDQAGgEAKAAQAGAAAFACQAGACAFAGQAEAFABAHIABANIAAA4g");
	this.shape_7.setTransform(9.55,10.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4CC7F4").s().p("AgiAiQgLgOAAgUQAAgSALgPQAMgOAWAAQAXAAAMAOQALAPAAASQAAAUgLAOQgMAOgXAAQgWAAgMgOgAgPgUQgGAIAAAMQAAAOAGAHQAGAIAJAAQAKAAAGgIQAFgHAAgOQAAgMgFgIQgGgHgKAAQgJAAgGAHg");
	this.shape_8.setTransform(73.175,10.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4CC7F4").s().p("AgMA+IAAhIIgNAAIAAgRIANAAIAAgGQAAgOAFgGQAFgIATAAIAEAAIAFABIAAATIgHAAQgFgBgBADQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIAAAIIAPAAIAAARIgPAAIAABIg");
	this.shape_9.setTransform(65.125,8.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4CC7F4").s().p("AARAuIAAg2QAAgHgCgEQgDgHgLAAQgLAAgEAKQgCAGAAAIIAAAwIgYAAIAAhZIAXAAIAAANQAFgHADgDQAIgFAKAAQAOAAAJAHQAJAHAAARIAAA8g");
	this.shape_10.setTransform(57.2,10.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4CC7F4").s().p("AgLA+IAAhaIAXAAIAABagAgLgnIAAgWIAXAAIAAAWg");
	this.shape_11.setTransform(49.65,8.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4CC7F4").s().p("AgZAuIAAhZIAWAAIAAAQQAFgKAEgDQAGgFALAAIABAAIACAAIAAAYIgEAAIgDAAQgOAAgFAJQgCAFAAAKIAAArg");
	this.shape_12.setTransform(39.725,10.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4CC7F4").s().p("AgdAlQgNgMAAgZQAAgWAMgNQAMgMASAAQALAAAJAEQAJAFAGAJQAGAIABAKQABAGAAAMIg9AAQAAANAJAFQAEAEAGAAQAIAAAEgEQADgCACgFIAYAAQgBAJgIAIQgLANgVAAQgQAAgOgLgAASgJQAAgIgFgFQgFgGgIAAQgHABgFAFQgEAFgBAIIAjAAIAAAAg");
	this.shape_13.setTransform(31.2333,10.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4CC7F4").s().p("AgdAlQgNgMAAgZQAAgWAMgNQAMgMASAAQALAAAJAEQAJAFAGAJQAGAIABAKQABAGAAAMIg9AAQAAANAJAFQAEAEAGAAQAIAAAEgEQADgCACgFIAYAAQgBAJgIAIQgLANgVAAQgQAAgOgLgAASgJQAAgIgFgFQgFgGgIAAQgHABgFAFQgEAFgBAIIAjAAIAAAAg");
	this.shape_14.setTransform(21.7833,10.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4CC7F4").s().p("AAoAuIAAg4QABgGgCgDQgEgGgHAAQgLAAgEAIQgBAEAAAGIAAA1IgXAAIAAg1QAAgIgCgDQgDgHgIAAQgLAAgDAHQgCADAAAIIAAA1IgYAAIAAhZIAXAAIAAANQAFgHAEgDQAGgFAMAAQAKAAAFAEQAFAFADAGQAEgIAIgDQAGgEAKAAQAGAAAFACQAGACAFAGQAEAFABAHIABANIAAA4g");
	this.shape_15.setTransform(9.55,10.475);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.9,80.6,17.8);


(lib.Text_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#001E50").s().p("AgfAiQgKgNAAgVQAAgTAKgOQANgPATAAQAVAAAKAMQAKALAAARIgCANIhAAAQAAANAIAIQAIAIAMAAQAPAAAMgIIAHANQgPAKgUAAQgWAAgMgPgAgQgaQgHAHgBAMIAxAAIAAgEQAAgKgGgGQgGgGgMAAQgLAAgGAHg");
	this.shape.setTransform(206.3,16.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#001E50").s().p("AgHBCIAAhbIAPAAIAABbgAgKg2QAAgLAKAAQALAAAAALQAAALgLAAQgKAAAAgLg");
	this.shape_1.setTransform(198.9,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#001E50").s().p("AgLAjIAAg4IgRAAIAAgLIARgEIAAgVIAQAAIAAAVIAYAAIAAAPIgYAAIAAA1QAAALAKAAQAFAAAJgCIAAAOQgKADgIAAQgWAAAAgXg");
	this.shape_2.setTransform(193.1,15.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#001E50").s().p("AgYAjQgMgNAAgWQAAgVAMgNQAMgOAUAAQAOAAAPAHIgFANQgMgFgMAAQgMAAgIALQgGAJAAANQAAAOAGAJQAIALAMAAQAMAAAMgFIAFANQgPAHgOAAQgUAAgMgOg");
	this.shape_3.setTransform(185.225,16.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#001E50").s().p("AghApQgJgHAAgOQAAgcAqAAIAPAAIAAgFQAAgUgUAAQgNAAgNAIIgGgNQAOgKATAAQARAAAJAJQAKAJAAASIAAAoQAAAFAFAAIAGAAIAAANIgKACQgLAAgEgKIAAAAQgOALgQAAQgNAAgIgIgAgZATQAAAPAQAAQANAAALgIIAAgWIgMAAQgcAAAAAPg");
	this.shape_4.setTransform(175.825,16.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#001E50").s().p("AgfAiQgKgNAAgVQAAgTAKgOQANgPATAAQAVAAAKAMQAKALAAARIgCANIhAAAQAAANAIAIQAIAIAMAAQAPAAAMgIIAHANQgPAKgUAAQgWAAgMgPgAgQgaQgHAHgBAMIAxAAIAAgEQAAgKgGgGQgGgGgMAAQgLAAgGAHg");
	this.shape_5.setTransform(165.7,16.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#001E50").s().p("AgMAjIAAg4IgQAAIAAgLIAQgEIAAgVIAQAAIAAAVIAZAAIAAAPIgZAAIAAA1QAAALAKAAQAHAAAIgCIAAAOQgKADgIAAQgXAAAAgXg");
	this.shape_6.setTransform(157.05,15.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#001E50").s().p("AAXAvIAAg3QAAgXgVAAQgLAAgNAJIAABFIgRAAIAAhaIAMAAIACAIIAAAAIANgHQALgEAIAAQAPAAAJAJQAJAJAAARIAAA6g");
	this.shape_7.setTransform(148.325,16.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#001E50").s().p("AgfAiQgKgNAAgVQAAgTAKgOQANgPATAAQAVAAAKAMQAKALAAARIgCANIhAAAQAAANAIAIQAIAIAMAAQAPAAAMgIIAHANQgPAKgUAAQgWAAgMgPgAgQgaQgHAHgBAMIAxAAIAAgEQAAgKgGgGQgGgGgMAAQgLAAgGAHg");
	this.shape_8.setTransform(137.8,16.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#001E50").s().p("AglBBIAAiBIARAAIAABxIA6AAIAAAQg");
	this.shape_9.setTransform(128.275,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#001E50").s().p("AgfAiQgKgNAAgVQAAgTAKgOQAMgPAUAAQAUAAALAMQAKALAAARIgCANIhAAAQAAANAIAIQAIAIAMAAQAPAAAMgIIAHANQgPAKgVAAQgUAAgNgPgAgQgaQgHAHgBAMIAxAAIAAgEQAAgKgGgGQgHgGgLAAQgKAAgHAHg");
	this.shape_10.setTransform(112.9,16.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#001E50").s().p("AghA1QgIgNgBgVQABgUAIgNQALgOATAAQAPAAANAJIABAAIAAgwIARAAIAACEIgNAAIgCgJIAAAAQgQAMgPAAQgTAAgLgPgAgYATQAAAiAZAAQAOAAALgJIAAgxQgLgIgOgBQgZAAAAAhg");
	this.shape_11.setTransform(102.1,14.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#001E50").s().p("AAXAvIAAg3QAAgXgVAAQgLAAgNAJIAABFIgRAAIAAhaIAMAAIACAIIAAAAIANgHQALgEAIAAQAPAAAJAJQAJAJAAARIAAA6g");
	this.shape_12.setTransform(86.825,16.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#001E50").s().p("AghApQgJgHAAgOQAAgcAqAAIAPAAIAAgFQAAgUgUAAQgNAAgNAIIgGgNQAOgKATAAQARAAAJAJQAKAJAAASIAAAoQAAAFAFAAIAGAAIAAANIgKACQgLAAgEgKIAAAAQgOALgQAAQgNAAgIgIgAgZATQAAAPAQAAQANAAALgIIAAgWIgMAAQgcAAAAAPg");
	this.shape_13.setTransform(76.575,16.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#001E50").s().p("AgIAuIgjhZIAAgCIARAAIAaBGIAAAAIAbhGIARAAIAAACIgkBZg");
	this.shape_14.setTransform(66.75,16.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#001E50").s().p("AgLAjIAAg4IgRAAIAAgLIARgEIAAgVIAQAAIAAAVIAYAAIAAAPIgYAAIAAA1QAAALAKAAQAFAAAJgCIAAAOQgKADgIAAQgXAAABgXg");
	this.shape_15.setTransform(53.7,15.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#001E50").s().p("AgeAiQgLgNAAgVQAAgTALgOQALgPAUAAQAVAAAKAMQAKALAAARIgBANIhBAAQAAANAIAIQAIAIAMAAQAPAAANgIIAGANQgPAKgUAAQgVAAgMgPgAgRgaQgGAHgBAMIAxAAIAAgEQAAgKgGgGQgHgGgLAAQgKAAgIAHg");
	this.shape_16.setTransform(45.25,16.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#001E50").s().p("AgIBCIAAhbIARAAIAABbgAgKg2QAAgLAKAAQALAAAAALQAAALgLAAQgKAAAAgLg");
	this.shape_17.setTransform(37.85,14.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#001E50").s().p("AAXAvIAAg3QAAgXgVAAQgLAAgNAJIAABFIgRAAIAAhaIAMAAIACAIIAAAAIANgHQALgEAIAAQAPAAAJAJQAJAJAAARIAAA6g");
	this.shape_18.setTransform(30.225,16.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#001E50").s().p("AgeAiQgLgNAAgVQAAgTALgOQALgPAUAAQAVAAAKAMQAKALAAARIgBANIhBAAQAAANAIAIQAIAIAMAAQAPAAANgIIAGANQgPAKgUAAQgVAAgMgPgAgRgaQgGAHgBAMIAxAAIAAgEQAAgKgGgGQgGgGgMAAQgKAAgIAHg");
	this.shape_19.setTransform(19.7,16.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#001E50").s().p("AgkAxQgOgTAAgeQAAgeAOgSQAQgSAdgBQAUABAVALIgGAOQgSgKgRABQgpgBAAAzQAAAzAnAAQARAAAJgFIAAgeIgZgEIAAgMIArAAIAAA2QgTANgZAAQgcAAgPgSg");
	this.shape_20.setTransform(8.175,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.9,27.2);


(lib.Text_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiBBzIAAjlIEDAAIAADlg");
	var mask_graphics_1 = new cjs.Graphics().p("AlYBzIAAjlIKxAAIAADlg");
	var mask_graphics_2 = new cjs.Graphics().p("AgdBzIAAjlIA7AAIAADlg");
	var mask_graphics_3 = new cjs.Graphics().p("AoMBzIAAjlIQZAAIAADlg");
	var mask_graphics_4 = new cjs.Graphics().p("AoMB0IAAjnIQZAAIAADng");
	var mask_graphics_5 = new cjs.Graphics().p("AoMB0IAAjnIQZAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:12.2,y:14.95}).wait(1).to({graphics:mask_graphics_1,x:61.05,y:14.925}).wait(1).to({graphics:mask_graphics_2,x:98.35,y:14.925}).wait(1).to({graphics:mask_graphics_3,x:154.925,y:14.95}).wait(1).to({graphics:mask_graphics_4,x:32.475,y:36.75}).wait(1).to({graphics:mask_graphics_5,x:137.225,y:36.75}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#001E50").s().p("AASAvIAAg2QAAgSgQAAQgJAAgKAIIAABAIgaAAIAAhaIAVAAIADAJIABAAQANgMAPAAQAQAAAJAKQAJAKAAAQIAAA5g");
	this.shape.setTransform(148.975,37.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#001E50").s().p("AggAiQgLgNAAgVQAAgUALgNQANgPAVAAQAVAAALAMQAKALAAARIgBAPIg8AAQABAKAGAGQAGAFAJAAQANAAAQgGIAGATQgQAIgVAAQgWAAgNgPgAgMgWQgFAFAAAJIAmAAIAAgCQAAgTgTAAQgIAAgGAHg");
	this.shape_1.setTransform(138.325,37.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#001E50").s().p("AgNAuIgjhZIAAgCIAaAAIAWBBIABAAIAWhBIAaAAIAAACIgjBZg");
	this.shape_2.setTransform(128.1,37.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#001E50").s().p("AggAiQgLgNAAgVQAAgUALgNQANgPAVAAQAVAAALAMQAKALAAARIgBAPIg8AAQABAKAGAGQAGAFAJAAQANAAAQgGIAGATQgQAIgVAAQgWAAgNgPgAgMgWQgFAFAAAJIAmAAIAAgCQAAgTgTAAQgIAAgGAHg");
	this.shape_3.setTransform(117.925,37.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#001E50").s().p("AgNA9QgFgGgBgOIAAhrIAZAAIAABvIABADIACABIAKAAIAAARIgPABQgLAAgGgGg");
	this.shape_4.setTransform(110.4,35.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#001E50").s().p("AggAiQgLgNAAgVQAAgUALgNQANgPAVAAQAVAAALAMQAKALAAARIgBAPIg8AAQABAKAGAGQAGAFAJAAQANAAAQgGIAGATQgQAIgVAAQgWAAgNgPgAgMgWQgFAFAAAJIAmAAIAAgCQAAgTgTAAQgIAAgGAHg");
	this.shape_5.setTransform(97.875,37.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#001E50").s().p("AgXBWIAAgUIAKABQAKAAAAgMIAAhiIAZAAIAABgQAAAjggAAIgNgCgAgBg/QgEgEAAgGQAAgGAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAGQAAAGgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_6.setTransform(89.375,37.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#001E50").s().p("AASAvIAAg2QAAgSgQAAQgJAAgKAIIAABAIgaAAIAAhaIAVAAIADAJIABAAQANgMAPAAQAQAAAJAKQAJAKAAAQIAAA5g");
	this.shape_7.setTransform(78.025,37.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#001E50").s().p("AglAoQgIgHAAgNQAAgQAKgGQALgHAYAAIALAAIAAgEQAAgOgOAAQgQAAgPAHIgGgUQASgIAUAAQAmAAAAAlIAAAlIABADIADAAIAGAAIAAASIgNABQgNAAgFgLIgBAAQgNAMgPAAQgPAAgIgJgAgVARQAAALANAAQALAAAIgGIAAgQIgJAAQgXAAAAALg");
	this.shape_8.setTransform(67.375,37.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#001E50").s().p("AgNAuIgjhZIAAgCIAaAAIAWBBIAAAAIAXhBIAaAAIAAACIgjBZg");
	this.shape_9.setTransform(57.05,37.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#001E50").s().p("AgRAfIAAgvIgQAAIAAgOIAQgGIAAgVIAZAAIAAAVIAaAAIAAAUIgaAAIAAAqQAAALALgBQAGABAJgDIAAAVQgMADgKAAQgdAAAAgbg");
	this.shape_10.setTransform(43.575,36.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#001E50").s().p("AglAoQgIgHAAgNQAAgQAKgGQALgHAYAAIALAAIAAgEQAAgOgOAAQgQAAgPAHIgGgUQASgIAUAAQAmAAAAAlIAAAlIABADIADAAIAGAAIAAASIgNABQgNAAgFgLIgBAAQgNAMgPAAQgPAAgIgJgAgVARQAAALANAAQALAAAIgGIAAgQIgJAAQgXAAAAALg");
	this.shape_11.setTransform(34.675,37.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#001E50").s().p("AglAoQgIgHAAgNQAAgQAKgGQALgHAYAAIALAAIAAgEQAAgOgOAAQgQAAgPAHIgGgUQASgIAUAAQAmAAAAAlIAAAlIABADIADAAIAGAAIAAASIgNABQgNAAgFgLIgBAAQgNAMgPAAQgPAAgIgJgAgVARQAAALANAAQALAAAIgGIAAgQIgJAAQgXAAAAALg");
	this.shape_12.setTransform(24.375,37.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#001E50").s().p("AAxAvIAAg2QAAgJgDgEQgEgFgJAAQgKAAgLAJIABAGIAAA5IgZAAIAAg2QAAgSgQAAQgKAAgKAIIAABAIgZAAIAAhaIAUAAIADAJIAAAAQAOgMAQAAQATAAAIAOIABAAIALgJQAJgFANAAQAQAAAJAKQAIAKAAAQIAAA5g");
	this.shape_13.setTransform(10.65,37.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#001E50").s().p("AgtBCIAAiAIATAAIADAIIABAAQAOgLAOAAQATAAALAPQAKAMAAAWQAAATgKAOQgLAOgTAAQgLAAgOgJIAAAAIAAAsgAgTgnIAAAsQAIAFAKAAQAVAAgBgaQABgcgVAAQgKAAgIAFg");
	this.shape_14.setTransform(162.85,18.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#001E50").s().p("AgjAiQgMgNAAgVQAAgUAMgNQANgPAWAAQAXAAANAPQAMANAAAUQAAAVgMANQgNAPgXAAQgWAAgNgPgAgPgUQgGAHAAANQAAANAGAIQAGAGAJAAQAWAAAAgbQAAgbgWAAQgJAAgGAHg");
	this.shape_15.setTransform(151.525,16.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#001E50").s().p("AgPBBIguh/IAAgCIAdAAIAgBlIABAAIAghlIAdAAIAAACIguB/g");
	this.shape_16.setTransform(135.375,14.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#001E50").s().p("Ag0AKIAAhLIAaAAIAABLQAAAhAaAAQAcAAAAghIAAhLIAZAAIAABLQAAA4g1AAQg0AAAAg4g");
	this.shape_17.setTransform(122.4,14.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#001E50").s().p("AgtA3IAIgVQAHAFAKACQALAEAIAAQAUAAAAgQQAAgHgEgDQgEgDgKgDIgNgFQgfgJAAgaQAAgSAMgLQANgKAVgBQAUAAATAKIgIAVQgRgJgOABQgTAAAAAOQAAAMAOAEIAMAEQATAFAIAIQAJAJAAAPQAAASgNAMQgNALgVgBQgWAAgWgMg");
	this.shape_18.setTransform(110.375,14.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#001E50").s().p("AgSAdIAAgCIAMg3IAZAAIAAACIgTA3g");
	this.shape_19.setTransform(97.8,21.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#001E50").s().p("AglAoIAHgTQAQAIAOAAQANAAAAgJQAAgGgMgDIgLgDQgZgGAAgUQAAgOAKgIQAKgIARAAQASAAAQAHIgHASQgPgFgLAAQgNAAAAAIQAAAGALADIALADQAaAHAAAUQAAAOgKAIQgLAIgRAAQgUAAgRgJg");
	this.shape_20.setTransform(91.175,16.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#001E50").s().p("AglAoIAHgTQAQAIAOAAQANAAAAgJQAAgGgMgDIgLgDQgZgGAAgUQAAgOAKgIQAKgIARAAQASAAAQAHIgHASQgPgFgLAAQgNAAAAAIQAAAGALADIALADQAaAHAAAUQAAAOgKAIQgLAIgRAAQgUAAgRgJg");
	this.shape_21.setTransform(82.325,16.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#001E50").s().p("AgjAiQgMgNAAgVQAAgUAMgNQANgPAWAAQAXAAANAPQAMANAAAUQAAAVgMANQgNAPgXAAQgWAAgNgPgAgPgUQgGAHAAANQAAANAGAIQAGAGAJAAQAWAAAAgbQAAgbgWAAQgJAAgGAHg");
	this.shape_22.setTransform(72.375,16.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#001E50").s().p("AgbAvIAAhaIAUAAIAEALQAHgOAPAAIAJABIgCAVIgJAAQgMAAgHAJIAAA+g");
	this.shape_23.setTransform(63.75,16.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#001E50").s().p("AggAxQgRgTAAgeQAAgeARgSQAQgTAdAAQASAAATAJIgHAUQgPgGgPAAQgQAAgJAMQgJANAAATQAAAVAJALQAJANAQAAQAPAAAPgHIAHAVQgTAIgSAAQgdAAgQgSg");
	this.shape_24.setTransform(54.1,14.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#001E50").s().p("AgbAKIAAgTIA2AAIAAATg");
	this.shape_25.setTransform(44.35,15.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#001E50").s().p("AgNBBIAAhqIgkAAIAAgXIBiAAIAAAXIgkAAIAABqg");
	this.shape_26.setTransform(35.05,14.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#001E50").s().p("AggAiQgLgNAAgVQAAgUALgNQANgPAVAAQAVAAALAMQAKALAAARIgBAPIg8AAQABAKAGAGQAGAFAJAAQANAAAQgGIAGATQgQAIgVAAQgWAAgNgPgAgMgWQgFAFAAAJIAmAAIAAgCQAAgTgTAAQgIAAgGAHg");
	this.shape_27.setTransform(20.225,16.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#001E50").s().p("Ag0BBIAAiBIAoAAQAiABAQAQQAPAQAAAfQAAAhgPAPQgQARgiAAgAgaAqIAMAAQAXAAAJgKQAIgJAAgXQAAgWgIgKQgJgKgXABIgMAAg");
	this.shape_28.setTransform(8.825,14.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.4,207.4,44.9);


(lib.IMG_Rim_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhzEvQh2gsg6h/Qg3h4Auh7QAwh/B3g3QA8gbA/gDQA/gDA+AXQB9AvA1B1QAbA8ACBCQACA/gYA+QgtB8h7A4QhGAghDAAQg3AAg3gVg");
	var mask_graphics_1 = new cjs.Graphics().p("AlYGyQiziOgbjlQgajjCPi0QCOizDkgbQDkgaC0CPQCzCOAaDkQAbDkiPCzQiOC0jlAaQgjAFgiAAQi6AAiYh5gAAAk/Qg+ADg8AbQh3A3gwB/QguB7A3B4QA6B/B2AsQB6AuB9g5QB7g4Ath8QAYg+gCg/QgChCgbg8Qg1h1h9gvQg2gUg5AAIgPAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:41.3944,y:41.3549}).wait(1).to({graphics:mask_graphics_1,x:40.2572,y:40.9572}).wait(1));

	// IMG
	this.instance = new lib.IMG_Rim();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83,83);


(lib.IMG_Car_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// paint_grey (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AipCEIgCgBIAAAAQgHgDACgOIAAAAQAFgkAAhSIAAAAIAAhZIABgLQgBgMAAgFIAAAAQABgFADgDIAAAAQAEgEAEABIAAAAQAFABADAGIAAAAIABALIAAAAIADBhIABA1IAAAAQAAAggCAPIAAAAIgCAOIAAAAIAKgFIAAAAQAKgEAOgDIAAAAIADAAIAMgHIAAAAIAQgFIATgGIAAAAIATgFQAhgJAqgQIAAAAIAqgOIBbgeIAAAAQAIgDAEADIAAAAQAEACAAAEIAAAAQABAEgDADIAAAAQgDADgGACIAAAAIh7ArIhAAVIAAAAIhIAWIgOAHIAAAAIgHAEIAAAAIgRAKIgDADQgDACgHADIAAAAIgMAFIgIACIAAAAQgDAAgCgBgAh2AXQgHgCgBgIIAAAAQgBgHAIgDIAAAAQAHgCAEAGIAAAAQADAFgCAEIAAAAIAAABQgDAGgGAAIAAAAIgCAAg");
	var mask_graphics_2 = new cjs.Graphics().p("AipCEIgCgBIAAAAQgHgDACgOIAAAAQAFgkAAhSIAAAAIAAhZIABgLQgBgMAAgFIAAAAQABgFADgDIAAAAQAEgEAEABIAAAAQAFABADAGIAAAAIABALIAAAAIADBhIABA1IAAAAQAAAggCAPIAAAAIgCAOIAAAAIAKgFIAAAAQAKgEAOgDIAAAAIADAAIAMgHIAAAAIAQgFIATgGIAAAAIATgFQAhgJAqgQIAAAAIAqgOIBbgeIAAAAQAIgDAEADIAAAAQAEACAAAEIAAAAQABAEgDADIAAAAQgDADgGACIAAAAIh7ArIhAAVIAAAAIhIAWIgOAHIAAAAIgHAEIAAAAIgRAKIgDADQgDACgHADIAAAAIgMAFIgIACIAAAAQgDAAgCgBgAh2AXQgHgCgBgIIAAAAQgBgHAIgDIAAAAQAHgCAEAGIAAAAQADAFgCAEIAAAAIAAABQgDAGgGAAIAAAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:353.5301,y:116.5716}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_2,x:353.5301,y:116.5716}).wait(1));

	// paint_yellow (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AgpBZQgFgBgCgEQgDgEABgEIADgHQACgFAAgGQADgWgBgRQAAgPABgEIABgDIAAgFQgEgdAAgGQADgRAAgJQgBgMACgEQADgDAEgBQAFAAADADQADADABAMIAFAjIAFAVQADANAIALQAEgGAIgBIAIgBQAGgBAJgFQAKgFAFAFQADADgBADQAAAEgDADQgDAEgKAEQABAIgFAEQgFAFgHgBQAAADgCADQAGAHgFAJQgFAGgJAEIgLAGIgJAIQgGAEgGgDQgBAFgEADQgDADgDAAIgCgBgAgRApIABAAIAAgDIgBAAgAgRAlIAAAAIAAgBIAAAAg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AgpBZQgFgBgCgEQgDgEABgEIADgHQACgFAAgGQADgWgBgRQAAgPABgEIABgDIAAgFQgEgdAAgGQADgRAAgJQgBgMACgEQADgDAEgBQAFAAADADQADADABAMIAFAjIAFAVQADANAIALQAEgGAIgBIAIgBQAGgBAJgFQAKgFAFAFQADADgBADQAAAEgDADQgDAEgKAEQABAIgFAEQgFAFgHgBQAAADgCADQAGAHgFAJQgFAGgJAEIgLAGIgJAIQgGAEgGgDQgBAFgEADQgDADgDAAIgCgBgAgRApIABAAIAAgDIgBAAgAgRAlIAAAAIAAgBIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:342.9399,y:117.5611}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_2,x:342.9399,y:117.5611}).wait(1));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AjNMSQg1gBk2gRIlhgSIirgJQifgKglAAQg7gBgigKIgRgFQgvgGgngYQgsgcgcgvQgbgwgCg0QgChJAog7QAagmAngbQgCgVAAgWQgChuAvhnQAvhmBThIQAdgaA0giQBCgtARgMIA8gvQAkgbAcgPQAVgKAjgNQAtgPAMgGQAkgOASgTQAJgIAQgZQAkg0AkgYQAPgKAcgNQAigPAKgHQAQgIAegWQAegWAPgIQAzgeBLgNQAmgHBggIQBxgIDXgZQDdgaBrgIIC/gOQBxgJBNgLIBWgLQAxgEAlAIQA3ANArAqQArAqAOA3QAOA3gQA6QgPA5gpApQBEBUAYBBQAFAPAEAPQAcABAcADQALgFAJgDQAIgBARAAIEjAAQAHAAADABQAEACAGAGQAcAbARAmQARAlACAoQACAogNAmQgNAmgaAfQAcBDAUBGQAVBIADAzQAEBGgXA2QgPAjgaAbQgmAog4ARQg4ARg3gNQg2gNgqgoQgrgogQg1QgHgXgHgwQgHgwgHgXQgGgQgMgYIgQghQgEgBgDgEIgEgBQgJgDgHgBQgJAAgJACIgFAGQgGAJgEAVIgRBXIgBAcQgCARgJAsQgHAmgCAXQAAASgCAJQgDAPgIAIQgGAHgPAGQgmANg4AGIgFAAIAAACQgTABgQAJQgRAKgLASIgEAHIgfAJIgbAKQgfAJgZAAIgJABIgKgDQgSgEgRADIgSAGIgxAQQgEgHgBgLIAAgbQABgigMg6QgQhMgcgwQgagugxghIgsgYQgUgEgJAAIgTADIgKAEQgFADgMAWQgLATgHAPIgBABIgGARIAAABIgGAUIgGAdIgcC1IgYCiIgCAQIgDACQgDACgWAEIgaAFQibAHiMAAIhSgBgAJ1ItIABAAIgBAAg");
	var mask_2_graphics_2 = new cjs.Graphics().p("A1QKhIg/gPQgkgHgbAAQgYABghAGIg4AMQiDAbiGgcQiHgdhthOQhthNhHh2QhHh2gSiFQgOhrAVhsQAWhsA3heQBJh+B3hRQCLhhDXglQEBguEBAvIA7AMQAiAGAaACQAjAEAtgCQAagBA1gFQC3gPB7gJQgJAhABAkQACA0AbAwQAcAwAsAbQAnAZAvAGIARAFQAiAJA7ABQAlABCfAJICqAKIFhASQE2AQA1ABQCxADDJgJIAagEQAWgFADgCIADgCQABgDCrg+QCrg/ACAEIAxgRIASgFQARgEASAEIAKADIAJAAQAZAAAfgJIAIgDIALABQAiAEAcgPQAdgQAPgeIABgCIABgBIAJgGQA0gFAkgNQAPgGAGgHQAIgIADgPQACgIAAgTQACgXAHgmIACgHQBsAmBdBMQB0BfA+CFQA+CFgCCXQgCCWhBCDQhBCDh3BcQh3BdiPAfQhOARhpACQgXAAihgDQiTgDkNAJQi5AGhcAJIiLAQQhZAKgyAEQhZAHjJABQkEAAiuAEQjtAGjGAOIjwAUQiMALhkABIgZAAQiJAAhcgUgAYVoVIABABIgBAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:283.3479,y:64.3001}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_2,x:190.5361,y:173.3708}).wait(1));

	// IMG
	this.instance = new lib.IMG_Car();
	this.instance.setTransform(139,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(139,0,261.5,163);


(lib.IMG_BG_Shadow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,30,80,0)").ss(1,1,1).p("AAAvOIAAed");
	this.shape.setTransform(1138.8,185.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(47,59,73,0.667)").s().p("ADLWLIhPrGQgBgMgEgOQgJgegRgMQgPgLgngDMgt1gAXMAAAggFMBadAD6MgD2ApZg");
	this.shape_1.setTransform(753.85,162.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(464.4,17.3,675.4,289.9);


(lib.IMG_BG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Shadow copy 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkABBQhrgbAAgmQAAglBrgbQBrgcCVAAQCXAABqAcQBrAbAAAlQAAAmhrAbQhqAciXAAQiVAAhrgcg");
	this.shape.setTransform(807.75,217.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0.29)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkABBQhrgbAAgmQAAglBrgbQBrgcCVAAQCXAABqAcQBrAbAAAlQAAAmhrAbQhqAciXAAQiVAAhrgcg");
	this.shape_1.setTransform(807.75,217.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(0,0,0,0.267)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkABBQhrgbAAgmQAAglBrgbQBrgcCVAAQCXAABqAcQBrAbAAAlQAAAmhrAbQhqAciXAAQiVAAhrgcg");
	this.shape_2.setTransform(807.75,217.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(0,0,0,0.231)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkABBQhrgbAAgmQAAglBrgbQBrgcCVAAQCXAABqAcQBrAbAAAlQAAAmhrAbQhqAciXAAQiVAAhrgcg");
	this.shape_3.setTransform(807.75,217.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(0,0,0,0.18)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkABBQhrgbAAgmQAAglBrgbQBrgcCVAAQCXAABqAcQBrAbAAAlQAAAmhrAbQhqAciXAAQiVAAhrgcg");
	this.shape_4.setTransform(807.75,217.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(0,0,0,0.118)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkABCQhrgbAAgnQAAgmBrgbQBrgbCVAAQCXAABqAbQBrAbAAAmQAAAnhrAbQhqAbiXAAQiVAAhrgbg");
	this.shape_5.setTransform(807.75,217.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(0,0,0,0.067)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkABCQhrgbAAgnQAAgmBrgbQBrgbCVAAQCXAABqAbQBrAbAAAmQAAAnhrAbQhqAbiXAAQiVAAhrgbg");
	this.shape_6.setTransform(807.75,217.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(0,0,0,0.031)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkABCQhrgbAAgnQAAgmBrgbQBrgbCVAAQCXAABqAbQBrAbAAAmQAAAnhrAbQhqAbiXAAQiVAAhrgbg");
	this.shape_7.setTransform(807.75,217.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(0,0,0,0.008)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkABCQhrgbAAgnQAAgmBrgbQBrgbCVAAQCXAABqAbQBrAbAAAmQAAAnhrAbQhqAbiXAAQiVAAhrgbg");
	this.shape_8.setTransform(807.75,217.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkABCQhrgbAAgnQAAgmBrgbQBrgbCVAAQCXAABqAbQBrAbAAAmQAAAnhrAbQhqAbiXAAQiVAAhrgbg");
	this.shape_9.setTransform(807.75,217.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(6));

	// Shadow copy 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkBBCQhqgbAAgnQAAgmBqgaQBsgcCVAAQCXAABqAcQBrAaAAAmQAAAnhrAbQhqAbiXAAQiVAAhsgbg");
	this.shape_10.setTransform(728.3,215.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(0,0,0,0.29)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkBBCQhqgbAAgnQAAgmBqgaQBsgcCVAAQCXAABqAcQBrAaAAAmQAAAnhrAbQhqAbiXAAQiVAAhsgbg");
	this.shape_11.setTransform(728.3,215.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["rgba(0,0,0,0.267)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkBBCQhqgbAAgnQAAgmBqgaQBsgcCVAAQCXAABqAcQBrAaAAAmQAAAnhrAbQhqAbiXAAQiVAAhsgbg");
	this.shape_12.setTransform(728.3,215.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["rgba(0,0,0,0.231)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkBBCQhqgbAAgnQAAgmBqgaQBsgcCVAAQCXAABqAcQBrAaAAAmQAAAnhrAbQhqAbiXAAQiVAAhsgbg");
	this.shape_13.setTransform(728.3,215.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["rgba(0,0,0,0.18)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkBBCQhqgbAAgnQAAgmBqgaQBsgcCVAAQCXAABqAcQBrAaAAAmQAAAnhrAbQhqAbiXAAQiVAAhsgbg");
	this.shape_14.setTransform(728.3,215.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["rgba(0,0,0,0.118)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkBBBQhqgbAAgmQAAgmBqgbQBsgbCVAAQCXAABqAbQBrAbAAAmQAAAmhrAbQhqAciXAAQiVAAhsgcg");
	this.shape_15.setTransform(728.3,215.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["rgba(0,0,0,0.067)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkBBBQhqgbAAgmQAAgmBqgbQBsgbCVAAQCXAABqAbQBrAbAAAmQAAAmhrAbQhqAciXAAQiVAAhsgcg");
	this.shape_16.setTransform(728.3,215.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["rgba(0,0,0,0.031)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkBBBQhqgbAAgmQAAgmBqgbQBsgbCVAAQCXAABqAbQBrAbAAAmQAAAmhrAbQhqAciXAAQiVAAhsgcg");
	this.shape_17.setTransform(728.3,215.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(0,0,0,0.008)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkBBBQhqgbAAgmQAAgmBqgbQBsgbCVAAQCXAABqAbQBrAbAAAmQAAAmhrAbQhqAciXAAQiVAAhsgcg");
	this.shape_18.setTransform(728.3,215.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,34.9).s().p("AkBBBQhqgbAAgmQAAgmBqgbQBsgbCVAAQCXAABqAbQBrAbAAAmQAAAmhrAbQhqAciXAAQiVAAhsgcg");
	this.shape_19.setTransform(728.3,215.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(6));

	// Shadow copy
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,69.9).s().p("AoCCDQjVg2AAhNQAAhMDVg2QDWg3EsAAQEuAADVA3QDVA2AABMQAABNjVA2QjVA3kuAAQksAAjWg3g");
	this.shape_20.setTransform(778.8,208.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(0,0,0,0.29)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,69.9).s().p("AoCCDQjVg2AAhNQAAhMDVg2QDWg3EsAAQEuAADVA3QDVA2AABMQAABNjVA2QjVA3kuAAQksAAjWg3g");
	this.shape_21.setTransform(778.8,208.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(0,0,0,0.267)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,69.9).s().p("AoCCDQjVg2AAhNQAAhMDVg2QDWg3EsAAQEuAADVA3QDVA2AABMQAABNjVA2QjVA3kuAAQksAAjWg3g");
	this.shape_22.setTransform(778.8,208.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["rgba(0,0,0,0.231)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,69.9).s().p("AoCCDQjVg2AAhNQAAhMDVg2QDWg3EsAAQEuAADVA3QDVA2AABMQAABNjVA2QjVA3kuAAQksAAjWg3g");
	this.shape_23.setTransform(778.8,208.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(0,0,0,0.18)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,69.9).s().p("AoCCDQjVg2AAhNQAAhMDVg2QDWg3EsAAQEuAADVA3QDVA2AABMQAABNjVA2QjVA3kuAAQksAAjWg3g");
	this.shape_24.setTransform(778.8,208.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["rgba(0,0,0,0.118)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,69.9).s().p("AoCCDQjVg2AAhNQAAhMDVg2QDWg3EsAAQEuAADVA3QDVA2AABMQAABNjVA2QjVA3kuAAQksAAjWg3g");
	this.shape_25.setTransform(778.8,208.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["rgba(0,0,0,0.067)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,69.9).s().p("AoCCDQjVg2AAhNQAAhMDVg2QDWg3EsAAQEuAADVA3QDVA2AABMQAABNjVA2QjVA3kuAAQksAAjWg3g");
	this.shape_26.setTransform(778.8,208.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["rgba(0,0,0,0.031)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,69.9).s().p("AoCCDQjVg2AAhNQAAhMDVg2QDWg3EsAAQEuAADVA3QDVA2AABMQAABNjVA2QjVA3kuAAQksAAjWg3g");
	this.shape_27.setTransform(778.8,208.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["rgba(0,0,0,0.008)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,69.9).s().p("AoCCDQjVg2AAhNQAAhMDVg2QDWg3EsAAQEuAADVA3QDVA2AABMQAABNjVA2QjVA3kuAAQksAAjWg3g");
	this.shape_28.setTransform(778.8,208.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,69.9).s().p("AoCC+QjVhOAAhwQAAhuDVhPQDVhPEtAAQEuAADUBPQDWBPAABuQAABwjWBOQjUBPkuAAQktAAjVhPg");
	this.shape_29.setTransform(778.8,208.563,1,0.69);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(6));

	// Shadow
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["rgba(0,0,0,0.298)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,53.1).s().p("AmGGMQiiijAAjpQAAjnCiilQCiikDkAAQDlAACiCkQCiClAADnQAADpiiCjQiiCljlAAQjkAAiiilg");
	this.shape_30.setTransform(826.675,166.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["rgba(0,0,0,0.29)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,53.1).s().p("AmGGMQiiijAAjpQAAjnCiilQCiikDkAAQDlAACiCkQCiClAADnQAADpiiCjQiiCljlAAQjkAAiiilg");
	this.shape_31.setTransform(826.675,166.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["rgba(0,0,0,0.267)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,53.1).s().p("AmGGMQiiijAAjpQAAjnCiilQCiikDkAAQDlAACiCkQCiClAADnQAADpiiCjQiiCljlAAQjkAAiiilg");
	this.shape_32.setTransform(826.675,166.15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["rgba(0,0,0,0.231)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,53.1).s().p("AmGGMQiiijAAjpQAAjnCiilQCiikDkAAQDlAACiCkQCiClAADnQAADpiiCjQiiCljlAAQjkAAiiilg");
	this.shape_33.setTransform(826.675,166.15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["rgba(0,0,0,0.18)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,53.1).s().p("AmGGMQiiijAAjpQAAjnCiilQCiikDkAAQDlAACiCkQCiClAADnQAADpiiCjQiiCljlAAQjkAAiiilg");
	this.shape_34.setTransform(826.675,166.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["rgba(0,0,0,0.118)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,53.1).s().p("AmGGMQiiijAAjpQAAjnCiilQCiikDkAAQDlAACiCkQCiClAADnQAADpiiCjQiiCljlAAQjkAAiiilg");
	this.shape_35.setTransform(826.675,166.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["rgba(0,0,0,0.067)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,53.1).s().p("AmGGMQiiijAAjpQAAjnCiilQCiikDkAAQDlAACiCkQCiClAADnQAADpiiCjQiiCljlAAQjkAAiiilg");
	this.shape_36.setTransform(826.675,166.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["rgba(0,0,0,0.031)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,53.1).s().p("AmGGMQiiijAAjpQAAjnCiilQCiikDkAAQDlAACiCkQCiClAADnQAADpiiCjQiiCljlAAQjkAAiiilg");
	this.shape_37.setTransform(826.675,166.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(0,0,0,0.008)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,53.1).s().p("AmGGMQiiijAAjpQAAjnCiilQCiikDkAAQDlAACiCkQCiClAADnQAADpiiCjQiiCljlAAQjkAAiiilg");
	this.shape_38.setTransform(826.675,166.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0)"],[0.216,1],0,0,0,0,0,53.1).s().p("AmGGMQiiijAAjpQAAjnCiilQCiikDkAAQDlAACiCkQCiClAADnQAADpiiCjQiiCljlAAQjkAAiiilg");
	this.shape_39.setTransform(826.675,166.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(6));

	// Layer_1
	this.instance = new lib.IMG_BG();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1130.5,406);


(lib.ctaarrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#001E50").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape.setTransform(2.5178,1.325);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#022153").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_1.setTransform(2.5178,1.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#093264").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_2.setTransform(2.5178,1.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#206595").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_3.setTransform(2.5178,1.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#328DBC").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_4.setTransform(2.5178,1.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#3CA2D0").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_5.setTransform(2.5178,1.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#42B0DD").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_6.setTransform(2.5178,1.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#46B9E6").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_7.setTransform(2.5178,1.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#48BFEC").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_8.setTransform(2.5178,1.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#4AC3F0").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_9.setTransform(2.5178,1.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#4BC5F2").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_10.setTransform(2.5178,1.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#4CC7F4").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_11.setTransform(2.5178,1.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#4AC4F1").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_12.setTransform(2.5178,1.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#43B3E0").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_13.setTransform(2.5178,1.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2C80AF").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_14.setTransform(2.5178,1.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#1A5888").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_15.setTransform(2.5178,1.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#104374").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_16.setTransform(2.5178,1.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0A3567").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_17.setTransform(2.5178,1.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#062C5E").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_18.setTransform(2.5178,1.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#042658").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_19.setTransform(2.5178,1.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#022254").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_20.setTransform(2.5178,1.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#012052").ss(1.5,0,1).p("AgIAVQAAgPAHgIQAHgKAKAA");
	this.shape_21.setTransform(2.5178,1.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},26).to({state:[{t:this.shape}]},14).to({state:[]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},5).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(26).to({_off:false},0).wait(14).to({_off:true},1).wait(1).to({_off:false},0).wait(5).to({_off:true},1).wait(27).to({_off:false},0).wait(2));

	// Layer_2 copy 2
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#001E50").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_22.setTransform(2.5187,-1.325);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#022153").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_23.setTransform(2.5187,-1.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#093264").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_24.setTransform(2.5187,-1.325);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#206595").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_25.setTransform(2.5187,-1.325);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#328DBC").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_26.setTransform(2.5187,-1.325);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#3CA2D0").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_27.setTransform(2.5187,-1.325);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#42B0DD").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_28.setTransform(2.5187,-1.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#46B9E6").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_29.setTransform(2.5187,-1.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#48BFEC").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_30.setTransform(2.5187,-1.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#4AC3F0").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_31.setTransform(2.5187,-1.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#4BC5F2").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_32.setTransform(2.5187,-1.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#4CC7F4").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_33.setTransform(2.5187,-1.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#4AC4F1").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_34.setTransform(2.5187,-1.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#43B3E0").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_35.setTransform(2.5187,-1.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#2C80AF").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_36.setTransform(2.5187,-1.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#1A5888").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_37.setTransform(2.5187,-1.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#104374").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_38.setTransform(2.5187,-1.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#0A3567").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_39.setTransform(2.5187,-1.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#062C5E").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_40.setTransform(2.5187,-1.325);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#042658").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_41.setTransform(2.5187,-1.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#022254").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_42.setTransform(2.5187,-1.325);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#012052").ss(1.5,0,1).p("AgIgUQAAAOAIAJQAGAKAKAA");
	this.shape_43.setTransform(2.5187,-1.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},26).to({state:[{t:this.shape_22}]},14).to({state:[]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},5).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},5).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(26).to({_off:false},0).wait(14).to({_off:true},1).wait(1).to({_off:false},0).wait(5).to({_off:true},1).wait(27).to({_off:false},0).wait(2));

	// Layer_2
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,30,80,0)").ss(1.5,0,1).p("AgEAAIAJAA");
	this.shape_44.setTransform(-63.5,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(0,30,80,0.008)").ss(1.5,0,1).p("AgFAAIALAA");
	this.shape_45.setTransform(-63.325,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,30,80,0.02)").ss(1.5,0,1).p("AgIAAIARAA");
	this.shape_46.setTransform(-63,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(0,30,80,0.047)").ss(1.5,0,1).p("AgOAAIAdAA");
	this.shape_47.setTransform(-62.275,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,30,80,0.106)").ss(1.5,0,1).p("AgZAAIAzAA");
	this.shape_48.setTransform(-60.825,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(0,30,80,0.204)").ss(1.5,0,1).p("AgtAAIBbAA");
	this.shape_49.setTransform(-58.275,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(0,30,80,0.365)").ss(1.5,0,1).p("AhNAAICbAA");
	this.shape_50.setTransform(-54.125,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(0,30,80,0.62)").ss(1.5,0,1).p("AiAAAIEBAA");
	this.shape_51.setTransform(-47.6,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#001E50").ss(1.5,0,1).p("AjMAAIGZAA");
	this.shape_52.setTransform(-37.9,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#001E50").ss(1.5,0,1).p("Ai/AAIF/AA");
	this.shape_53.setTransform(-34.775,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#001E50").ss(1.5,0,1).p("AieAAIE9AA");
	this.shape_54.setTransform(-26.875,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#001E50").ss(1.5,0,1).p("Ah9AAID6AA");
	this.shape_55.setTransform(-18.95,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#001E50").ss(1.5,0,1).p("AhjAAIDHAA");
	this.shape_56.setTransform(-12.85,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#001E50").ss(1.5,0,1).p("AhQAAIChAA");
	this.shape_57.setTransform(-8.375,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#001E50").ss(1.5,0,1).p("AhDAAICHAA");
	this.shape_58.setTransform(-5.225,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#001E50").ss(1.5,0,1).p("Ag6AAIB1AA");
	this.shape_59.setTransform(-3.05,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#001E50").ss(1.5,0,1).p("Ag0AAIBpAA");
	this.shape_60.setTransform(-1.675,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#001E50").ss(1.5,0,1).p("AgxAAIBjAA");
	this.shape_61.setTransform(-0.95,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#001E50").ss(1.5,0,1).p("AgwAAIBhAA");
	this.shape_62.setTransform(-0.7,0);
	this.shape_62._off = true;

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#001E50").ss(1.5,0,1).p("AgsAAIBZAA");
	this.shape_63.setTransform(-0.375,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#001E50").ss(1.5,0,1).p("AgqAAIBVAA");
	this.shape_64.setTransform(-0.125,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#001E50").ss(1.5,0,1).p("AgoAAIBRAA");
	this.shape_65.setTransform(0.05,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#001E50").ss(1.5,0,1).p("AgnAAIBPAA");
	this.shape_66.setTransform(0.175,0);
	this.shape_66._off = true;

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#001E50").ss(1.5,0,1).p("AgtAAIBbAA");
	this.shape_67.setTransform(-0.4,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#001E50").ss(1.5,0,1).p("AguAAIBdAA");
	this.shape_68.setTransform(-0.5,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#001E50").ss(1.5,0,1).p("AgvAAIBfAA");
	this.shape_69.setTransform(-0.625,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#022153").ss(1.5,0,1).p("AgnAAIBPAA");
	this.shape_70.setTransform(0.125,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#093264").ss(1.5,0,1).p("AgrAAIBXAA");
	this.shape_71.setTransform(-0.25,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#206595").ss(1.5,0,1).p("Ag2AAIBtAA");
	this.shape_72.setTransform(-1.375,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#328DBC").ss(1.5,0,1).p("Ag/AAIB/AA");
	this.shape_73.setTransform(-2.25,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#3CA2D0").ss(1.5,0,1).p("AhEAAICJAA");
	this.shape_74.setTransform(-2.75,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#42B0DD").ss(1.5,0,1).p("AhHAAICPAA");
	this.shape_75.setTransform(-3.025,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#46B9E6").ss(1.5,0,1).p("AhJAAICTAA");
	this.shape_76.setTransform(-3.225,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#48BFEC").ss(1.5,0,1).p("AhKAAICVAA");
	this.shape_77.setTransform(-3.375,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#4AC3F0").ss(1.5,0,1).p("AhLAAICXAA");
	this.shape_78.setTransform(-3.45,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#4BC5F2").ss(1.5,0,1).p("AhMAAICZAA");
	this.shape_79.setTransform(-3.5,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#4CC7F4").ss(1.5,0,1).p("AhMAAICZAA");
	this.shape_80.setTransform(-3.55,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#4CC7F4").ss(1.5,0,1).p("AhPAAICfAA");
	this.shape_81.setTransform(-3.825,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#4CC7F4").ss(1.5,0,1).p("AhRAAICjAA");
	this.shape_82.setTransform(-4.025,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#4CC7F4").ss(1.5,0,1).p("AhSAAIClAA");
	this.shape_83.setTransform(-4.175,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#4CC7F4").ss(1.5,0,1).p("AhTAAICnAA");
	this.shape_84.setTransform(-4.275,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#4CC7F4").ss(1.5,0,1).p("AhUAAICpAA");
	this.shape_85.setTransform(-4.3,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#4AC4F1").ss(1.5,0,1).p("AhTAAICnAA");
	this.shape_86.setTransform(-4.225,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#43B3E0").ss(1.5,0,1).p("AhPAAICfAA");
	this.shape_87.setTransform(-3.875,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#2C80AF").ss(1.5,0,1).p("AhFAAICLAA");
	this.shape_88.setTransform(-2.8,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#1A5888").ss(1.5,0,1).p("Ag8AAIB5AA");
	this.shape_89.setTransform(-1.925,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#104374").ss(1.5,0,1).p("Ag3AAIBvAA");
	this.shape_90.setTransform(-1.475,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#0A3567").ss(1.5,0,1).p("Ag1AAIBrAA");
	this.shape_91.setTransform(-1.2,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#062C5E").ss(1.5,0,1).p("AgzAAIBnAA");
	this.shape_92.setTransform(-1,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#042658").ss(1.5,0,1).p("AgxAAIBjAA");
	this.shape_93.setTransform(-0.875,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#022254").ss(1.5,0,1).p("AgxAAIBjAA");
	this.shape_94.setTransform(-0.8,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#012052").ss(1.5,0,1).p("AgwAAIBhAA");
	this.shape_95.setTransform(-0.75,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44}]}).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_62}]},1).to({state:[]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64,p:{x:-0.125}}]},1).to({state:[{t:this.shape_65,p:{x:0.05}}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_65,p:{x:0.1}}]},1).to({state:[{t:this.shape_64,p:{x:-0.175}}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68,p:{x:-0.5}}]},1).to({state:[{t:this.shape_68,p:{x:-0.575}}]},1).to({state:[{t:this.shape_69,p:{x:-0.625}}]},1).to({state:[{t:this.shape_69,p:{x:-0.65}}]},1).to({state:[{t:this.shape_69,p:{x:-0.675}}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_62}]},1).to({state:[]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64,p:{x:-0.125}}]},1).to({state:[{t:this.shape_65,p:{x:0.05}}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_62}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(3).to({x:-63.475},0).to({_off:true},1).wait(73));
	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(21).to({_off:false},0).wait(1).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).wait(1).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(32).to({_off:false},0).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(28).to({_off:false},0).wait(1).to({x:0.2},0).wait(1).to({x:0.175},0).to({_off:true},1).wait(15).to({_off:false},0).wait(1).to({x:0.2},0).to({_off:true},1).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-4.4,70.2,8.8);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {end:41,rollover:42,rollout:60,stop:76};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_41 = function() {
		this.stop();
		ctaRolloverCheck = true;
	}
	this.frame_42 = function() {
		ctaRolloverCheck = false;
		ctaRolloverEnded = false;
	}
	this.frame_59 = function() {
		ctaRolloverEnded = true;
		
		if(!ctarolloutCheck){
			exportRoot.cta.stop();
		}
	}
	this.frame_60 = function() {
		ctaRolloverEnded = false;
	}
	this.frame_76 = function() {
		this.gotoAndStop("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(1).call(this.frame_42).wait(17).call(this.frame_59).wait(1).call(this.frame_60).wait(16).call(this.frame_76).wait(1));

	// arrow
	this.instance = new lib.ctaarrow("synched",40,false);
	this.instance.setTransform(106,19.45,1.45,1.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.1,regY:0.2,x:106.15,y:19.75,startPosition:0},0).wait(23).to({regX:0,regY:0,x:106,y:19.45,startPosition:24},0).to({x:101,startPosition:29},5,cjs.Ease.quadOut).wait(1).to({regX:-29.9,x:57.7,startPosition:30},0).wait(1).to({x:58.25,startPosition:31},0).wait(1).to({x:59.7,startPosition:32},0).wait(1).to({x:60.9,startPosition:33},0).wait(1).to({x:61.55,startPosition:34},0).wait(1).to({x:61.95,startPosition:35},0).wait(1).to({x:62.2,startPosition:36},0).wait(1).to({x:62.4,startPosition:37},0).wait(1).to({x:62.5,startPosition:38},0).wait(1).to({x:62.55,startPosition:39},0).wait(1).to({x:62.6,startPosition:40},0).wait(1).to({regX:0,x:106},0).wait(1).to({startPosition:42},0).to({x:101,startPosition:47},5,cjs.Ease.quadOut).wait(1).to({regX:-29.9,x:57.85,startPosition:48},0).wait(1).to({x:58.95,startPosition:49},0).wait(1).to({x:62.25,startPosition:50},0).wait(1).to({x:64.85,startPosition:51},0).wait(1).to({x:66.25,startPosition:52},0).wait(1).to({x:67.1,startPosition:53},0).wait(1).to({x:67.7,startPosition:54},0).wait(1).to({x:68.1,startPosition:55},0).wait(1).to({x:68.35,startPosition:56},0).wait(1).to({x:68.5,startPosition:57},0).wait(1).to({x:68.6,startPosition:58},0).wait(1).to({regX:0,x:112,startPosition:59},0).to({x:118,startPosition:64},5,cjs.Ease.quadOut).wait(1).to({regX:-29.9,x:74.4,startPosition:65},0).wait(1).to({x:73.2,startPosition:66},0).wait(1).to({x:69.6,startPosition:67},0).wait(1).to({x:66.75,startPosition:68},0).wait(1).to({x:65.2,startPosition:69},0).wait(1).to({x:64.3,startPosition:70},0).wait(1).to({x:63.65,startPosition:71},0).wait(1).to({x:63.2,startPosition:72},0).wait(1).to({x:62.95,startPosition:73},0).wait(1).to({x:62.75,startPosition:74},0).wait(1).to({x:62.65,startPosition:75},0).wait(1).to({regX:0,x:106,startPosition:76},0).wait(1));

	// word02 rollover
	this.instance_1 = new lib.Text_CTA("single",3);
	this.instance_1.setTransform(54.2,20.5,1,1,0,0,0,40.2,10.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).to({_off:true},16).wait(10));

	// word01 rollover
	this.instance_2 = new lib.Text_CTA("single",2);
	this.instance_2.setTransform(54.2,20.5,1,1,0,0,0,40.2,10.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({_off:true},20).wait(8));

	// word02
	this.instance_3 = new lib.Text_CTA("single",1);
	this.instance_3.setTransform(42.2,20.5,1,1,0,0,0,40.2,10.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(17).to({x:64.2,alpha:1},0).to({x:54.2},6,cjs.Ease.cubicOut).to({_off:true},27).wait(16).to({_off:false},0).wait(10));

	// word01
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#001E50").s().p("AgiAiQgLgOAAgUQAAgSALgPQAMgOAWAAQAXAAAMAOQALAPAAASQAAAUgLAOQgMAOgXAAQgWAAgMgOgAgPgUQgGAIAAAMQAAAOAGAHQAGAIAJAAQAKAAAGgIQAFgHAAgOQAAgMgFgIQgGgHgKAAQgJAAgGAHg");
	this.shape.setTransform(87.175,20.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#001E50").s().p("AgMA+IAAhIIgNAAIAAgRIANAAIAAgGQAAgOAFgGQAFgIATAAIAEAAIAFABIAAATIgHAAQgFgBgBADQgBAAAAABQgBAAAAABQAAAAAAABQAAABAAAAIAAAIIAPAAIAAARIgPAAIAABIg");
	this.shape_1.setTransform(79.125,18.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#001E50").s().p("AARAuIAAg2QAAgHgCgEQgDgHgKAAQgLAAgFAKQgCAGAAAIIAAAwIgYAAIAAhZIAXAAIAAANQAEgHAFgDQAHgFAKAAQAOAAAJAHQAJAHAAARIAAA8g");
	this.shape_2.setTransform(71.2,20.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#001E50").s().p("AgLA+IAAhaIAXAAIAABagAgLgnIAAgWIAXAAIAAAWg");
	this.shape_3.setTransform(63.65,18.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#001E50").s().p("AgZAuIAAhZIAWAAIAAAQQAFgKAEgDQAGgFALAAIABAAIACAAIAAAYIgEAAIgDAAQgOAAgFAJQgCAFAAAKIAAArg");
	this.shape_4.setTransform(53.725,20.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#001E50").s().p("AgdAlQgNgMAAgZQAAgWAMgNQAMgMASAAQALAAAJAFQAJADAGAJQAGAJABAKQABAHAAAKIg9AAQAAAOAJAFQAEAEAGAAQAIAAAEgFQADgBACgFIAYAAQgBAIgIAJQgLANgVAAQgQAAgOgLgAASgJQAAgIgFgFQgFgGgIAAQgHABgFAFQgEAFgBAIIAjAAIAAAAg");
	this.shape_5.setTransform(45.2333,20.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#001E50").s().p("AgdAlQgNgMAAgZQAAgWAMgNQAMgMASAAQALAAAJAFQAJADAGAJQAGAJABAKQABAHAAAKIg9AAQAAAOAJAFQAEAEAGAAQAIAAAEgFQADgBACgFIAYAAQgBAIgIAJQgLANgVAAQgQAAgOgLgAASgJQAAgIgFgFQgFgGgIAAQgHABgFAFQgEAFgBAIIAjAAIAAAAg");
	this.shape_6.setTransform(35.7833,20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#001E50").s().p("AApAuIAAg4QAAgGgCgDQgDgGgJAAQgKAAgDAIQgCAEAAAGIAAA1IgXAAIAAg1QAAgIgBgDQgEgHgJAAQgJAAgEAHQgCADAAAIIAAA1IgYAAIAAhZIAXAAIAAANQAEgHAEgDQAIgFAKAAQAKAAAGAEQAFAFADAGQAFgIAGgDQAIgEAIAAQAHAAAGACQAFACAFAGQAEAFABAHIABANIAAA4g");
	this.shape_7.setTransform(23.55,20.475);

	this.instance_4 = new lib.Text_CTA("synched",0);
	this.instance_4.setTransform(54.2,20.5,1,1,0,0,0,40.2,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},6).to({state:[]},27).to({state:[{t:this.instance_4}]},20).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:42.2,alpha:0,mode:"single"},0).wait(15).to({x:64.2,alpha:1},0).to({x:54.2},6,cjs.Ease.cubicOut).to({_off:true},27).wait(20).to({_off:false},0).wait(8));

	// BG
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#001E50").ss(1.5,0,1).p("Ao+h8IR9AAIAAD5Ix9AAg");
	this.shape_8.setTransform(64.5,19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,30,80,0)").ss(1.5,0,1).p("AgEh8IAJAAIAAD5IgJAAg");
	this.shape_9.setTransform(7.5,19.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,30,80,0)").ss(1.5,0,1).p("AgFh8IALAAIAAD5IgLAAg");
	this.shape_10.setTransform(7.575,19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,30,80,0.008)").ss(1.5,0,1).p("AgHh8IAPAAIAAD5IgPAAg");
	this.shape_11.setTransform(7.775,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,30,80,0.02)").ss(1.5,0,1).p("AgNh8IAbAAIAAD5IgbAAg");
	this.shape_12.setTransform(8.375,19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,30,80,0.047)").ss(1.5,0,1).p("Agah8IA1AAIAAD5Ig1AAg");
	this.shape_13.setTransform(9.675,19.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,30,80,0.106)").ss(1.5,0,1).p("Agzh8IBnAAIAAD5IhnAAg");
	this.shape_14.setTransform(12.2,19.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,30,80,0.204)").ss(1.5,0,1).p("Ahfh8IDAAAIAAD5IjAAAg");
	this.shape_15.setTransform(16.65,19.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,30,80,0.365)").ss(1.5,0,1).p("Aiph8IFTAAIAAD5IlTAAg");
	this.shape_16.setTransform(24,19.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,30,80,0.62)").ss(1.5,0,1).p("Akch8II4AAIAAD5Io4AAg");
	this.shape_17.setTransform(35.45,19.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#001E50").ss(1.5,0,1).p("AnGh8IONAAIAAD5IuNAAg");
	this.shape_18.setTransform(52.5,19.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#001E50").ss(1.5,0,1).p("AnQh8IOhAAIAAD5IuhAAg");
	this.shape_19.setTransform(53.5,19.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#001E50").ss(1.5,0,1).p("Anqh8IPVAAIAAD5IvVAAg");
	this.shape_20.setTransform(56.05,19.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#001E50").ss(1.5,0,1).p("AoDh8IQHAAIAAD5IwHAAg");
	this.shape_21.setTransform(58.6,19.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#001E50").ss(1.5,0,1).p("AoXh8IQvAAIAAD5IwvAAg");
	this.shape_22.setTransform(60.575,19.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#001E50").ss(1.5,0,1).p("Aolh8IRLAAIAAD5IxLAAg");
	this.shape_23.setTransform(62.025,19.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#001E50").ss(1.5,0,1).p("Aowh8IRhAAIAAD5IxhAAg");
	this.shape_24.setTransform(63.05,19.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#001E50").ss(1.5,0,1).p("Ao2h8IRtAAIAAD5IxtAAg");
	this.shape_25.setTransform(63.725,19.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#001E50").ss(1.5,0,1).p("Ao7h8IR3AAIAAD5Ix3AAg");
	this.shape_26.setTransform(64.175,19.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#001E50").ss(1.5,0,1).p("Ao9h8IR7AAIAAD5Ix7AAg");
	this.shape_27.setTransform(64.425,19.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#001E50").ss(1.5,0,1).p("Ao1h8IRrAAIAAD5IxrAAg");
	this.shape_28.setTransform(63.6,19.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#001E50").ss(1.5,0,1).p("Aouh8IRdAAIAAD5IxdAAg");
	this.shape_29.setTransform(62.9,19.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#001E50").ss(1.5,0,1).p("Aoph8IRTAAIAAD5IxTAAg");
	this.shape_30.setTransform(62.4,19.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#001E50").ss(1.5,0,1).p("Aomh8IRNAAIAAD5IxNAAg");
	this.shape_31.setTransform(62.1,19.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#012153").ss(1.5,0,1).p("Aomh8IRNAAIAAD5IxNAAg");
	this.shape_32.setTransform(62.1,19.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#083264").ss(1.5,0,1).p("Aorh8IRXAAIAAD5IxXAAg");
	this.shape_33.setTransform(62.6,19.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#1D6496").ss(1.5,0,1).p("Ao6h8IR1AAIAAD5Ix1AAg");
	this.shape_34.setTransform(64.1,19.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#2D8CBD").ss(1.5,0,1).p("ApGh8ISNAAIAAD5IyNAAg");
	this.shape_35.setTransform(65.275,19.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#35A2D2").ss(1.5,0,1).p("ApMh8ISZAAIAAD5IyZAAg");
	this.shape_36.setTransform(65.925,19.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#3BAFDF").ss(1.5,0,1).p("ApQh8IShAAIAAD5IyhAAg");
	this.shape_37.setTransform(66.3,19.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#3EB8E8").ss(1.5,0,1).p("ApTh8ISnAAIAAD5IynAAg");
	this.shape_38.setTransform(66.575,19.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#41BEEE").ss(1.5,0,1).p("ApVh8ISrAAIAAD5IyrAAg");
	this.shape_39.setTransform(66.75,19.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#42C2F2").ss(1.5,0,1).p("ApWh8IStAAIAAD5IytAAg");
	this.shape_40.setTransform(66.875,19.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#43C4F4").ss(1.5,0,1).p("ApXh8ISvAAIAAD5IyvAAg");
	this.shape_41.setTransform(66.95,19.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#44C6F6").ss(1.5,0,1).p("ApXh8ISvAAIAAD5IyvAAg");
	this.shape_42.setTransform(67,19.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#3DC2F4").ss(1.5,0,1).p("Apkh8ITJAAIAAD5IzJAAg");
	this.shape_43.setTransform(68.25,19.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#38BEF2").ss(1.5,0,1).p("Apuh8ITdAAIAAD5IzdAAg");
	this.shape_44.setTransform(69.25,19.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#34BCF1").ss(1.5,0,1).p("Ap1h8ITrAAIAAD5IzrAAg");
	this.shape_45.setTransform(69.95,19.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#32BAF0").ss(1.5,0,1).p("Ap5h8ITzAAIAAD5IzzAAg");
	this.shape_46.setTransform(70.35,19.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#31BAF0").ss(1.5,0,1).p("Ap6h8IT1AAIAAD5Iz1AAg");
	this.shape_47.setTransform(70.5,19.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#30B7ED").ss(1.5,0,1).p("Ap5h8ITzAAIAAD5IzzAAg");
	this.shape_48.setTransform(70.375,19.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#2BA7DD").ss(1.5,0,1).p("Apzh8ITnAAIAAD5IznAAg");
	this.shape_49.setTransform(69.775,19.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#1C79AD").ss(1.5,0,1).p("Aphh8ITDAAIAAD5IzDAAg");
	this.shape_50.setTransform(67.975,19.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#115487").ss(1.5,0,1).p("ApTh8ISnAAIAAD5IynAAg");
	this.shape_51.setTransform(66.55,19.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#0B4073").ss(1.5,0,1).p("ApLh8ISXAAIAAD5IyXAAg");
	this.shape_52.setTransform(65.8,19.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#073366").ss(1.5,0,1).p("ApGh8ISNAAIAAD5IyNAAg");
	this.shape_53.setTransform(65.325,19.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#042B5E").ss(1.5,0,1).p("ApDh8ISHAAIAAD5IyHAAg");
	this.shape_54.setTransform(65,19.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#022658").ss(1.5,0,1).p("ApBh8ISDAAIAAD5IyDAAg");
	this.shape_55.setTransform(64.8,19.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#012254").ss(1.5,0,1).p("ApAh8ISAAAIAAD5IyAAAg");
	this.shape_56.setTransform(64.65,19.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#012052").ss(1.5,0,1).p("Ao/h8IR/AAIAAD5Ix/AAg");
	this.shape_57.setTransform(64.575,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23,p:{x:62.025}}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},20).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_23,p:{x:62}}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},1).wait(21).to({_off:false},0).wait(20).to({_off:true},1).wait(32).to({_off:false,x:64.525},0).wait(1).to({x:64.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,6,133,27);


(lib.Ani_Text_01_1line = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy 5
	this.instance = new lib.Text_01("single",5);
	this.instance.setTransform(87.15,20,1,1,0,0,0,51.2,15.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(42).to({_off:false},0).to({alpha:1},11,cjs.Ease.quadOut).wait(2));

	// Layer_1 copy 4
	this.instance_1 = new lib.Text_01("single",4);
	this.instance_1.setTransform(87.15,20,1,1,0,0,0,51.2,15.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({alpha:1},11,cjs.Ease.quadOut).wait(4));

	// Layer_1 copy 3
	this.instance_2 = new lib.Text_01("single",3);
	this.instance_2.setTransform(87.15,20,1,1,0,0,0,51.2,15.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).to({alpha:1},11,cjs.Ease.quadOut).wait(6));

	// Layer_1 copy 2
	this.instance_3 = new lib.Text_01("single",2);
	this.instance_3.setTransform(87.15,20,1,1,0,0,0,51.2,15.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).to({alpha:1},11,cjs.Ease.quadOut).wait(8));

	// Layer_1 copy
	this.instance_4 = new lib.Text_01("single",1);
	this.instance_4.setTransform(88.05,20.1,1.72,1.72,0,0,0,51.2,15.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({regY:15.2,scaleX:0.95,scaleY:0.95,x:88.1,y:20.35},9,cjs.Ease.quartOut).to({regY:15.1,scaleX:1,scaleY:1,x:87.15,y:20},14,cjs.Ease.quadInOut).wait(29));

	// Layer_1
	this.instance_5 = new lib.Text_01("single",0);
	this.instance_5.setTransform(88.05,20.1,1.72,1.72,0,0,0,51.2,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:15.2,scaleX:0.95,scaleY:0.95,x:88.1,y:20.35},9,cjs.Ease.quartOut).to({regY:15.1,scaleX:1,scaleY:1,x:87.15,y:20},14,cjs.Ease.quadInOut).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243.4,53.2);


(lib.Ani_Text_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ani_Text_01_1line
	this.instance = new lib.Ani_Text_01_1line("synched",0,false);
	this.instance.setTransform(86.2,30.65,1.947,1.947,0,0,0,82.2,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({startPosition:26},0).to({regY:19.9,scaleX:1,scaleY:1,x:46.25,y:15,startPosition:53},32,cjs.Ease.cubicInOut).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.8,-7.8,433.3,87.7);


(lib.Ani_Rim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ani_Tire
	this.instance = new lib.IMG_Rim_1("single",1);
	this.instance.setTransform(58.4,58.4,1,1,0,0,0,41.4,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:41.3,rotation:-517.2037,y:58.35},14,cjs.Ease.sineIn).to({regX:41.4,rotation:-720,y:58.4},24,cjs.Ease.cubicOut).wait(5).to({startPosition:1},0).to({_off:true},1).wait(3).to({_off:false},0).to({x:58.6,y:58.35},9,cjs.Ease.cubicInOut).wait(1));

	// Ani_Rim
	this.instance_1 = new lib.IMG_Rim_1("single",0);
	this.instance_1.setTransform(56.4,58.4,1,1,0,0,0,41.4,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-517.2037,x:56.3,y:58.35},14,cjs.Ease.sineIn).to({rotation:-720,x:56.4,y:58.4},24,cjs.Ease.cubicOut).wait(5).to({startPosition:0},0).to({_off:true},1).wait(3).to({_off:false},0).to({x:58.6,y:58.35},9,cjs.Ease.cubicInOut).wait(1));

	// Fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#07060A").s().p("Ah3FJQhQgSg2gvQgcgYgMgbQgQgiALgdQAKgaAigWQAxggBFgJQAJgBADgDQADgCABgDQABgEgCgCQhMgBhCghQgzgYgLgkQgEgJgCgaQgDgvAKgWIALgZQABgFgBgJIgBgNQgCgmAqgjQAmghA9gQQAugMBAAAQB/ABBVAvQAuAZAqAsQAgAfAQAdQAcAuAOBUQAGAqABAbQABAbgDAbQgDAfgHARQgFANgPAXIgOAgQgOAcgiAaQgqAigzASQgxAShCAFQgaACgXAAQg2AAgugKg");
	this.shape.setTransform(61.1033,58.1756);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(43).to({_off:true},1).wait(3).to({_off:false},0).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.8,1.8,113.10000000000001,112.7);


(lib.Ani_Car = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgZICQhCgQgrgoIhXAPQgeAFgRAHIgQAHQgKAEgHACQgJACgUAAIhjgBQgRAAgIgBQgRgEgUgOQgngcgWgsQgXgsABgwQABgwAYgrQAYgrAogaQAPgJAfgRIAhgVQARgKAQgHQBZgBBdgEIAagFIAVgFIAKgRIAAgCIAYihIAci1IAGgdIAGgUIAAgBIAGgRIAAgBQAHgPALgTIAIgNIACgEQAPghAYgaQAagaAggPQAwgXA5AGQA2AFAwAcQAQAKAbAUIArAfQANAJAuAZQAlAUAUAQQArAiAbA2QAZAyAHA7QAIBEgPBGQgQBDglA7QgRAbgaAfQgNARgiAlIgCADIAAABQACAigKAhQgJAhgVAbQgJANgRASIgcAcIgUAYQgNAOgJAJQg+A5h6AKQgWABgVAAQguAAgmgIg");
	mask.setTransform(194.9106,133.6407);

	// Ani_Wheel_Front
	this.instance = new lib.Ani_Rim("synched",0,false);
	this.instance.setTransform(197.95,126.15,0.35,0.8502,0,0,0,59.9,59);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({startPosition:47},0).to({regX:59.6,regY:59.1,scaleX:0.6,scaleY:0.8497,x:197.7,y:126.1,mode:"single",startPosition:56},12,cjs.Ease.quadInOut).wait(139));

	// Carrosserie
	this.instance_1 = new lib.IMG_Car_1("single",0);
	this.instance_1.setTransform(263.5,217,1,1,0,0,0,387.5,217);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({startPosition:0},0).wait(1).to({regX:269.8,regY:81.5,rotation:-0.0388,x:145.8,y:81.55},0).wait(1).to({rotation:-0.1067,x:145.75,y:81.7},0).wait(1).to({rotation:-0.2012,x:145.7,y:81.9},0).wait(1).to({rotation:-0.3118,x:145.6,y:82.15},0).wait(1).to({rotation:-0.4242,x:145.55,y:82.35},0).wait(1).to({rotation:-0.5283,x:145.45,y:82.6},0).wait(1).to({rotation:-0.6196,x:145.4,y:82.8},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-0.6975,x:145.35,y:82.95},0).wait(1).to({rotation:-0.7631,x:145.3,y:83.1},0).wait(1).to({rotation:-0.8178,x:145.25,y:83.2},0).wait(1).to({rotation:-0.8631,y:83.35},0).wait(1).to({rotation:-0.9001,y:83.4},0).wait(1).to({rotation:-0.9301,x:145.15,y:83.45},0).wait(1).to({rotation:-0.9538,y:83.5},0).wait(1).to({rotation:-0.972,x:145.2,y:83.6},0).wait(1).to({rotation:-0.9854,x:145.15,y:83.55},0).wait(1).to({rotation:-0.9944,y:83.6},0).wait(1).to({rotation:-0.9995},0).wait(1).to({regX:387.4,regY:217.1,rotation:-1.0012,x:265.1,y:217.05},0).to({regX:387.5,regY:217,scaleX:1,scaleY:1,rotation:0,x:263.5,y:217},11,cjs.Ease.quadInOut).wait(151));

	// Ani_Wheel_Back
	this.instance_2 = new lib.Ani_Rim("synched",0,false);
	this.instance_2.setTransform(269,108.5,0.19,0.64,0,0,0,60.6,59.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({mode:"single",startPosition:49},0).wait(157));

	// Paint
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnEFrQgWgIgPgSQgQgRgHgWQgFgUACgZQABgRAGgdIAThaQALg0AKgcQAQgqAagZQALgKAAgHQAAgDgEgJQgRgiAJglQALgqArgeQAXgRA5gaQAugUAZgHQApgLAgAKQAWAGASAPQARAPAKAUQAJAVAAAXQAAAXgJAVQgHAQABAGQABAIAKALQATAUAOAXQAZAoALAoQAHAcAEAtQAEAigBASQgDAlgYAdQgaAfgjADQgXADgcgKQgPgFghgQQg1gXg1gRQAAApgEAXQgHAigSAaQgUAdgcAOQgUAKgYACIgEAAQgVAAgTgIgAE3CyQgfgGgXgXQgYgXgGgeIgBgQIgFgBQgogLgYgKQhLghgTg5QgLgjAOglQAPglAggSQAggSAnAGQAmAHAZAbQgLgqgHgrQgGgqAFgYQAFgXAPgUQAQgTAVgKQAWgLAZABQAYAAAWALIAQAKIAQAJQAOAHAdAJQAjANAQAgQAHAOADAVQACAMAAAaQABBAgCAmQgEA4gKAtQgLAugSAbQgOAWgSANQgHATgNAQQgUAXgeAKQgTAHgTAAQgKAAgLgCg");
	this.shape.setTransform(220.1033,104.5041);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(195));

	// Bottom
	this.instance_3 = new lib.IMG_Car_1("single",2);
	this.instance_3.setTransform(218.7,114.9,1,1,0,0,0,342.7,114.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(195));

	// Bottom_Shadow_Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AllMpQlDgWiBgTQhegOAwgXQAhgQBLgNQgkAAgmgNQgpgPArgIQGIhKCpgQQAAgBDmACIDlADIJhARQAuAmAwAoQBgBSAJASQjiAeixANQitANjjACIgfAAQjDAAlRgYg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AllMpQlDgWiBgTQhegOAwgXQAhgQBLgNQgkAAgmgNQgpgPArgIQGIhKCpgQQAAgBDmACIDlADIJhARQAuAmAwAoQBgBSAJASQjiAeixANQitANjjACIgfAAQjDAAlRgYg");
	var mask_1_graphics_5 = new cjs.Graphics().p("Am/MwQlSgYiHgUQhhgOA3gaQAmgSBQgOQglAAgngPQgpgQAvgJQGrhTC3gSQgBgCD0ABIDzACIKCAQQAsApAsAtQBZBZAGAUQj0Aji+APQi6APjwADIgxABQjMAAlVgYg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AnrM2QlhgYiLgVQhkgQA8gcQArgTBXgQQgoAAgngQQgpgRAzgKQHNhbDDgVQAAgCEAAAID/ABIKjAQQAoAsApAwQBRBgAFAWQkGAnjLARQjFAQj+AFIhBABQjVAAlYgYg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AoKM7QlvgYiPgWQhngQBDgeQAvgVBdgSQgqABgngRQgpgTA2gKQHuhjDOgXQAAgCENgBIELABILBAOQAlAvAlAzQBKBnACAWQkXArjWASQjQATkLAGIhRABQjdAAlbgYg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AomNAQl8gYiTgXQhqgRBJggQAygWBjgSQgrAAgngSQgpgTA5gLQINhqDZgZQABgCEXgBIEXgBILdANQAiAyAhA1QBDBsAAAYQknAujhAUQjbAUkWAHIhiABQjjAAldgXg");
	var mask_1_graphics_9 = new cjs.Graphics().p("ApCNFQmIgZiWgYQhsgQBOgiQA3gYBogTQguABgmgTQgpgUA9gMQIphvDkgbQABgCEhgCIEigBIL4ALQAeA0AeA4QA8BwgCAZQk2AwjsAWQjlAVkhAJQg1ABg8AAQjpAAlggWg");
	var mask_1_graphics_10 = new cjs.Graphics().p("ApbNJQmTgZiagYQhugRBTgjQA6gZBtgUQgvABgmgTQgogVA/gMQJFh1DtgcQABgDErgCIEtgCIMQAKQAcA1AaA6QA1B0gEAaQlFAzj1AXQjuAXksAJQg7AChEAAQjvAAlhgWg");
	var mask_1_graphics_11 = new cjs.Graphics().p("ApzNMQmegYicgZQhxgRBYglQA+gZBygVQgwACgmgUQgpgVBCgOQJfh5D3gdQABgDE0gDIE1gDIMoAJQAYA3AXA7QAvB4gGAaQlSA1j+AZQj3AXk1ALQhDAChMAAQjzAAligWg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AqKNQQmngZifgZQhzgRBdgmQBBgaB2gVQgxABgmgUQgogWBFgNQJ3h+D+geQACgDE9gEIE9gDIM9AHQAWA4AUA9QAoB7gIAbQleA3kGAZQkAAZk+ALQhJAChUAAQj3AAljgUg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AqfNSQmwgYiigZQh0gSBhgmQBEgaB7gXQgzACgmgVQgogWBHgOQKOiBEGgfQACgDFFgEIFGgEINQAGQATA5ARA+QAjB9gKAbQlqA5kOAaQkHAalHAMQhOAChdAAQj6AAljgUg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AqyNVQm5gYikgZQh2gSBlgnQBHgbB+gXQg0ACglgVQgogWBKgPQKiiEEOggQABgDFNgFIFNgEINiAFQARA5AOA/QAdB/gLAcQl0A6kWAbQkOAblOAMQhVADhkAAQj8AAljgTg");
	var mask_1_graphics_15 = new cjs.Graphics().p("ArFNXQnAgYimgZQh3gSBpgnQBJgcCCgXQg2ACglgVQgngXBMgOQK1iHEUghQACgDFTgGIFUgFIN0AEQAOA7AMA/QAYCBgNAcQl+A7kcAcQkVAblWANQhaAEhsAAQj+AAljgTg");
	var mask_1_graphics_16 = new cjs.Graphics().p("ArWNZQnHgXiogaQh5gSBtgoQBMgcCFgXQg3ACglgWQgngWBOgPQLHiJEbghQABgDFagHIFagFIODADQAMA7AJBAQATCBgOAdQmHA8kiAdQkbAclcANQhfAEh0AAQkAAAligSg");
	var mask_1_graphics_17 = new cjs.Graphics().p("ArlNbQnOgXipgaQh7gSBwgoQBOgcCIgYQg3ACglgWQgngXBPgOQLXiLEhgiQACgDFfgHIFggGIOQACQALA7AHBBQAPCCgQAdQmPA9koAeQkgAcliAOQhkAEh7AAQkCAAlggRg");
	var mask_1_graphics_18 = new cjs.Graphics().p("Ar0NcQnTgWirgaQh8gSBzgpQBQgcCLgZQg5ADgkgWQgngXBRgPQLmiMElgjQADgDFkgHIFlgGIOdAAQAJA8AFBBQALCDgRAeQmXA+ktAdQklAdloAPQhpAEiBAAQkCAAlggRg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AsBNdQnZgWisgZQh9gSB2gpQBSgdCMgZQg5ACgkgVQgngXBTgPQLziOEqgjQACgDFpgIIFqgGIOpgBQAHA9ADBBQAHCEgRAdQmeA/kyAeQkpAdltAPQhtAFiIAAQkDAAlegRg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AsONeQndgViugaQh9gSB4gpQBTgdCPgZQg5ACglgVQgmgXBTgPQMAiPEugkQADgDFtgIIFtgHIO0gBQAGA8ABBCQAECEgTAeQmkA/k2AfQktAdlxAQQhyAFiNAAQkEAAldgRg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AsZNfQnhgVivgZQh/gSB6gqQBVgdCRgZQg6ACgkgVQgmgXBUgQQMKiQEzgkQACgDFxgIIFxgHIO9gCQAFA9AABCQAACEgTAeQmqA/k5AfQkxAel1AQQh2AFiTAAQkEAAlbgQg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AskNgQnlgViwgZQh/gSB8gqQBWgdCTgZQg7ACgkgVQgmgXBWgQQMTiRE2gkQADgDF0gJIF1gHIPFgDQADA9gBBCQgCCFgUAeQmvBAk9AfQk0Ael5AQQh5AGiYAAQkEAAlagQg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AsuNhQnogVixgZQh/gSB9gqQBYgdCUgZQg7ACgkgWQgmgXBWgPQMciSE5gkQADgDF3gJIF4gIIPMgDQACA9gCBCQgECFgVAeQmzBAlAAgQk3Ael8AQQh8AGidAAQkEAAlZgPg");
	var mask_1_graphics_24 = new cjs.Graphics().p("As2NhQnrgUiygZQiAgSB/gqQBYgdCWgaQg8ADgkgWQgmgXBYgQQMjiSE7glQADgDF6gJIF6gIIPTgDQABA9gDBCQgGCFgWAeQm3BBlCAfQk6Afl+ARQh/AFihAAQkEAAlXgPg");
	var mask_1_graphics_25 = new cjs.Graphics().p("As+NiQnugUiygZQiAgSCAgqQBZgeCXgZQg8ACgkgVQgmgXBYgQQMqiTE+glQACgDF8gJIF9gIIPYgEQABA9gFBCQgICFgVAeQm7BBlEAgQk8AfmBARQiCAFijAAQkFAAlWgOg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AtFNiQnvgUizgZQiBgRCBgrQBagdCYgaQg8ADgkgWQgmgXBZgQQMviTE/glQADgDF+gJIF/gJIPdgEQAAA9gGBCQgJCGgWAeQm9BBlHAgQk+AfmCARQiEAGinAAQkEAAlWgPg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AtKNjQnygUizgZQiBgSCBgqQBbgdCZgaQg9ACgjgVQgmgXBZgQQM0iUFBglQADgDGAgJIGAgJIPhgFQgBA9gGBDQgKCFgXAeQnABClIAgQk/AfmEARQiHAGipAAQkEAAlUgOg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AtPNjQnzgUi0gZQiBgRCCgrQBcgdCZgaQg9ADgjgWQgmgXBagQQM3iUFDglQADgDGBgJIGBgJIPkgFQgBA9gGBCQgMCGgXAeQnBBBlKAgQlAAgmGARQiIAGisAAQkEAAlTgOg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AtTNjQn0gUi0gYQiCgSCDgqQBcgeCagaQg9ADgkgWQglgXBagQQM7iTFDgmQADgDGCgKIGDgIIPngGQgCA9gGBDQgNCFgXAeQnDBClLAgQlCAgmHARQiJAGitAAQkEAAlTgOg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AtWNjQn1gTi1gZQiCgRCEgrQBcgdCbgaQg9ACgkgVQgmgXBbgQQM9iUFFgmQADgDGCgKIGEgIIPpgGQgCA9gHBDQgNCFgYAeQnEBClLAgQlDAgmIARQiKAGivAAQkEAAlSgOg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AtZNkQn1gUi1gZQiCgRCEgrQBcgdCbgaQg9ACgkgVQglgXBagQQNAiUFFgmQADgDGEgKIGEgIIPrgGQgCA9gIBCQgOCGgXAeQnGBClMAgQlDAfmJASQiLAGiwAAQkEAAlSgNg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AtaNkQn3gUi1gYQiCgSCFgqQBcgeCbgaQg9ADgkgWQglgXBbgQQNBiUFFgmQADgDGEgKIGFgJIPsgFQgCA9gIBCQgOCGgYAeQnGBClNAgQlDAfmJASQiMAGixAAQkEAAlRgNg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AtcNkQn3gUi0gYQiDgSCFgqQBdgeCbgaQg9ADgkgWQgmgXBbgQQNCiUFGgmQADgDGFgKIGFgJIPtgFQgCA9gIBCQgPCGgYAeQnGBBlNAhQlEAfmKASQiMAGiyAAQkDAAlSgNg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AtdNkQn3gUi1gYQiCgSCFgqQBdgeCbgaQg9ADgkgWQglgXBagQQNDiUFGgmQADgDGFgKIGFgJIPugGQgCA9gIBDQgPCFgYAeQnHBClNAhQlEAfmKASQiNAGiyAAQkDAAlSgNg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AtdNkQn3gUi1gYQiDgSCFgqQBdgeCbgaQg9ADgkgWQglgXBbgQQNDiUFHgmQADgDGEgKIGGgJIPugGQgCA9gIBDQgPCFgYAeQnIBClNAhQlEAfmKASQiNAGizAAQkDAAlRgNg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AtdNkQn4gUi1gYQiCgSCFgqQBdgeCbgaQg9ADgkgWQglgXBbgQQNDiUFHgmQADgDGFgKIGFgJIPugGQgCA9gIBDQgPCFgYAeQnHBClOAhQlEAfmKASQiNAGizAAQkDAAlRgNg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AtdNkQn4gUi1gYQiCgSCFgqQBdgeCbgaQg9ADgkgWQglgXBbgQQNDiUFHgmQADgDGFgKIGFgJIPvgGQgDA9gIBDQgPCFgYAeQnHBClOAhQlEAfmKASQiNAGizAAQkEAAlQgNg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AtdNkQn4gUi1gYQiCgSCFgqQBdgeCbgaQg9ADgkgWQglgXBbgQQNDiUFHgmQADgDGFgKIGFgJIPvgGQgDA9gIBDQgPCFgYAeQnHBClOAhQlEAfmKASQiNAGizAAQkEAAlQgNg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:100.897,y:83.3223}).wait(4).to({graphics:mask_1_graphics_4,x:100.897,y:83.3223}).wait(1).to({graphics:mask_1_graphics_5,x:100.7351,y:83.9745}).wait(1).to({graphics:mask_1_graphics_6,x:96.4592,y:84.5576}).wait(1).to({graphics:mask_1_graphics_7,x:91.2394,y:85.0746}).wait(1).to({graphics:mask_1_graphics_8,x:86.3039,y:85.5298}).wait(1).to({graphics:mask_1_graphics_9,x:81.6567,y:85.9276}).wait(1).to({graphics:mask_1_graphics_10,x:77.3002,y:86.2731}).wait(1).to({graphics:mask_1_graphics_11,x:73.2322,y:86.5713}).wait(1).to({graphics:mask_1_graphics_12,x:69.449,y:86.8273}).wait(1).to({graphics:mask_1_graphics_13,x:65.9457,y:87.0457}).wait(1).to({graphics:mask_1_graphics_14,x:62.7165,y:87.2311}).wait(1).to({graphics:mask_1_graphics_15,x:59.7547,y:87.3878}).wait(1).to({graphics:mask_1_graphics_16,x:57.0531,y:87.5195}).wait(1).to({graphics:mask_1_graphics_17,x:54.6036,y:87.6296}).wait(1).to({graphics:mask_1_graphics_18,x:52.3978,y:87.7214}).wait(1).to({graphics:mask_1_graphics_19,x:50.4266,y:87.7975}).wait(1).to({graphics:mask_1_graphics_20,x:48.6804,y:87.8604}).wait(1).to({graphics:mask_1_graphics_21,x:47.1488,y:87.9121}).wait(1).to({graphics:mask_1_graphics_22,x:45.8325,y:87.9545}).wait(1).to({graphics:mask_1_graphics_23,x:44.7007,y:87.9891}).wait(1).to({graphics:mask_1_graphics_24,x:43.7302,y:88.0172}).wait(1).to({graphics:mask_1_graphics_25,x:42.9032,y:88.04}).wait(1).to({graphics:mask_1_graphics_26,x:42.2041,y:88.0583}).wait(1).to({graphics:mask_1_graphics_27,x:41.6158,y:88.0729}).wait(1).to({graphics:mask_1_graphics_28,x:41.1253,y:88.0845}).wait(1).to({graphics:mask_1_graphics_29,x:40.7237,y:88.0935}).wait(1).to({graphics:mask_1_graphics_30,x:40.4022,y:88.1005}).wait(1).to({graphics:mask_1_graphics_31,x:40.1517,y:88.1058}).wait(1).to({graphics:mask_1_graphics_32,x:39.9635,y:88.1097}).wait(1).to({graphics:mask_1_graphics_33,x:39.8287,y:88.1124}).wait(1).to({graphics:mask_1_graphics_34,x:39.7383,y:88.1142}).wait(1).to({graphics:mask_1_graphics_35,x:39.6835,y:88.1153}).wait(1).to({graphics:mask_1_graphics_36,x:39.6553,y:88.1159}).wait(1).to({graphics:mask_1_graphics_37,x:39.6449,y:88.1161}).wait(1).to({graphics:mask_1_graphics_38,x:39.7435,y:88.1161}).wait(157));

	// VEC_Radial_Gradient copy 3
	this.instance_4 = new lib.VEC_Radial_Gradient("synched",0);
	this.instance_4.setTransform(183.2,151.85,3.8978,1.06,-4.4775,0,0,25.1,25.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({alpha:1},3).wait(191));

	// VEC_Radial_Gradient copy 2
	this.instance_5 = new lib.VEC_Radial_Gradient("synched",0);
	this.instance_5.setTransform(183.2,151.85,3.8978,1.06,-4.4775,0,0,25.1,25.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({alpha:1},3).wait(191));

	// VEC_Radial_Gradient copy 4
	this.instance_6 = new lib.VEC_Radial_Gradient("synched",0);
	this.instance_6.setTransform(83.1,140.35,6.0417,1.643,-0.0005,0,0,25.1,25.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({alpha:1},3).wait(191));

	// VEC_Radial_Gradient copy
	this.instance_7 = new lib.VEC_Radial_Gradient("synched",0);
	this.instance_7.setTransform(95.25,140.25,3.8979,1.06,-0.0008,0,0,25.1,25.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({alpha:1},3).wait(191));

	// Bottom_Shadow_02
	this.instance_8 = new lib.VEC_Bottom_Shadow("single",1);
	this.instance_8.setTransform(189.6,150.2,1,1,0,0,0,311,22.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({alpha:1},3).wait(186));

	// Bottom_Shadow_01
	this.instance_9 = new lib.VEC_Bottom_Shadow("single",0);
	this.instance_9.setTransform(189.6,154.1,0.61,0.9984,0,-52.1166,1.9998,311.1,22.2);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({alpha:1},0).to({regX:311,scaleX:1,scaleY:1,skewX:0,skewY:0,y:150.2},34,cjs.Ease.cubicOut).wait(157));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.6,-0.2,400.9,177);


(lib.Ani_Visuals = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// IMG_Car_Shadow (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EBBLAU2QgrgIgignQgfgjgMguIhAgBIhBAAIgWAAIgWgDIg5AAIg5AAQgqgBhUgHQhUgIgqgBIghAAIgiAAQggBChHATQg/ARhLgVQhEgUgghTQgGAAgNgGQgOgGgDAAIgCACQgBABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgBgKgGgSQgGgTAAgJQgBgKACgPIACgXIgDg/QgDgmADgYIACgdQADgXACgEQAEgJAUg/QALgkAmhLQAZgvAzgaQAhgQBFgQIAygIQAkgHADgLIAAgFIAAgFIgDAAQgDgBgCgEQgGgOAFgMQAFgMAMgIQAEgCAFAAIAGgBQATgHALgCQAPgEARADQA6g/AqglQBFg9AwgMIAYgEIA0gVQAagKAdAAQAvAAChgDQB/gCBNACIAigBIAjgCQAYgDANgFQAOgEAVgBQAPgBAfAEQBAAJA9AhQA/AiAlAxIAPAUIAMASIARAhIATAkQAHAQAWAZQAXAaAHAOQAGAMADAcIAGAsIARAzQAKAeACAcQADA1gDBSIgHCHQgCAugMAfQgSAsgjADQgmAEgXgIQgcgIgSgeQgDgGgLgfQgJgdgDgBIjFA6IgMAGQgNAGgKACQgGAwgGAeQgKAzgPAaQgOAXgLALQgNANgQAEQgUAGgnACIgaABQgUAAgMgCg");
	var mask_graphics_1 = new cjs.Graphics().p("EBBIAU2QgrgHghgoQgfgjgMguIhBAAIhAAAIgWgBIgXgCIg5AAIg5AAQgqgChUgGQhVgIgpgBIgiAAIgiAAQggBBhHAUQg/ARhLgWQhEgUgghTQgHABgNgGQgOgGgDAAIgCACQAAAAgBABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgKgGgSQgGgSgBgKQAAgKACgPIACgXIgEg/QgCgmACgZIADgdQADgWABgEQAEgKAVg/QAKgkAnhLQAZgvAzgZQAhgRBFgQIAygIQAkgHADgLIAAgFIAAgFIgCAAQgDAAgCgFQgGgNAFgNQAEgMANgHQAEgDAEAAIAHgBQATgHALgCQAPgDARACQA5g/AqglQBGg9AwgMIAYgFIA0gVQAagJAdAAQAvAAChgDQCAgCBNABIAiAAIAjgDQAYgDANgEQAOgFAWgBQAPAAAeADQBAAJA9AhQBAAjAlAxIAOAUIANASIARAhIATAkQAHAQAWAaQAXAaAHANQAGAMADAdIAGArIARA0QAKAeACAbQADA2gDBSIgHCHQgCAugMAfQgSAsgjAEQgmAEgXgIQgcgJgSgeQgDgFgLggQgJgdgDgBIjFA7IgNAFQgMAGgLACQgGAxgFAdQgLAzgPAaQgOAYgLALQgMANgRAEQgUAGgnACIgaAAQgUAAgNgCg");
	var mask_graphics_2 = new cjs.Graphics().p("EBBCAU4QgrgHgigoQgfgjgMguIhBgBIhBAAIgWAAIgXgDIg5AAIg6AAQgqgBhUgHQhVgIgqgBIgiAAIgiAAQggBChIATQg/AShMgWQhEgUgghUQgHABgNgGQgOgGgDAAIgCACQgBAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAgKgHgSQgGgTAAgJQgBgKACgQIACgWIgDhAQgDgnADgYIACgdQADgXACgEQAEgJAUhAQALgkAnhMQAZgvAzgZQAhgRBGgQIAygIQAkgHADgLIAAgFIAAgFIgCAAQgDgBgCgEQgGgOAFgMQAEgNANgHQAEgCAEgBIAHgBQATgHALgCQAPgDARACQA7hAAqgkQBGg+AwgMIAZgFIA0gVQAagJAdAAQAvAACigDQCAgCBOABIAiAAIAkgDQAYgDANgEQAOgFAWgBQAPgBAfAEQBAAJA9AhQBAAjAlAyIAPAUIAMASIASAhIATAlQAHAQAXAZQAWAaAHAOQAGAMADAdIAGArIASA0QAJAeACAcQAEA2gDBSIgICIQgCAvgMAeQgSAtgiAEQgoAEgWgIQgdgJgSgeQgDgFgLggQgJgdgDgBIjGA6IgMAGQgNAGgLACQgGAxgFAdQgLA0gPAaQgPAYgKALQgNANgRAEQgUAGgnACIgaAAQgUAAgNgCg");
	var mask_graphics_3 = new cjs.Graphics().p("EBA4AU8QgsgIgigoQgfgjgNgvIhBgBIhCAAIgWAAIgXgDIg6AAIg6AAQgrgBhVgHQhWgIgqgBIgiAAIgiAAQghBDhIATQhAAShMgXQhFgUghhUQgHAAgNgGQgOgGgDAAIgCACQgDACgCAAQAAgKgHgTQgGgSgBgKQAAgKACgQIACgXIgEg/QgCgoACgYIADgeQADgXACgEQAEgJAVhAQAKglAnhNQAagvAzgaQAigRBGgQIAzgIQAkgHAEgLIAAgGIAAgEIgDAAQgDgBgCgEQgGgOAFgNQAEgNAOgHQADgCAFgBIAHgBQATgHALgCQAPgDARACQA7hAArglQBGg+AxgMIAZgFIA1gVQAagKAdAAQAwAACkgDQCBgCBOABIAjAAIAkgDQAYgDANgEQAOgFAWgBQAQgBAfAEQBBAJA+AiQBAAjAmAyIAPAUIAMASIASAiIATAlQAHAQAXAaQAXAaAHAOQAGAMADAdIAGAsIARA0QAKAfACAcQAEA3gEBSIgHCKQgCAvgMAfQgSAtgjAEQgoADgXgIQgdgJgSgeQgDgFgLggQgJgdgDgCIjIA8IgNAFQgMAGgLACQgGAygGAdQgKA0gQAbQgOAYgLALQgNANgRAEQgUAGgoACIgaABQgVAAgMgCg");
	var mask_graphics_4 = new cjs.Graphics().p("EBAqAVAQgtgHgigpQgggkgMgvIhDgBIhCAAIgXAAIgXgDIg7AAIg6AAQgsgBhWgHQhXgIgrgBIgiAAIgjAAQghBDhKAUQhAAShOgXQhFgUghhWQgHABgNgGQgPgGgDAAIgCACQgDACgCgBQAAgKgHgTQgGgTgBgKQAAgKACgPIACgYIgEhAQgCgoACgZIADgeQADgXACgEQAEgKAVhBQALglAnhNQAagxA0gaQAigRBIgQIAzgIQAlgHADgMIAAgFIAAgFIgCAAQgEgBgCgEQgGgOAFgNQAFgNANgHQAEgCAFgBIAHgBQATgIALgCQAPgDASACQA8hBArglQBHg/AygMIAZgFIA1gWQAbgJAdAAQAxAACmgEQCDgCBPACIAjgBIAkgCQAZgDANgFQAOgEAXgBQAPgBAgAEQBCAJA+AiQBCAkAmAyIAPAUIAMATIATAiIATAlQAHARAXAaQAYAaAHAOQAGANADAdIAGAtIASA1QAKAfABAcQAEA3gDBUIgICMQgCAvgMAfQgSAugkAEQgoAEgXgIQgdgJgTgfQgDgGgLggQgJgegDgBIjLA8IgNAGQgNAGgLACQgGAygFAeQgLA1gQAbQgOAYgLALQgNANgRAFQgVAGgoACIgbABQgVAAgMgDg");
	var mask_graphics_5 = new cjs.Graphics().p("EBAYAVGQgtgIgjgpQghgkgMgwIhEgBIhDAAIgXAAIgYgDIg7AAIg8AAQgsgChYgHQhYgIgsgBIgjAAIgjAAQgiBFhKAUQhCAShPgXQhHgVghhXQgHABgOgGQgOgHgDAAIgDACQgCADgDgBQAAgKgGgTQgHgUAAgKQgBgKACgQIACgYIgDhBQgDgpADgZIACgeQADgYACgEQAEgKAWhCQALgmAohOQAagyA1gaQAigRBJgRIA0gIQAmgHADgMIAAgFIAAgFIgCAAQgEgBgCgEQgGgPAFgNQAFgNANgIQAEgCAFAAIAHgBQAUgIALgCQAQgDARACQA9hCAsgmQBIhAAzgMIAZgFIA2gWQAcgKAeAAQAxAACogEQCFgCBRACIAkgBIAlgCQAYgDAOgFQAPgFAWgBQAQAAAgAEQBDAJBAAiQBCAlAnAzIAPAVIANASIASAjIAUAmQAIARAXAaQAYAbAHAPQAGAMADAeIAGAtIASA2QAKAgACAcQAEA5gDBVIgICOQgCAwgMAgQgTAugkAEQgpAEgXgIQgegKgTgfQgDgFgLghQgKgegDgBIjOA8IgNAGQgNAHgLACQgGAygGAfQgLA1gQAcQgPAYgLAMQgNANgSAFQgVAGgoACIgcAAQgUAAgNgCg");
	var mask_graphics_6 = new cjs.Graphics().p("EBACAVNQgugIgkgqQggglgNgxIhFgBIhFAAIgXAAIgYgDIg9AAIg9AAQgtgBhZgIQhagIgtgBIgjAAIgkAAQgiBGhNAUQhCAThRgXQhIgVgihZQgHAAgOgGQgPgGgDAAIgCACQgDACgCgBQgBgKgGgTQgHgUgBgKQAAgLACgQQACgRAAgHIgEhDQgCgpACgaIADgfQADgYACgEQAEgLAWhDQALgmAphQQAbgyA2gbQAjgSBKgRIA1gIQAngIADgLIAAgGIAAgFIgDAAQgDgBgCgEQgGgPAFgNQAFgOANgHQAEgCAFgBIAHgBQAUgIAMgCQAQgDASACQA+hDAsgnQBKhBA0gNIAagFIA3gWQAcgKAeAAQAyAACsgEQCIgCBSACIAkgBIAmgCQAZgEAOgEQAPgFAXgBQAQgBAhAEQBEAKBBAjQBEAlAnA0IAQAVIANATIASAjQAOAaAGANQAIARAYAbQAYAcAHAOQAGANAEAeIAGAvIASA3QALAgACAdQADA5gDBXIgICRQgCAxgMAgQgTAvglAEQgqAEgYgIQgegJgTggQgDgGgMgiQgKgegDgBIjSA+IgNAGQgNAGgLACQgHA0gGAfQgLA3gQAcQgPAZgLALQgOAOgSAFQgVAGgpACIgdABQgVAAgNgDg");
	var mask_graphics_7 = new cjs.Graphics().p("EA/pAVVQgugIglgrQghgmgOgyIhGAAIhGAAIgYgBIgZgDIg+AAIg+AAQgugBhbgIQhcgIgugBIgkAAIglAAQgjBHhOAVQhEAThSgYQhJgVgjhbQgIABgOgHQgPgGgDAAIgDACQgCACgDgBQAAgKgHgUQgHgUAAgLQgBgLACgQQADgRAAgIIgEhEQgCgqACgaIADggQADgYACgFQAEgKAWhFQAMgnAqhSQAbgzA3gcQAkgSBMgRIA2gJQAngHADgMIAAgGIAAgFIgCAAQgEgBgCgEQgGgQAFgNQAFgOAOgHQAEgDAFAAIAHgCQAVgHALgDQARgDASACQA/hEAugoQBMhCA0gNIAbgFIA4gXQAcgKAgAAQAzAACvgEQCLgCBUABIAlAAIAmgDQAagDAOgFQAPgFAYgBQAQgBAiAEQBGAKBCAkQBFAmAoA1IAQAWIAOATIATAkQAOAaAGAOQAIARAYAcQAZAcAHAPQAHANADAfIAHAvIASA4QALAhACAeQAEA7gEBYIgICUQgCAygNAhQgTAwgmAEQgqAFgZgJQgfgKgTggQgDgGgMgiQgKgfgDgCIjXBAIgNAGQgOAGgLADQgHA0gGAgQgLA4gRAcQgPAagMAMQgOAOgSAFQgWAGgqACIgdABQgVAAgOgDg");
	var mask_graphics_8 = new cjs.Graphics().p("EA/OAVfQgwgJgmgsQgigngOgzIhHgBQgyABgXgBIgYAAIgZgDIhAAAQgpABgWgBQgvgBhegIQhegJgvgBIglAAQgZABgMgBQgkBJhQAWQhGAThTgYQhMgWgkhdQgHAAgPgGQgPgHgEAAIgCACQgDADgCgBQgBgLgGgUQgIgVAAgLQgBgLADgQQACgSAAgIIgEhGQgCgrACgbIADggQADgZACgFQAFgKAWhHQAMgoArhUQAcg0A4gcQAlgTBNgSIA4gIQAogIADgMIAAgGIAAgFQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgEgBgCgFQgGgPAFgOQAFgOAOgIQAFgCAEgBIAIgBQAVgIAMgCQARgEATACQBAhGAvgoQBNhEA2gOIAbgFIA6gXQAdgLAgAAQA0AAC0gDQCOgDBWACIAmgBIAngCQAbgEAOgFQAQgFAYgBQARAAAiAEQBHAKBEAkQBHAnApA3IAQAWIAOAUIAUAkQAOAbAHAOQAIASAYAcQAaAdAHAPQAHAOADAfIAHAxIATA5QALAiACAeQAEA8gEBbIgICXQgCAzgNAjQgUAxgnAEQgrAEgZgIQgggKgUgiQgDgFgMgkQgLgggDgBIjbBBIgOAGQgOAHgMACQgGA2gHAhQgLA5gSAdQgPAagMAMQgOAPgTAFQgWAGgrACIgeABQgWAAgNgCg");
	var mask_graphics_9 = new cjs.Graphics().p("EA+vAVoQgxgIgmgtQgjgogOg0IhKgBQgzABgXgBIgZgBIgagDIhBAAQgqABgXgBQgwgBhggIQhhgJgwgBIgmAAQgaABgMgBQglBLhRAWQhIAUhWgZQhOgXgkhfQgIABgPgHQgQgHgDAAIgCACQgDADgDgBQAAgLgHgVQgIgVAAgLQgBgMACgRQADgSAAgIIgEhHQgCgtACgbIADgiQADgZACgFQAFgLAXhIQAMgpAshWQAdg2A6gdQAlgTBQgSIA4gJQAqgIADgMIAAgGIAAgGQAAAAgBABQAAAAAAAAQgBAAAAAAQAAgBgBAAQgDAAgCgFQgHgQAFgOQAGgPAOgIQAFgCAFgBIAHgBQAWgIAMgCQARgEAUACQBChIAwgpQBPhGA4gOIAbgFIA7gYQAegLAhAAQA2AAC4gEQCRgCBYACIAngBIApgCQAbgEAPgFQAQgFAYgBQASgBAjAEQBJAKBFAmQBJAoAqA4IARAWIAOAVIAUAlQAPAcAHAOQAIATAZAdQAaAdAIAQQAHANADAhIAHAxIATA8QAMAiACAfQAEA+gEBdIgICbQgCA0gOAjQgUAzgoAEQgsAEgagJQghgKgUgiQgDgGgNgkQgKghgEgBIjhBDIgOAGQgOAHgMACQgHA4gHAhQgLA6gSAeQgQAbgMANQgOAOgUAFQgXAHgsACIgeABQgXAAgOgDg");
	var mask_graphics_10 = new cjs.Graphics().p("EA+PAVzQgzgJgnguQgkgpgPg2IhLAAQg1AAgXAAIgagBIgagDIhDAAQgsABgXgBQgygChigIQhjgJgxgBIgnAAQgbABgNgBQglBNhUAWQhKAVhYgaQhPgXgmhiQgIABgPgHQgRgHgDAAIgDACQgCADgDgBQgBgLgHgWQgHgVgBgMQAAgLACgSQADgTAAgIIgFhJQgCguACgcIAEgiQADgaACgFQAEgLAYhKQANgrAthYQAdg3A8geQAmgTBSgTIA6gJQArgIADgNIAAgGIAAgGQAAAAgBAAQAAABAAAAQgBAAAAgBQAAAAgBAAQgDgBgDgEQgGgRAFgOQAFgPAQgIQAEgDAFgBIAIgBQAWgIANgDQARgDAUACQBEhKAxgqQBShIA5gOIAcgFIA9gZQAegLAiAAQA3AAC9gEQCVgCBbACIAogBIApgDQAcgEAPgFQARgFAZgBQASgBAkAEQBLALBHAnQBLAoArA6IARAXIAPAVIAVAmQAPAcAHAQQAIASAaAeQAbAeAIAQQAGAOAEAiIAHAzIAUA8QAMAjACAhQAEA/gEBfIgICfQgDA2gOAkQgUA0gpAEQguAFgagJQgigLgUgjQgEgGgNglQgLgigDgBIjnBFIgOAGQgPAHgNADQgGA4gHAjQgMA8gSAeQgRAcgMANQgPAPgUAFQgXAGguADIgfABQgXAAgOgDg");
	var mask_graphics_11 = new cjs.Graphics().p("EA9sAV+QgzgJgpgvQglgqgPg3IhNgBQg2ABgYgBIgbgBQgNAAgOgDIhFAAQgsABgYgBQgzgChlgIQhmgJgzgBIgoAAQgbAAgNAAQgnBPhWAXQhMAVhagbQhSgXgmhlQgJABgPgHQgRgHgEAAIgCACQgDACgDAAQAAgMgIgWQgIgWAAgMQgBgMADgSQADgTAAgJIgFhLQgCgvACgdIADgjQAEgbACgFQAFgLAYhMQANgsAuhaQAeg5A9geQAogUBUgUIA8gJQArgIAEgNIAAgHIAAgGQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgEgBgCgFQgHgQAGgPQAFgPAQgJQAEgCAFgBIAJgBQAWgJANgDQASgDAVACQBGhMAygsQBUhJA6gOIAdgGIA/gaQAfgLAjAAQA4AADCgEQCagCBdACIApgBIAqgDQAdgEAQgFQAQgFAbgBQASgBAlAEQBNALBJAoQBNAqAsA7IASAXIAPAWIAVAoQAQAcAHAQQAIATAbAfQAbAfAJAQQAHAPADAiIAIA0IAUA+QAMAlACAhQAEBBgEBiIgICjQgDA3gOAlQgVA2gqAEQgvAFgbgKQgigKgWglQgEgGgNgmQgLgigDgCIjuBHIgOAGQgQAIgMACQgHA6gHAkQgNA9gSAgQgRAcgNANQgPAQgUAFQgYAHgvACIggABQgYAAgPgDg");
	var mask_graphics_12 = new cjs.Graphics().p("EA9IAWKQg1gJgpgxQgmgrgQg5IhPgBQg4ABgYgBIgcAAQgNgBgPgDIhGAAQguABgZgBQg0gBhogJQhogJg0gCIgqAAQgcABgNgBQgoBShYAXQhOAWhdgbQhUgZgohnQgIABgQgHQgRgIgEAAIgDADQgDACgDgBQAAgLgIgXQgIgXAAgMQgBgMADgTQADgUAAgIIgFhOQgDgwADgeIADgkQAEgbACgFQAFgMAZhOQANgtAwhdQAfg6A+ggQApgUBWgUIA+gKQAtgIADgOIAAgGIAAgGQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQgDgBgDgFQgHgRAGgQQAFgPAQgJQAFgDAFAAIAJgCQAXgJAOgCQASgEAVADQBIhOA0gtQBWhMA8gPIAegGIBAgaQAggLAjAAQA7AADHgEQCegDBfACQARABAagCIArgDQAegDAQgGQARgFAbgCQASAAAmAEQBQALBLApQBPArAtA9IATAYIAPAXIAWAoQAQAeAHAQQAJATAbAgQAcAgAJAQQAHAPAEAkIAHA1IAVBAQANAlACAjQAEBCgEBlIgJCoQgCA5gPAmQgWA2grAFQgwAFgcgKQgjgLgWglQgEgGgNgoQgMgjgDgBIj0BIIgPAHQgQAHgNADQgHA8gHAkQgNA/gTAhQgSAdgNANQgPAQgVAGQgZAGgwADIghABQgYAAgQgDg");
	var mask_graphics_13 = new cjs.Graphics().p("EA8kAWWQg3gJgrgzQgngsgPg6IhSgBQg5ABgZgBIgdgBQgNAAgPgDIhJAAQgvABgZgBQg2gChrgIQhrgKg1gCIgrAAQgdABgOgBQgoBUhbAYQhQAWhggbQhWgagphqQgIABgRgHQgSgIgEAAIgCADQgDACgDgBQgBgMgIgXQgIgYAAgMQgBgNADgTQADgUAAgJIgFhPQgDgyADgfIADgkQAEgdACgFQAFgMAahRQAOgtAxhgQAfg8BBggQAqgVBYgVQAMgCAzgIQAugIAEgOIAAgHIAAgGQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgEgBgCgFQgIgSAGgQQAGgQAQgJQAFgCAGgBIAIgBQAYgKAOgCQATgEAWADQBKhRA1guQBYhNA+gQIAegGIBCgbQAigLAkAAQA8AADNgFQCigCBiACQARAAAagBIAtgDQAegEARgFQASgGAbgBQATgBAnAFQBSALBNAqQBRAsAvA+IATAZIAPAXIAXAqQAQAeAIARQAJAUAcAgQAdAhAJARQAHAQAEAkIAIA3IAVBCQANAmACAjQAFBFgEBnIgJCtQgDA6gPAnQgXA4gsAFQgxAFgdgKQgkgLgXgmQgEgHgOgoQgLglgEgBIj7BKIgPAHQgQAIgOACQgHA+gHAlQgNBBgUAiQgSAdgNAOQgRARgVAFQgZAHgyADIghABQgaAAgPgDg");
	var mask_graphics_14 = new cjs.Graphics().p("EA7+AWiQg4gJgsg0QgogtgQg8IhUgBQg7ABgagBIgdgBQgOgBgPgCIhKAAQgxABgagBQg3gChugJQhugKg3gCIgrAAQgeABgOgBQgqBWheAZQhSAXhigdQhYgZgqhtQgJAAgRgHQgSgIgEAAIgDADQgDACgDgBQgBgMgIgYQgIgYgBgNQAAgNACgUQADgUAAgJIgFhSQgCgzACggIAEglQAEgeACgFQAFgNAbhSQAOgvAyhiQAgg+BDghQArgWBbgUQAMgDA1gIQAvgJAEgOIAAgHIAAgGQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgEgBgDgFQgIgTAHgQQAFgQARgJQAFgDAGgBIAJgBQAYgKAPgCQATgEAWACQBMhSA3gwQBbhPA/gQIAfgGIBEgcQAigMAmAAQA9AADTgEQCmgDBlACQARABAbgBIAugEQAfgEARgFQATgGAcgCQAUAAAoAFQBTALBQArQBTAuAwBAIATAaIAQAXIAYArQAQAfAIARQAJAVAdAhQAeAiAJARQAIAQAEAlIAIA5IAWBDQANAoACAkQAEBGgEBqIgJCxQgDA8gPApQgXA5guAFQgyAFgegKQglgMgXgnQgEgGgPgqQgMglgDgCIkCBNIgQAHQgQAIgOACQgIA/gHAnQgOBDgUAiQgSAegOAPQgQARgWAFQgbAIgyACIgjABQgaAAgQgDg");
	var mask_graphics_15 = new cjs.Graphics().p("EA7UAWtQg5gKgug1QgpgvgQg9IhXgBQg8ABgbgBIgegBQgOgBgQgDIhNAAQgxABgcgBQg4gBhxgKQhygKg4gBIgtAAQgfAAgOAAQgrBYhhAaQhUAXhlgdQhbgbgrhwQgKABgRgIQgTgIgEAAIgDADQgDACgDgBQAAgMgJgZQgIgZgBgNQgBgOADgUQADgVAAgJIgFhVQgDg0ADggIAEgnQADgfADgFQAFgNAchVQAOgwA0hmQAhg/BEgiQAtgWBdgWQANgCA2gIQAxgJAEgPIAAgHIAAgHQgBAAAAABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgEgBgDgFQgIgTAGgQQAGgRASgKQAFgDAGgBIAJgBQAZgKAPgCQAUgFAXADQBOhVA4gxQBehSBBgQIAggGIBGgcQAjgNAnAAQA/AADZgEQCrgDBnACQATABAcgCIAvgDQAggEARgGQATgGAegBQAUAAApAEQBWAMBSAsQBWAvAxBCIAUAaIAQAZIAYAsQASAgAHARQAKAWAeAiQAfAiAJATQAHAQAFAmIAIA6IAXBGQANAoACAlQAFBJgEBtQgBAXgJCgQgDA+gQApQgXA7gvAFQg0AFgfgKQgmgMgYgoQgEgHgPgrQgMgmgEgCIkJBPIgRAHQgQAIgPADQgHBBgIAnQgOBFgVAjQgTAggOAPQgRARgWAGQgcAHg0ADIgjABQgbAAgRgDg");
	var mask_graphics_16 = new cjs.Graphics().p("EA6uAW3Qg7gKgvg3QgqgwgRg/IhZgBQg+ABgbgBIgfAAQgPgBgQgDIhOAAQgzABgcgBQg7gChzgJQh1gLg6gCIguAAQgfABgPgBQgtBbhiAaQhXAYhogeQhdgbgthzQgJABgSgIQgTgJgEAAIgDADQgDADgEgBQAAgNgJgaQgJgZAAgOQgBgNADgVQADgWAAgJIgFhXQgDg2ADghIAEgoQADgfADgGQAFgNAdhXQAOgyA1hoQAjhABGgjQAtgXBggWQANgDA4gIQAygKAEgPIAAgHIAAgHQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgEgBgDgFQgIgUAGgRQAGgRASgKQAFgDAHgBIAJgBQAagKAPgDQAVgEAXADQBQhXA6gyQBghVBDgQIAhgHIBHgdQAlgMAnAAQBBAADfgEQCvgDBrACQASABAdgCIAxgDQAhgEARgGQAUgGAegCQAUgBArAFQBYANBUAsQBYAwAzBEIAUAbIARAZIAZAtQASAhAIASQAJAWAfAjQAgAkAJATQAIAQAEAoIAJA7IAXBIQAOApACAmQAFBLgEBwQgBAXgJCkQgDBAgRAqQgYA9gwAFQg2AFgfgKQgngNgZgpQgEgHgPgsQgNgngDgCIkRBRIgRAHQgRAJgPACQgIBDgIApQgOBGgVAkQgUAhgOAPQgSASgXAGQgbAHg2ADIgkABQgcAAgRgDg");
	var mask_graphics_17 = new cjs.Graphics().p("EA6LAXAQg8gKgwg4QgrgxgShBIhbgBQg/ABgcgBIgfAAQgQgBgQgDIhRAAQg0ABgcgBQg8gCh2gKQh4gLg7gBIgvAAQggABgQgBQgtBdhlAaQhZAZhqgfQhggcgth2QgKABgSgIQgUgIgEAAIgDACQgDADgEgBQAAgNgJgaQgJgaAAgOQgBgOACgVQAEgXAAgJIgFhZQgDg3ADgiIADgpQAEggADgGQAFgNAdhZQAPgzA3hqQAjhDBHgjQAvgYBigXQANgDA6gIQAzgJAEgQIAAgHIAAgHQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgFgBgDgGQgIgUAHgRQAGgSASgKQAGgDAGgBIAKgBQAagKAQgDQAVgFAYADQBShZA7gzQBihWBEgRIAigHIBKgdQAlgNAoAAQBDAADjgFQC0gCBtACQATAAAegBIAxgDQAigFASgGQAUgGAfgCQAVgBArAGQBbAMBWAuQBaAxA0BFIAUAcIASAaIAZAuQASAiAIASQAKAWAgAkQAgAlAKATQAIARAEAoIAJA9IAYBJQAOArACAnQAFBMgEBzQgBAYgJCnQgDBBgRAsQgZA+gxAGQg3AFgggLQgogNgZgqQgFgHgPgtQgNgogEgCIkXBSIgRAIQgSAJgPADQgIBEgIApQgPBJgWAlQgTAhgPAPQgSATgYAGQgcAIg3ACIglABQgcAAgSgDg");
	var mask_graphics_18 = new cjs.Graphics().p("EA5sAXJQg+gLgxg5QgsgygShCIhdgBQhBABgcgBIgggBQgQgBgRgDIhSAAQg1ABgdgBQg9gCh5gKQh6gLg8gBIgwAAQghABgQgBQguBehnAcQhbAZhsgfQhigdguh4QgKABgTgJQgUgJgEAAIgDADQgEADgDgBQgBgNgJgbQgJgaAAgPQgBgOADgWQADgXAAgKIgFhaQgDg4ADgjIAEgqQAEggACgGQAGgOAdhbQAQg0A3hsQAkhEBJgkQAwgYBkgYQANgCA7gJQA0gKAEgPIAAgIIAAgHQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgFgBgDgGQgIgUAHgSQAGgSATgKQAFgDAHgBQAIgBACgBQAbgKAPgDQAWgEAZADQBThbA9g1QBkhYBGgRIAigGIBLgeQAmgOApAAQBEAADogFQC4gDBvADQAUAAAegBIAygEQAjgEATgGQAUgHAfgBQAWgBAsAFQBcANBYAwQBcAxA1BHIAVAcIASAaIAaAvQASAjAJASQAKAXAgAlQAhAlAKAUQAIARAEApIAJA/IAZBKQAOAsADAnQAEBOgEB1QAAAZgKCrQgDBCgRAsQgaBAgyAGQg4AFghgLQgpgNgZgrQgFgIgQgtQgNgpgEgCIkcBUIgSAIQgSAJgPADQgJBFgIArQgPBJgWAmQgUAigQAQQgSATgYAGQgdAIg4ADIgmABQgdAAgRgDg");
	var mask_graphics_19 = new cjs.Graphics().p("EA5PAXQQg/gLgyg6QgtgzgShDIhegBQhDABgdgBIgggBQgQgBgRgDIhUAAQg2ABgegBQg+gCh7gKQh8gLg+gCIgxAAQghABgQgBQgvBhhpAcQhcAZhvggQhjgdgwh6QgKABgTgJQgUgJgFAAIgDADQgDADgEgBQAAgOgJgbQgKgbAAgOQgBgPADgWQADgYAAgKIgFhcQgDg5ADgjIAEgrQAEghACgGQAGgOAehcQAQg1A5hvQAkhFBLglQAwgZBmgXQAOgDA7gJQA1gKAFgQIAAgIIAAgHQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQgEgBgDgGQgJgUAHgSQAHgTATgKQAFgDAHgBQAIgBACgBQAbgKAQgDQAWgFAZADQBWhcA9g2QBmhYBHgSIAkgHIBMgfQAmgNAqAAQBFAADtgFQC7gDBxACQAUABAfgCIAzgDQAjgFATgGQAVgHAggBQAWgBAtAFQBeANBaAxQBdAyA2BIIAWAdIASAaIAaAwQATAjAIATQALAYAgAlQAiAmAKAUQAJARAEAqIAJBAIAZBMQAPAsACApQAFBPgEB3QgBAZgKCuQgDBEgRAtQgaBBg0AGQg5AFghgLQgqgNgagsQgEgIgQguQgOgrgEgBIkhBWIgSAIQgTAJgPADQgJBHgIArQgQBLgXAmQgUAjgQAQQgSATgZAGQgdAIg5ADIgnABQgdAAgSgDg");
	var mask_graphics_20 = new cjs.Graphics().p("EA41AXXQhAgLgzg7Qgtg0gThFIhggBQhDABgdgBIghAAQgRgBgRgDIhVAAQg3ABgegBQg/gCh+gKQh+gMg+gCIgyAAQgiABgQgBQgwBihrAdQheAahwghQhlgdgwh9QgKABgUgIQgUgKgFAAIgDAEQgEADgDgBQgBgPgJgbQgJgcgBgOQgBgPADgWQAEgYAAgLIgGhdQgDg6ADgkIAEgrQAEgiADgGQAGgOAeheQAQg2A6hxQAlhGBLgmQAygYBogYQANgDA9gJQA2gKAEgRIAAgIIAAgHQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgFgBgDgGQgJgVAIgSQAGgTAUgLQAFgDAHgBQAIAAACgBQAcgLAQgDQAXgEAZADQBWhfA/g2QBohaBIgSIAkgHIBNgfQAogOAqAAQBGAADxgFQC+gDBzACQAUABAggCIA0gDQAjgFAUgHQAVgGAggCQAXgBAtAGQBgANBbAxQBfAzA3BKIAWAdIASAbIAbAxQATAjAJAUQAKAYAhAlQAiAnALAUQAIASAFArIAJBAIAZBOQAPAsADAqQAFBQgFB6QAAAZgKCxQgDBFgSAtQgbBDg0AFQg6AGghgMQgrgNgagtQgFgIgQgvQgOgrgEgBIkmBXIgTAIQgTAJgPADQgJBIgJAsQgPBMgXAoQgVAjgQAQQgTATgZAHQgeAIg6ADIgnABQgeAAgSgDg");
	var mask_graphics_21 = new cjs.Graphics().p("EA4eAXdQhBgLgzg8Qgvg1gShFIhigBQhEABgegBIghgBQgRgBgRgDIhXAAQg4ABgegBQhAgCh/gKQiAgMhAgCIgyAAQgjABgQgBQgxBkhsAdQhfAahyghQhngegwh+QgKABgUgJQgVgJgFAAIgDADQgEADgDgBQgBgPgJgcQgKgbAAgPQgBgPADgXQADgYAAgLIgFhfQgDg6ADglIAEgsQAEgiADgGQAGgOAfhgQAQg3A6hyQAmhHBNgmQAygZBpgZQAOgDA9gIQA3gLAEgQIAAgIIAAgIQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgFgBgDgGQgJgVAIgTQAGgTAUgLQAGgDAGgBQAJAAACgBQAcgLAQgDQAXgFAaADQBYhfA/g3QBphcBKgSIAkgHIBPggQAngOAsAAQBHAAD0gFQDBgDB0ACQAVABAggCIA1gDQAkgFATgHQAWgGAhgCQAWgBAvAGQBhANBcAyQBhA1A3BJIAWAeQARAYACADIAbAyQATAkAJAUQALAYAiAmQAiAnAKAVQAJASAFArIAJBCIAaBOQAPAuADApQAFBSgFB7QAAAagLC0QgDBFgSAvQgbBDg0AFQg7AGgigMQgsgNgaguQgFgHgRgwQgOgsgEgBIkqBYIgTAIQgTAKgQADQgJBJgJAsQgPBOgYAnQgVAkgQARQgTATgZAHQgfAIg7ADIgoABQgeAAgSgDg");
	var mask_graphics_22 = new cjs.Graphics().p("EA4JAXjQhCgMgzg9Qgvg1gThGIhjgBQhFABgegBIgigBQgRgBgSgDIhXAAQg5ABgfgBQhAgCiBgLQiBgMhBgBIgzAAQgjABgRgBQgxBlhtAdQhhAahzghQhogegxiAQgKABgUgJQgWgJgEAAIgEADQgDADgEgBQAAgPgKgcQgKgcAAgPQgBgQADgXQADgYAAgLIgFhgQgDg7ADglIAEgtQAEgiADgHQAGgOAfhhQAQg3A8h0QAmhIBNgmQAzgaBrgZQAOgDA+gJQA3gKAFgRIAAgIIAAgHQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEgBgDgHQgJgVAHgTQAHgTAUgLQAFgDAHgBQAJgBACgBQAcgLARgDQAXgFAaADQBZhgBAg4QBrhdBKgSIAlgHIBQghQAogOAsAAQBIAAD3gFQDDgDB2ACQAVABAggCIA2gDQAkgFAUgHQAWgGAhgCQAXgBAvAGQBiANBeAzQBhA1A5BKIAWAfQASAYABADIAbAzQAUAkAJAUQALAZAiAmQAjAoAKAVQAJASAFAsIAJBCIAbBQQAPAuACAqQAGBTgFB8QgBAagKC2QgDBHgTAvQgbBEg1AFQg8AGgigMQgsgNgbguQgFgIgRgxQgOgsgEgBIkuBZIgTAIQgTAKgRADQgIBKgJAtQgQBOgYApQgVAkgRAQQgTAUgaAHQgeAIg8AEIgoABQgfAAgTgDg");
	var mask_graphics_23 = new cjs.Graphics().p("EA33AXnQhDgLg0g+Qgvg1gThIIhkgBQhGABgfgBIgiAAQgRgBgSgEIhYAAQg5ABgggBQhBgCiCgKQiDgMhBgCIg0AAQgjABgRgBQgyBmhvAdQhhAbh0ghQhqgfgxiBQgLABgUgJQgVgKgFAAIgDADQgEAEgEgCQAAgOgKgdQgKgcAAgQQgBgPADgXQADgZAAgLIgFhhQgEg8AEglIAEgtQAEgjADgHQAGgOAghiQAQg4A8h1QAmhJBPgnQAzgaBsgYQAOgEA/gJQA4gKAFgRIAAgJIAAgHQgBAAAAAAQgBABAAAAQgBAAAAgBQAAAAgBAAQgFgBgDgGQgJgWAIgTQAGgTAVgMQAFgDAHgBQAJAAACgBQAdgLARgEQAXgEAaADQBahiBBg4QBsheBLgSIAlgIIBRghQAogOAtAAQBJAAD5gFQDGgDB3ACQAVABAhgCIA2gDQAlgFAUgHQAWgHAhgCQAYgBAvAGQBkAOBeAzQBjA2A5BLIAXAfQARAYACAEIAbAyQAUAlAJAUQALAZAjAnQAjApAKAVQAJASAFAtIAKBDIAaBQQAPAuADArQAFBUgEB+QgBAagKC4QgEBHgSAwQgcBEg1AGQg9AGgjgMQgsgOgbguQgFgIgRgxQgOgtgFgBIkxBaIgTAIQgUAKgQADQgJBLgJAuQgQBPgYAoQgWAlgQARQgUAUgaAHQgfAIg8ADIgpACQgfAAgTgEg");
	var mask_graphics_24 = new cjs.Graphics().p("EA3nAXrQhDgLg1g+Qgwg3gThIIhlgBQhGABgfgBIgjAAQgRgBgSgDIhZAAQg6ABgggBQhCgDiDgKQiEgMhCgCIg0AAQgkABgRgBQgyBnhwAeQhiAbh2giQhqgfgyiDQgLABgUgJQgWgJgEAAIgEADQgDADgEgBQgBgPgJgdQgKgdgBgPQgBgPADgYQAEgZAAgLIgGhiQgDg9ADglIAEguQAFgjACgGQAHgPAghjQAQg4A8h2QAnhKBQgnQA0gaBsgZQAPgEA/gJQA5gKAEgRIAAgJIAAgHQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgFgBgDgHQgJgWAHgTQAHgUAUgLQAGgDAHgBQAJgBACgBQAdgLARgDQAYgFAaADQBbhiBCg5QBshfBMgSIAmgIIBRghQApgOAtAAQBJAAD8gGQDIgDB4ADQAWAAAggBIA3gEQAlgFAVgHQAWgHAigBQAXgBAwAGQBkANBgA0QBkA2A5BMIAXAfQASAZABADIAcA0QAUAlAJAUQALAZAjAoQAkAoAKAWQAKASAEAtIAKBEIAbBRQAPAvADArQAFBUgFCAQAAAagLC6QgDBIgTAwQgcBFg2AGQg9AGgjgNQgtgNgbgvQgFgIgRgyQgPgtgEgBIk1BbIgTAIQgUAKgQADQgJBMgJAuQgQBQgZApQgWAlgQARQgUAUgaAHQgfAIg9AEIgqABQgfAAgTgEg");
	var mask_graphics_25 = new cjs.Graphics().p("EA3ZAXvQhDgMg2g+Qgwg3gThJIhmgBQhHABgfgBIgjAAQgRgBgSgDIhaAAQg7ABgggBQhCgDiEgKQiGgNhCgBIg0AAQgkABgSgBQgyBnhxAfQhjAbh3giQhrgggyiDQgLABgUgJQgWgKgFAAIgEADQgDADgEgBQgBgPgJgdQgKgdgBgPQgBgQADgYQAEgZAAgLIgGhjQgDg9ADgmIAEguQAFgjACgHQAHgPAghjQARg5A8h3QAohKBQgoQA0gaBtgZQAPgEBAgJQA5gLAFgRIAAgIIAAgIQgBAAAAABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgFgBgDgGQgJgWAHgUQAHgUAVgLQAGgDAHgBQAJgBABgBQAegLARgDQAYgFAbADQBbhjBCg6QBuhfBMgTIAmgHIBSgiQApgOAuAAQBKAAD+gGQDJgDB5ADQAWAAAhgBIA3gEQAmgFAUgHQAWgHAjgBQAXgCAxAGQBlAOBgA0QBkA3A6BNIAYAfQARAZACADIAcA0QAUAmAJAUQAMAZAjAoQAkApAKAVQAKATAEAtIAKBFIAbBRQAQAwACArQAGBVgFCBQgBAagLC7QgDBJgTAwQgcBGg2AGQg+AGgjgMQgtgOgcgwQgFgIgRgyQgPgtgEgBIk3BcIgUAIQgTAKgRADQgJBMgJAvQgRBQgYAqQgWAlgRARQgUAUgaAHQggAJg9ADIgqABQgfAAgUgDg");
	var mask_graphics_26 = new cjs.Graphics().p("EA3OAXyQhFgMg1g/Qgxg3gThJIhngBQhHABgggBIgjAAQgRgCgSgDIhbAAQg7ABgggBQhDgCiFgLQiGgMhDgCIg1AAQgkABgRgBQgzBphyAeQhkAch3gjQhsgggziEQgLABgUgJQgWgKgFAAIgDADQgEAEgEgCQgBgPgJgdQgLgdAAgQQgBgQADgXQAEgaAAgLIgGhjQgDg+ADgmIAEguQAEgkADgHQAHgPAghkQARg5A9h4QAohLBQgoQA1gaBugaQAPgDBAgJQA6gLAEgRIAAgJIAAgHQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgFgBgDgHQgKgWAIgUQAHgUAVgLQAFgDAHgBQAKgBABgBQAegLARgEQAYgEAbADQBchkBDg6QBuhgBNgTIAngIIBSghQAqgPAtAAQBLAAEAgFQDKgEB6ADQAWABAhgCIA4gEQAmgFAUgHQAWgHAjgBQAYgBAxAGQBlAOBhA0QBlA3A7BNIAXAgQASAZACADIAcA0QAUAmAKAVQALAZAjAoQAkApALAWQAJATAFAuIAKBEIAbBTQAQAvADAsQAFBWgFCBQAAAbgLC8QgEBJgSAxQgdBGg3AGQg+AGgjgMQgugOgcgwQgFgIgRgyQgPgugEgBIk5BcIgUAJQgUAKgRADQgJBNgJAuQgQBRgZAqQgWAlgRASQgUAUgbAHQggAJg9ADIgqABQggAAgTgDg");
	var mask_graphics_27 = new cjs.Graphics().p("EA3EAX1QhFgMg2g/Qgxg4gUhJIhmgCQhIACgggCIgjAAQgSgBgSgDIhbAAQg7ABghgBQhDgDiGgKQiHgNhDgCIg1AAQglABgRgBQgzBphzAfQhkAch4gjQhtgggziFQgLABgUgJQgXgKgEAAIgEADQgEADgDgBQgBgPgKgdQgKgegBgPQgBgQAEgYQADgaAAgLIgGhkQgDg+ADgnIAFguQAEgkADgGQAGgQAhhkQARg6A9h4QAohLBRgpQA1gaBvgaQAPgDBBgJQA5gLAFgSIAAgIIAAgIQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEgBgEgHQgJgWAIgUQAHgUAUgLQAGgDAHgCQAKAAABgBQAegMASgDQAYgFAbADQBchkBDg7QBvhgBOgTIAmgIIBTghQAqgPAuAAQBLAAEBgGQDMgDB7ADQAWAAAhgBIA4gEQAmgFAVgHQAWgHAjgCQAYgBAxAGQBmAOBiA1QBmA4A6BNIAYAgQASAZABAEIAdA0QAUAmAKAVQALAZAjAoQAlAqALAWQAJATAFAtIAKBGIAbBSQAQAwADAsQAFBWgFCCQAAAcgLC9QgEBKgTAxQgcBGg4AGQg+AGgjgMQgugOgdgwQgEgIgSgzQgPgugEgBIk7BdIgUAIQgUAKgRADQgJBOgJAvQgRBRgZAqQgWAmgRARQgUAVgbAHQggAJg+ADIgqABQggAAgTgDg");
	var mask_graphics_28 = new cjs.Graphics().p("EA27AX3QhFgMg2hAQgxg3gUhKIhngBQhIABgggBIgkgBQgRgBgTgDIhbAAQg8ABgggBQhEgCiGgLQiIgNhDgCIg2AAQglABgRgBQg0BqhyAfQhlAch5gjQhtgggziGQgLABgVgJQgWgKgFAAIgEADQgDADgEgBQgBgPgKgeQgKgdgBgQQgBgQAEgYQADgaAAgLIgGhkQgDg/ADgnIAFguQAEgkADgHQAGgPAhhlQARg6A+h5QAohMBRgoQA2gbBvgaQAPgDBBgJQA6gLAFgSIAAgIIAAgIQgBAAAAAAQgBABAAAAQgBAAAAgBQgBAAAAAAQgFgBgDgHQgJgWAHgUQAHgUAVgMQAGgDAHgBQAKAAABgCQAegLASgDQAYgFAbADQBdhlBDg6QBwhiBOgTIAngHIBTgiQAqgPAuAAQBLAAEDgGQDNgDB7ADQAWAAAigBIA4gEQAmgFAVgHQAWgHAjgCQAYgBAyAGQBnAOBhA1QBnA4A7BPIAXAfQASAZACAEIAcA0QAVAmAKAVQALAaAkAoQAkAqALAWQAJATAFAuIAKBFIAcBUQAPAwADAsQAGBXgFCCQgBAcgLC+QgDBKgTAxQgdBHg3AGQg/AGgkgMQgugPgcgwQgFgIgSgzQgOgugFgBIk9BdIgTAJQgUAKgRADQgKBOgJAvQgQBSgaAqQgWAmgRARQgUAVgbAHQggAJg/ADIgqABQggAAgUgDg");
	var mask_graphics_29 = new cjs.Graphics().p("EA20AX5QhFgMg2hAQgyg4gThKIhogBQhJABgggBIgjgBQgSgBgSgDIhcAAQg8ABgggBQhFgCiHgLQiIgNhDgCIg2AAQglABgSgBQgzBqh0AfQhlAch5gjQhtggg0iHQgLACgVgKQgWgKgFAAIgDAEQgEADgEgBQgBgQgKgdQgKgegBgQQgBgQAEgYQADgaAAgLIgGhlQgDg+ADgnIAFgvQAEgkADgHQAHgPAghmQASg6A+h5QAohMBRgpQA2gbBwgaQAPgDBBgJQA6gLAFgSIAAgJIAAgHQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFgBgDgHQgJgWAHgUQAIgVAUgLQAGgDAIgBQAJgBACgBQAegMARgDQAZgFAbADQBdhlBEg6QBwhiBOgTIAngIIBTgiQArgPAuAAQBMAAEDgGQDOgDB8ADQAWAAAhgBIA5gEQAmgFAVgHQAXgHAjgCQAYgBAxAGQBoAOBiA2QBnA4A7BPIAYAfQASAZABAEIAdA0QAVAnAJAVQAMAaAjAoQAlAqALAWQAKATAEAuIAKBGIAcBTQAQAxADAsQAFBXgFCDQgBAcgKC/QgEBKgTAxQgdBIg4AGQg+AGgkgNQgvgOgcgwQgFgJgSgzQgOgugFgBIk+BdIgUAJQgUAKgRADQgJBOgKAwQgQBSgZAqQgXAmgRASQgUAVgbAHQghAJg+ADIgrABQggAAgUgDg");
	var mask_graphics_30 = new cjs.Graphics().p("EA2vAX6QhFgMg3hAQgyg4gThKIhpgCQhIACgggCIgkAAQgSgBgSgEIhcAAQg8ACghgCQhEgCiIgLQiIgMhEgCIg2AAQglABgSgBQg0BqhzAfQhmAch5gjQhuggg0iHQgLABgVgJQgWgKgFAAIgEADQgDADgEgBQgBgPgKgeQgKgegBgQQgBgQADgYQAEgaAAgLIgGhlQgDg/ADgnIAFgvQAEgkADgHQAGgPAhhmQASg7A+h5QAohMBSgpQA2gbBwgaQAPgDBBgKQA7gLAFgRIAAgJIAAgIQgBAAAAABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgFgBgDgHQgKgWAIgUQAHgUAVgMQAGgDAHgBQAKgBABgBQAfgMARgDQAYgFAcAEQBehmBDg6QBxhjBOgTIAngIIBUgiQAqgPAvAAQBMAAEEgFQDOgEB9ADQAWABAhgCIA5gEQAngFAVgHQAWgHAjgCQAZgBAxAGQBoAOBjA2QBnA4A7BPIAYAfQASAaACADIAcA1QAVAnAJAVQAMAaAkApQAlApALAWQAJAUAFAuIAKBGIAcBUQAQAwACAtQAGBXgFCDQgBAcgLDAQgDBKgTAyQgdBHg4AGQg/AGgkgMQgvgPgcgwQgFgIgSg0QgPgugEgBIk/BeIgUAJQgUAJgRAEQgKBOgJAvQgRBTgZAqQgXAmgRASQgUAVgbAHQghAJg+ADIgrACQggAAgUgEg");
	var mask_graphics_31 = new cjs.Graphics().p("EA2rAX7QhGgMg3hAQgxg4gUhLIhpgBQhIABgggBIgkgBQgSgBgTgDIhcAAQg8ABghgBQhEgCiIgLQiJgNhEgCIg2AAQglACgSgCQg0Brh0AfQhlAch6gjQhuggg0iIQgLACgVgKQgXgKgFAAIgDAEQgEADgEgBQAAgQgKgeQgLgdAAgQQgCgQAEgZQAEgaAAgLIgGhlQgEg/AEgnIAEgvQAEglADgGQAHgQAhhmQARg7A+h6QAphMBSgpQA2gbBwgaQAPgDBCgKQA6gLAFgRIAAgJIAAgIQAAAAgBABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgFgBgEgHQgJgWAIgUQAHgUAVgMQAGgDAHgCQAJAAACgBQAegMASgDQAYgFAcADQBehmBEg6QBwhjBPgTIAngIIBUgiQArgPAuAAQBMAAEFgGQDPgDB9ADQAWAAAigBIA4gEQAngFAVgHQAXgHAjgCQAYgBAyAGQBoAOBjA2QBnA4A8BQIAXAfQATAZABAEIAdA1QAVAnAJAVQAMAaAkAoQAlAqALAXQAJATAFAuIAKBGIAcBUQAQAxADAtQAFBXgFCEQAAAcgLDAQgEBKgTAyQgdBIg4AGQg/AGglgNQgugOgdgxQgFgIgRgzQgPgvgFgBIk/BeIgUAJQgVAKgRADQgJBOgKAwQgQBTgaAqQgWAmgRASQgVAVgbAHQggAJg/ADIgrACQggAAgUgEg");
	var mask_graphics_32 = new cjs.Graphics().p("EA2nAX8QhFgMg3hAQgyg5gUhKIhogCQhJACgggCIgkAAQgSgBgTgDIhcAAQg9ABgggBQhFgDiIgLQiJgMhEgCIg2AAQgmABgRgBQg0Brh0AfQhmAch6gkQhvggg0iHQgLABgVgKQgWgJgFAAIgEADQgEADgDgBQgBgPgKgeQgKgegBgQQgBgQADgZQAEgaAAgLIgGhlQgDhAADgnIAEgvQAFgkADgHQAGgQAhhmQASg7A+h6QAphMBSgpQA2gbBwgaQAPgEBCgJQA7gLAFgSIAAgJIAAgHQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgFgBgDgHQgKgXAIgUQAHgUAVgMQAGgDAIgBQAJgBACgBQAegLASgEQAYgFAcAEQBehnBEg6QBxhjBOgTIAogIIBUgiQAqgPAvAAQBMAAEGgGQDPgDB9ADQAWAAAigCIA5gDQAmgFAVgIQAXgHAjgBQAZgCAyAHQBoAOBjA2QBnA4A8BQIAYAfQASAZACAEIAcA1QAVAnAKAVQALAaAkApQAlAqAMAWQAJATAFAvIAKBGIAcBUQAQAxACAtQAGBXgFCEQgBAcgLDBQgDBKgTAyQgdBIg5AGQg/AGgkgMQgvgPgcgxQgFgIgSgzQgPgvgEgBIlBBeIgUAJQgUAKgRADQgKBPgJAvQgRBTgZArQgXAmgRASQgVAVgbAHQggAJg/ADIgrACQggAAgVgEg");
	var mask_graphics_33 = new cjs.Graphics().p("EA2lAX9QhGgNg2hAQgyg4gUhLIhpgBQhJABgggBIgkgBQgSgBgTgDIhcAAQg9ABgggBQhFgCiIgLQiKgNhEgCIg2AAQglABgSgBQg0Brh0AfQhmAch7gjQhuggg0iIQgLABgVgJQgXgKgFAAIgDADQgEADgEgBQgBgPgKgeQgKgegBgQQgBgQAEgZQADgaAAgLIgGhmQgDg/ADgnIAFgvQAEglADgGQAHgQAhhmQARg7A/h7QAohMBTgpQA1gbBxgaQAPgEBCgJQA7gLAFgSIAAgJIAAgHQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgFgCgDgGQgKgXAIgUQAHgUAVgMQAGgDAIgBQAJgBACgBQAegMASgDQAYgFAcADQBehmBEg6QBxhkBPgTIAngIIBVgiQAqgPAvAAQBMAAEGgGQDPgDB+ADQAWAAAigBIA5gEQAmgFAVgHQAXgIAkgBQAYgBAyAGQBoAOBjA2QBoA4A8BQIAXAfQATAaABAEIAdA1QAVAnAKAVQALAaAkApQAlAqAMAWQAJATAFAvIAKBGIAcBVQAQAwACAtQAGBYgFCEQgBAcgLDBQgDBKgTAyQgdBIg5AGQg/AGgkgMQgvgPgdgwQgFgJgRgzQgPgvgFgBIlBBeIgUAJQgUAKgRADQgKBPgJAwQgRBTgZAqQgXAngRARQgVAVgbAIQggAJhAADIgrABQggAAgUgDg");
	var mask_graphics_34 = new cjs.Graphics().p("EA2kAX9QhGgMg3hAQgyg5gUhLIhpgBQhJABgggBIgkgBQgSgBgTgDIhcAAQg9ABghgBQhEgCiJgLQiJgNhEgCIg3AAQglABgSgBQg0Brh0AfQhmAdh7gkQhuggg0iIQgLABgVgJQgXgKgFAAIgDADQgEAEgEgCQgBgPgKgeQgKgegBgQQgBgQADgZQAEgaAAgLIgGhmQgDg/ADgnIAFgvQAEglADgHQAGgPAihnQARg7A/h6QAohNBTgpQA1gbBygaQAPgDBCgKQA6gLAFgRIAAgJIAAgIQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgFgBgDgHQgJgXAHgUQAIgUAVgMQAGgDAHgBQAJgBACgBQAfgLARgEQAZgFAbAEQBfhnBEg6QBxhkBPgTIAngIIBUgiQArgPAvAAQBMAAEHgGQDPgDB9ADQAWAAAigBIA5gEQAngFAVgHQAXgIAjgBQAZgBAyAGQBoAOBjA2QBoA4A8BQIAYAfQASAaACAEIAcA1QAVAnAKAVQAMAaAkApQAlAqALAWQAJAUAFAuIAKBHIAcBUQAQAxADAtQAFBXgFCFQAAAcgLDBQgEBKgTAyQgdBIg4AHQhAAGgkgNQgvgPgdgwQgFgJgRgzQgPgvgFgBIlBBeIgUAJQgUAKgRAEQgKBOgJAwQgRBTgZArQgXAmgRASQgVAVgbAHQghAJg/ADIgrACQggAAgUgEg");
	var mask_graphics_35 = new cjs.Graphics().p("EA2jAX9QhGgMg3hAQgyg5gUhLIhpgBQhJABgggBIgkAAQgSgBgTgEIhdAAQg8ABghgBQhFgCiIgLQiKgNhEgCIg2AAQglACgSgCQg0Bsh1AfQhmAch7gkQhuggg0iIQgLABgVgJQgXgKgFAAIgDADQgEAEgEgBQgBgQgKgeQgKgegBgQQgBgQADgZQAEgaAAgLIgGhmQgDg/ADgnIAFgwQAEgkADgHQAHgPAhhnQARg7A/h6QAohNBTgpQA2gbBxgaQAPgEBCgJQA7gLAFgSIAAgJIAAgIQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgFgBgDgGQgKgXAIgUQAHgVAVgLQAGgEAHgBQAKAAACgBQAegMASgDQAYgFAcADQBehnBFg6QBxhjBOgUIAogHIBUgjQArgPAuAAQBNAAEGgFQDQgEB9ADQAXABAhgCIA5gEQAngFAVgHQAXgHAkgCQAYgBAyAGQBoAOBkA2QBnA5A8BQIAYAfQASAZACAEIAdA2QAVAmAJAVQAMAbAkApQAlAqALAWQAKATAFAvIAKBGIAcBVQAQAxACAtQAGBXgFCFQgBAbgLDCQgDBKgTAyQgdBJg5AGQg/AGglgNQgugOgdgxQgFgJgSgzQgPgvgEgBIlCBeIgTAJQgVAKgRAEQgKBOgJAwQgRBTgZArQgXAmgRASQgVAVgbAHQghAJg/AEIgrABQggAAgUgEg");
	var mask_graphics_36 = new cjs.Graphics().p("EA2iAX9QhGgMg3hAQgyg5gUhLIhogBQhKABgggBIgkAAQgSgBgTgEIhcAAQg9ABgggBQhFgCiJgLQiJgNhFgCIg2AAQglACgSgCQg0Bsh1AfQhmAch6gkQhvggg0iIQgLABgVgJQgXgKgFAAIgDADQgEAEgEgBQgBgQgKgeQgKgegBgQQgBgQAEgZQADgaAAgLIgGhmQgDg/ADgnIAFgwQAEgkADgHQAHgPAhhnQARg7A/h7QAohMBTgpQA2gbBxgbQAPgDBCgJQA7gLAFgSIAAgJIAAgIQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgFgBgDgHQgKgWAIgUQAHgVAVgLQAGgEAIgBQAJAAACgCQAegLASgEQAYgFAcAEQBfhnBEg6QBxhkBPgTIAngIIBVgiQAqgPAvAAQBMAAEHgGQDPgDB+ADQAWAAAigBIA5gEQAngFAVgHQAXgIAjgBQAZgBAyAGQBoAOBjA2QBoA5A8BPIAYAgQASAZACAEIAdA1QAVAnAJAVQAMAaAkApQAlArALAWQAKATAFAvIAKBGIAbBVQAQAwADAtQAGBYgFCFQgBAbgLDCQgDBKgUAyQgcBJg5AGQg/AGglgNQgvgOgcgxQgFgJgSgzQgPgvgFgBIlBBeIgUAJQgUAKgSAEQgJBOgJAwQgRBTgaArQgWAmgSASQgUAVgbAHQghAJg/AEIgrABQghAAgUgEg");
	var mask_graphics_37 = new cjs.Graphics().p("EA2iAX9QhGgMg3hAQgyg5gUhLIhpgBQhJABgggBIgkAAQgSgBgTgEIhcAAQg9ABghgBQhFgCiIgLQiKgNhEgBIg2AAQgmABgRgBQg0Brh1AfQhmAch7gkQhuggg0iIQgLABgWgJQgWgKgFAAIgEADQgEAEgDgBQgBgQgKgeQgLgeAAgQQgBgQADgZQAEgaAAgLIgGhmQgDg/ADgnIAEgwQAFgkADgHQAGgQAihmQARg7A+h7QAphMBTgpQA2gbBxgbQAPgDBCgJQA7gLAFgSIAAgJIAAgIQgBAAAAABQgBAAgBAAQAAAAAAAAQgBgBAAAAQgFgBgEgHQgJgWAIgUQAHgVAVgMQAGgDAHgBQAKgBABgBQAfgLASgEQAYgFAcAEQBehnBEg6QByhkBPgTIAngIIBUgiQArgPAvAAQBMAAEHgGQDPgDB+ADQAWAAAigCIA5gDQAngFAVgIQAXgHAjgBQAZgCAyAHQBoAOBjA2QBoA4A8BQIAYAfQASAaACAEIAdA1QAVAnAJAVQAMAaAkApQAlAqALAXQAKATAFAvIAKBGIAbBVQAQAwADAtQAGBYgFCFQgBAbgLDCQgDBKgUAyQgdBJg4AGQg/AGglgNQgvgOgdgxQgFgJgRgzQgPgvgFgBIlBBeIgUAJQgVAKgRAEQgJBOgKAwQgQBTgaArQgXAmgRASQgUAVgbAIQghAIg/AEIgsABQggAAgUgEg");
	var mask_graphics_38 = new cjs.Graphics().p("EA2jAX/QhGgMg2hAQgyg5gUhLIhpgBQhKABgggBIgkgBQgSgBgSgDIhdAAQg9ABgggBQhFgCiJgLQiJgNhFgCIg2AAQglABgSgBQg0Brh1AfQhmAdh6gkQhvggg0iIQgLABgVgJQgXgKgFAAIgDADQgEADgEgBQgBgPgKgeQgKgegBgQQgBgQADgZQAEgaAAgLIgGhmQgDg/ADgoIAFgvQAEglADgGQAHgQAhhnQARg6A/h7QAohNBTgpQA2gbBxgaQAPgDBCgKQA7gLAFgSIAAgIIAAgIQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgFgBgDgHQgKgXAIgUQAHgUAVgMQAGgDAIgBQAJgBACgBQAegMASgDQAYgFAcADQBfhmBEg7QBxhjBPgTIAngIIBVgjQAqgPAvAAQBNAAEGgFQDQgEB9ADQAWABAigCIA5gEQAngFAVgHQAXgHAkgCQAYgBAyAGQBoAPBkA1QBnA5A8BQIAYAfQASAaACAEIAdA1QAVAnAKAVQALAaAkApQAlAqAMAWQAJAUAFAuIAKBHIAcBUQAQAxADAtQAFBYgFCEQAAAcgMDBQgDBLgTAyQgdBIg5AGQg/AGglgMQgugPgdgxQgFgIgSg0QgPgugEgCIlCBfIgUAJQgUAKgRADQgKBPgJAwQgRBTgZArQgXAmgRASQgVAVgbAHQghAJg/ADIgrACQggAAgVgEg");
	var mask_graphics_167 = new cjs.Graphics().p("EA2jAX/QhGgMg2hAQgyg5gUhLIhpgBQhKABgggBIgkgBQgSgBgSgDIhdAAQg9ABgggBQhFgCiJgLQiJgNhFgCIg2AAQglABgSgBQg0Brh1AfQhmAdh6gkQhvggg0iIQgLABgVgJQgXgKgFAAIgDADQgEADgEgBQgBgPgKgeQgKgegBgQQgBgQADgZQAEgaAAgLIgGhmQgDg/ADgoIAFgvQAEglADgGQAHgQAhhnQARg6A/h7QAohNBTgpQA2gbBxgaQAPgDBCgKQA7gLAFgSIAAgIIAAgIQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgFgBgDgHQgKgXAIgUQAHgUAVgMQAGgDAIgBQAJgBACgBQAegMASgDQAYgFAcADQBfhmBEg7QBxhjBPgTIAngIIBVgjQAqgPAvAAQBNAAEGgFQDQgEB9ADQAWABAigCIA5gEQAngFAVgHQAXgHAkgCQAYgBAyAGQBoAPBkA1QBnA5A8BQIAYAfQASAaACAEIAdA1QAVAnAKAVQALAaAkApQAlAqAMAWQAJAUAFAuIAKBHIAcBUQAQAxADAtQAFBYgFCEQAAAcgMDBQgDBLgTAyQgdBIg5AGQg/AGglgMQgugPgdgxQgFgIgSg0QgPgugEgCIlCBfIgUAJQgUAKgRADQgKBPgJAwQgRBTgZArQgXAmgRASQgVAVgbAHQghAJg/ADIgrACQggAAgVgEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:481.9294,y:133.5654}).wait(1).to({graphics:mask_graphics_1,x:481.8467,y:133.6343}).wait(1).to({graphics:mask_graphics_2,x:481.5996,y:133.8401}).wait(1).to({graphics:mask_graphics_3,x:481.1913,y:134.1802}).wait(1).to({graphics:mask_graphics_4,x:480.6269,y:134.6503}).wait(1).to({graphics:mask_graphics_5,x:479.9135,y:135.2446}).wait(1).to({graphics:mask_graphics_6,x:479.06,y:135.9555}).wait(1).to({graphics:mask_graphics_7,x:478.0773,y:136.7742}).wait(1).to({graphics:mask_graphics_8,x:476.9776,y:137.6902}).wait(1).to({graphics:mask_graphics_9,x:475.7747,y:138.6922}).wait(1).to({graphics:mask_graphics_10,x:474.4839,y:139.7674}).wait(1).to({graphics:mask_graphics_11,x:473.1213,y:140.9025}).wait(1).to({graphics:mask_graphics_12,x:471.7041,y:142.083}).wait(1).to({graphics:mask_graphics_13,x:470.2501,y:143.2942}).wait(1).to({graphics:mask_graphics_14,x:468.7331,y:144.5208}).wait(1).to({graphics:mask_graphics_15,x:467.0762,y:145.6206}).wait(1).to({graphics:mask_graphics_16,x:465.5573,y:146.6289}).wait(1).to({graphics:mask_graphics_17,x:464.1704,y:147.5495}).wait(1).to({graphics:mask_graphics_18,x:462.9095,y:148.3865}).wait(1).to({graphics:mask_graphics_19,x:461.7685,y:149.1438}).wait(1).to({graphics:mask_graphics_20,x:460.7416,y:149.8255}).wait(1).to({graphics:mask_graphics_21,x:459.8227,y:150.4355}).wait(1).to({graphics:mask_graphics_22,x:459.0057,y:150.9778}).wait(1).to({graphics:mask_graphics_23,x:458.2848,y:151.4563}).wait(1).to({graphics:mask_graphics_24,x:457.6538,y:151.8752}).wait(1).to({graphics:mask_graphics_25,x:457.1069,y:152.2382}).wait(1).to({graphics:mask_graphics_26,x:456.6379,y:152.5495}).wait(1).to({graphics:mask_graphics_27,x:456.2409,y:152.8131}).wait(1).to({graphics:mask_graphics_28,x:455.91,y:153.0328}).wait(1).to({graphics:mask_graphics_29,x:455.639,y:153.2126}).wait(1).to({graphics:mask_graphics_30,x:455.422,y:153.3567}).wait(1).to({graphics:mask_graphics_31,x:455.253,y:153.4688}).wait(1).to({graphics:mask_graphics_32,x:455.126,y:153.5531}).wait(1).to({graphics:mask_graphics_33,x:455.035,y:153.6135}).wait(1).to({graphics:mask_graphics_34,x:454.974,y:153.654}).wait(1).to({graphics:mask_graphics_35,x:454.937,y:153.6786}).wait(1).to({graphics:mask_graphics_36,x:454.918,y:153.6912}).wait(1).to({graphics:mask_graphics_37,x:454.911,y:153.6958}).wait(1).to({graphics:mask_graphics_38,x:455.0488,y:153.863}).wait(129).to({graphics:mask_graphics_167,x:455.0488,y:153.863}).wait(1).to({graphics:null,x:0,y:0}).wait(84));

	// IMG_BG_Shadow
	this.instance = new lib.IMG_BG_Shadow("single",0);
	this.instance.setTransform(931.1,260.3,1.12,1.12,0,0,0,834.2,214.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:801.8,regY:162.2,scaleX:1.1192,scaleY:1.1192,x:896.15,y:200.55},0).wait(1).to({scaleX:1.1167,scaleY:1.1167,x:899.9,y:197.7},0).wait(1).to({scaleX:1.1125,scaleY:1.1125,x:906.5,y:192.8},0).wait(1).to({regX:834.2,regY:214.7,scaleX:1.1065,scaleY:1.1065,x:951.7,y:243.95},0).wait(1).to({regX:801.8,regY:162.2,scaleX:1.0992,scaleY:1.0992,x:927.3,y:161.3},0).wait(1).to({regX:834.2,regY:214.7,scaleX:1.0903,scaleY:1.0903,x:976.65,y:188.45},0).wait(1).to({regX:801.8,regY:162.2,scaleX:1.0798,scaleY:1.0798,x:957.7,y:124.3},0).wait(1).to({scaleX:1.0681,scaleY:1.0681,x:976.15,y:116.6},0).wait(1).to({scaleX:1.0555,scaleY:1.0555,x:995.9,y:108.25},0).wait(1).to({scaleX:1.0426,scaleY:1.0426,x:1016.1,y:99.8},0).wait(1).to({scaleX:1.0305,scaleY:1.0305,x:1035.2,y:91.8},0).wait(1).to({regX:834.2,regY:214.7,scaleX:1.02,scaleY:1.02,x:1084.7,y:138.35},0).wait(1).to({x:1152.2,y:73.75},0).wait(154).to({startPosition:0},0).to({_off:true},1).wait(84));

	// IMG_Car
	this.instance_1 = new lib.Ani_Car("synched",0,false);
	this.instance_1.setTransform(1049.2,210.4,0.68,0.68,0,0,0,402.2,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:402.3,scaleX:0.89,scaleY:0.89,x:1049.25,y:214.75,startPosition:14},14,cjs.Ease.sineIn).to({regX:402.1,regY:78.2,scaleX:1.11,scaleY:1.11,startPosition:38},24,cjs.Ease.cubicOut).wait(129).to({startPosition:167},0).to({_off:true},1).wait(84));

	// IMG_BG
	this.instance_2 = new lib.IMG_BG_1("synched",0,false);
	this.instance_2.setTransform(931.1,260.3,1.12,1.12,0,0,0,834.2,214.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.02,scaleY:1.02,x:1016.4,y:227.6,startPosition:14},14,cjs.Ease.sineIn).to({regX:834.1,regY:214.8,scaleX:1,scaleY:1,x:1048.65,y:214.8},24,cjs.Ease.cubicOut).wait(129).to({startPosition:14},0).to({_off:true},1).wait(84));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,0,1348.1999999999998,474.6);


// stage content:
(lib._000831NewBizzVW_970x250_NL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"end":167,"rollover":168,"rollout":228};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,167,168,227,228,229];
	// timeline functions:
	this.frame_0 = function() {
		this.stage.cursor = "pointer";
		this.stage.enableMouseOver();
		bannerEnded = false;
		ctaRolloverCheck = false;
		ctaRolloverEnded = false;
		aniRolloverCheck = false;
		aniRolloverEnded = false;
		rolloutCheck = false;
		
		
		canvas.addEventListener("mouseover", overTarget, this);
		function overTarget(evt){
			rolloutCheck = false;
			ctarolloutCheck = false;
			if(bannerEnded){
				if(ctaRolloverCheck){
					exportRoot.cta.gotoAndPlay("rollover");
				};
				if(aniRolloverCheck){
					exportRoot.gotoAndPlay("rollover");
				};
			}
		};
		//ROLLOUTCHECK
		canvas.addEventListener("mouseout", outTarget, this);
		
		function outTarget(evt){
			
			rolloutCheck = true;
			
			ctarolloutCheck = true;
			
			if(ctaRolloverEnded){
				exportRoot.cta.gotoAndPlay("rollout");
			};
			if(aniRolloverEnded){
				exportRoot.gotoAndPlay("rollout");
			};
		};
	}
	this.frame_167 = function() {
		this.stop();
		aniRolloverCheck = true;
		
		bannerEnded = true;
		rolloutCheck = false;
	}
	this.frame_168 = function() {
		aniRolloverCheck = false;
		aniRolloverEnded = false;
	}
	this.frame_227 = function() {
		aniRolloverEnded = true;
		
		if(!rolloutCheck){
			this.stop();
		}
	}
	this.frame_228 = function() {
		aniRolloverEnded = false;
	}
	this.frame_229 = function() {
		this.gotoAndStop("end");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(167).call(this.frame_167).wait(1).call(this.frame_168).wait(59).call(this.frame_227).wait(1).call(this.frame_228).wait(1).call(this.frame_229).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,0,1).p("EhLxgThMCXjAAAMAAAAnDMiXjAAAg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(230));

	// cta
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.setTransform(26.65,142.2,1,1,0,0,0,0.4,0.2);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(114).to({_off:false},0).wait(116));

	// VW logo
	this.instance = new lib.VEC_VW_Logo("synched",0);
	this.instance.setTransform(51.7,201.7,1,1,0,0,0,25.7,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(47).to({startPosition:0},0).to({x:266.7},27,cjs.Ease.cubicInOut).wait(156));

	// Text_Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_47 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_48 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_49 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_50 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_51 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_52 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_53 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_54 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_55 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_56 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_57 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_58 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_59 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_60 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_61 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_62 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_63 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_64 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_65 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_66 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_67 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_68 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_69 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_70 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_71 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_72 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_73 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	var mask_graphics_74 = new cjs.Graphics().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_graphics_47,x:-162.5,y:125}).wait(1).to({graphics:mask_graphics_48,x:-162.45,y:125}).wait(1).to({graphics:mask_graphics_49,x:-162,y:125}).wait(1).to({graphics:mask_graphics_50,x:-160.75,y:125}).wait(1).to({graphics:mask_graphics_51,x:-158.3,y:125}).wait(1).to({graphics:mask_graphics_52,x:-154.25,y:125}).wait(1).to({graphics:mask_graphics_53,x:-148.3,y:125}).wait(1).to({graphics:mask_graphics_54,x:-139.9,y:125}).wait(1).to({graphics:mask_graphics_55,x:-128.8,y:125}).wait(1).to({graphics:mask_graphics_56,x:-114.5,y:125}).wait(1).to({graphics:mask_graphics_57,x:-96.65,y:125}).wait(1).to({graphics:mask_graphics_58,x:-74.85,y:125}).wait(1).to({graphics:mask_graphics_59,x:-48.7,y:125}).wait(1).to({graphics:mask_graphics_60,x:-17.85,y:125}).wait(1).to({graphics:mask_graphics_61,x:16.85,y:125}).wait(1).to({graphics:mask_graphics_62,x:47.7,y:125}).wait(1).to({graphics:mask_graphics_63,x:73.85,y:125}).wait(1).to({graphics:mask_graphics_64,x:95.65,y:125}).wait(1).to({graphics:mask_graphics_65,x:113.5,y:125}).wait(1).to({graphics:mask_graphics_66,x:127.8,y:125}).wait(1).to({graphics:mask_graphics_67,x:138.9,y:125}).wait(1).to({graphics:mask_graphics_68,x:147.3,y:125}).wait(1).to({graphics:mask_graphics_69,x:153.25,y:125}).wait(1).to({graphics:mask_graphics_70,x:157.3,y:125}).wait(1).to({graphics:mask_graphics_71,x:159.7,y:125}).wait(1).to({graphics:mask_graphics_72,x:160.95,y:125}).wait(1).to({graphics:mask_graphics_73,x:161.45,y:125}).wait(1).to({graphics:mask_graphics_74,x:161.5,y:125}).wait(156));

	// Text_02
	this.instance_1 = new lib.Text_02("synched",0);
	this.instance_1.setTransform(31,99.45,1.09,1.09,0,0,0,0.4,0.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(91).to({_off:false},0).to({alpha:1},17,cjs.Ease.quadInOut).wait(122));

	// Text_01
	this.instance_2 = new lib.Ani_Text_01("synched",26,false);
	this.instance_2.setTransform(31.65,30.45,1.4399,1.4399);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).wait(176));

	// Text_01
	this.instance_3 = new lib.Ani_Text_01("synched",0,false);
	this.instance_3.setTransform(31.65,30.45,1.4399,1.4399);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).wait(26).to({mode:"single",startPosition:26},0).wait(6).to({mode:"synched",loop:false},0).to({_off:true},12).wait(164));

	// BG
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A5OTiMAAAgnDMAydAAAMAAAAnDg");
	this.shape_1.setTransform(-162.5,125);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(47).to({_off:false},0).wait(1).to({x:-162.45},0).wait(1).to({x:-162},0).wait(1).to({x:-160.75},0).wait(1).to({x:-158.3},0).wait(1).to({x:-154.25},0).wait(1).to({x:-148.3},0).wait(1).to({x:-139.9},0).wait(1).to({x:-128.8},0).wait(1).to({x:-114.5},0).wait(1).to({x:-96.65},0).wait(1).to({x:-74.85},0).wait(1).to({x:-48.7},0).wait(1).to({x:-17.85},0).wait(1).to({x:16.85},0).wait(1).to({x:47.7},0).wait(1).to({x:73.85},0).wait(1).to({x:95.65},0).wait(1).to({x:113.5},0).wait(1).to({x:127.8},0).wait(1).to({x:138.9},0).wait(1).to({x:147.3},0).wait(1).to({x:153.25},0).wait(1).to({x:157.3},0).wait(1).to({x:159.7},0).wait(1).to({x:160.95},0).wait(1).to({x:161.45},0).wait(1).to({x:161.5},0).wait(156));

	// Ani_Visuals
	this.instance_4 = new lib.Ani_Visuals("synched",0,false);
	this.instance_4.setTransform(402.5,138.2,1,1,0,0,0,672.5,237.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(43).to({startPosition:47},0).to({x:565.5,startPosition:74},31,cjs.Ease.cubicInOut).wait(94).to({startPosition:0},0).wait(62));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(161,26,1077.1,349.6);
// library properties:
lib.properties = {
	id: 'DA976D8B26B84C4C97DBECA9E7A252F9',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/IMG_BG.jpg?1745323293168", id:"IMG_BG"},
		{src:"images/IMG_Car.png?1745323293168", id:"IMG_Car"},
		{src:"images/IMG_Rim.png?1745323293168", id:"IMG_Rim"}
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
an.compositions['DA976D8B26B84C4C97DBECA9E7A252F9'] = {
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