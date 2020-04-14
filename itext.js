var canvas1 = new fabric.Canvas('canvas1');
    canvas1.renderAll();

fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.padding = 5;
    
     
  var $ = function(id){return document.getElementById(id)};


  var canvas = this.__canvas = new fabric.Canvas('canvas3');
  	// canvas.setHeight(400);
	// 	canvas.setWidth(530);
        fabric.Image.fromURL('OMR.jpg', function(img1) {
             canvas.setBackgroundImage(img1, canvas.renderAll.bind(canvas), {
                scaleX: canvas.width / img1.width,
                scaleY: canvas.height / img1.height
             });
          });
          canvas.loadFromJSON('{"version":"2.0.0-beta7","objects":[{"type":"i-text","version":"2.0.0-beta7","originX":"left","originY":"top","left":72.88,"top":323.88,"width":365.67,"height":56.5,"fill":"#fde74d","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":0.64,"scaleY":0.64,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Tap and Type","fontSize":50,"fontWeight":"normal","fontFamily":"arial black","fontStyle":"normal","lineHeight":1.16,"underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}},{"type":"i-text","version":"2.0.0-beta7","originX":"left","originY":"top","left":160.45,"top":236.62,"width":155.59,"height":56.5,"fill":"#ff4a4a","stroke":null,"strokeWidth":1,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":0.44,"scaleY":0.44,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"text":"Demo","fontSize":50,"fontWeight":"normal","fontFamily":"arial black","fontStyle":"normal","lineHeight":1.16,"underline":false,"overline":false,"linethrough":false,"textAlign":"left","textBackgroundColor":"","charSpacing":0,"styles":{}}],"backgroundImage":{"type":"image","version":"2.0.0-beta7","originX":"left","originY":"top","left":0,"top":0,"width":1000,"height":1324,"fill":"rgb(0,0,0)","stroke":null,"strokeWidth":0,"strokeDashArray":null,"strokeLineCap":"butt","strokeLineJoin":"miter","strokeMiterLimit":10,"scaleX":0.4,"scaleY":0.4,"angle":0,"flipX":false,"flipY":false,"opacity":1,"shadow":null,"visible":true,"clipTo":null,"backgroundColor":"","fillRule":"nonzero","globalCompositeOperation":"source-over","transformMatrix":null,"skewX":0,"skewY":0,"crossOrigin":"","cropX":0,"cropY":0,"src":"file:///C:/Users/JA394556/Desktop/HTML%20Codes/Fabric%20JS%20testing/OMR.jpg","filters":[]}}');
          

//           var text = new fabric.Text('hello world', { left: 100, top: 100 });
// canvas.add(text);

function Addtext() { 
canvas.add(new fabric.IText('Tap and Type', { 
      left: 50,
      top: 100,
      fontFamily: 'arial black',
      fill: '#333',
	    fontSize: 50
}));
}
    
   document.getElementById('text-color').onchange = function() {
            canvas.getActiveObject().set('fill',this.value);
            canvas.renderAll();
        };
		
		document.getElementById('text-bg-color').onchange = function() {
            canvas.getActiveObject().setBackgroundColor(this.value);
            canvas.renderAll();
        };
		
		document.getElementById('text-lines-bg-color').onchange = function() {
            canvas.getActiveObject().setTextBackgroundColor(this.value);
            canvas.renderAll();
        };

		document.getElementById('text-stroke-color').onchange = function() {
            canvas.getActiveObject().setStroke(this.value);
            canvas.renderAll();
        };	

		document.getElementById('text-stroke-width').onchange = function() {
            canvas.getActiveObject().setStrokeWidth(this.value);
            canvas.renderAll();
        };				
	
		document.getElementById('font-family').onchange = function() {
            canvas.getActiveObject().setFontFamily(this.value);
            canvas.renderAll();
        };
		
		document.getElementById('text-font-size').onchange = function() {
            canvas.getActiveObject().setFontSize(this.value);
            canvas.renderAll();
        };
		
		document.getElementById('text-line-height').onchange = function() {
            canvas.getActiveObject().setLineHeight(this.value);
            canvas.renderAll();
        };
		
		document.getElementById('text-align').onchange = function() {
            canvas.getActiveObject().setTextAlign(this.value);
            canvas.renderAll();
        };
		
	
 radios5 = document.getElementsByName("fonttype");  // wijzig naar button
    for(var i = 0, max = radios5.length; i < max; i++) {
        radios5[i].onclick = function() {
            
            if(document.getElementById(this.id).checked == true) {
                if(this.id == "text-cmd-bold") {
                    canvas.getActiveObject().set("fontWeight", "bold");
                }
                if(this.id == "text-cmd-italic") {
                    canvas.getActiveObject().set("fontStyle", "italic");
                }
                if(this.id == "text-cmd-underline") {
                    canvas.getActiveObject().set("textDecoration", "underline");
                }
				if(this.id == "text-cmd-linethrough") {
                    canvas.getActiveObject().set("textDecoration", "line-through");
                }
				if(this.id == "text-cmd-overline") {
                    canvas.getActiveObject().set("textDecoration", "overline");
                }
                
                
                
            } else {
                if(this.id == "text-cmd-bold") {
                    canvas.getActiveObject().set("fontWeight", "");
                }
                if(this.id == "text-cmd-italic") {
                    canvas.getActiveObject().set("fontStyle", "");
                }  
                if(this.id == "text-cmd-underline") {
                    canvas.getActiveObject().set("textDecoration", "");
                }
				if(this.id == "text-cmd-linethrough") {
                    canvas.getActiveObject().set("textDecoration", "");
                }  
                if(this.id == "text-cmd-overline") {
                    canvas.getActiveObject().set("textDecoration", "");
                }
            }            
            
            canvas.renderAll();
        }
    }
   // console.log(JSON.stringify(canvas1));
function stringifyContentFunction(){
    canvas.renderAll();
    console.log(JSON.stringify(canvas));
    var canvas2=new fabric.Canvas("canvas2");
    canvas2.loadFromJSON(JSON.stringify(canvas));
    canvas2.renderAll();
//     var dataURL = canvas.toDataURL();
// console.log(dataURL);
// fabric.loadSVGFromString('data:image/png;base64,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', function(objects, options) {
// 	  var obj = fabric.util.groupSVGElements(objects, options);
// 	  canvas2.add(obj).renderAll();
// 	});
    }