

/* Modernizr custom build of 1.7: csstransforms | iepp */
window.Modernizr=function(a,b,c){function G(){}function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+p.join(c+" ")+c).split(" ");return!!E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c&&(!b||b(a[d],j)))return!0}function D(a,b){return(""+a).indexOf(b)!==-1}function C(a,b){return typeof a===b}function B(a,b){return A(o.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="1.7",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l=b.createElement("input"),m=":)",n=Object.prototype.toString,o=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),p="Webkit Moz O ms Khtml".split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v,w=function(a){var c=b.createElement("style"),d=b.createElement("div"),e;c.textContent=a+"{#modernizr{height:3px}}",h.appendChild(c),d.id="modernizr",g.appendChild(d),e=d.offsetHeight===3,c.parentNode.removeChild(c),d.parentNode.removeChild(d);return!!e},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div");var f=(d="on"+d)in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y=({}).hasOwnProperty,z;C(y,c)||C(y.call,c)?z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)}:z=function(a,b){return y.call(a,b)},r.csstransforms=function(){return!!E(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])};for(var H in r)z(r,H)&&(v=H.toLowerCase(),e[v]=r[H](),u.push((e[v]?"":"no-")+v));e.input||G(),e.crosswindowmessaging=e.postmessage,e.historymanagement=e.history,e.addTest=function(a,b){a=a.toLowerCase();if(!e[a]){b=!!b(),g.className+=" "+(b?"":"no-")+a,e[a]=b;return e}},A(""),j=l=null,f&&a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function p(a,b){var c=-1,d=a.length,e,f=[];while(++c<d)e=a[c],(b=e.media||b)!="screen"&&f.push(p(e.imports,b),e.cssText);return f.join("")}function o(a){var b=-1;while(++b<e)a.createElement(d[b])}var c="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",d=c.split("|"),e=d.length,f=new RegExp("(^|\\s)("+c+")","gi"),g=new RegExp("<(/*)("+c+")","gi"),h=new RegExp("(^|[^\\n]*?\\s)("+c+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),i=b.createDocumentFragment(),j=b.documentElement,k=j.firstChild,l=b.createElement("body"),m=b.createElement("style"),n;o(b),o(i),k.insertBefore(m,k.firstChild),m.media="print",a.attachEvent("onbeforeprint",function(){var a=-1,c=p(b.styleSheets,"all"),k=[],o;n=n||b.body;while((o=h.exec(c))!=null)k.push((o[1]+o[2]+o[3]).replace(f,"$1.iepp_$2")+o[4]);m.styleSheet.cssText=k.join("\n");while(++a<e){var q=b.getElementsByTagName(d[a]),r=q.length,s=-1;while(++s<r)q[s].className.indexOf("iepp_")<0&&(q[s].className+=" iepp_"+d[a])}i.appendChild(n),j.appendChild(l),l.className=n.className,l.innerHTML=n.innerHTML.replace(g,"<$1font")}),a.attachEvent("onafterprint",function(){l.innerHTML="",j.removeChild(l),j.appendChild(n),m.styleSheet.cssText=""})}(a,b),e._enableHTML5=f,e._version=d,g.className=g.className.replace(/\bno-js\b/,"")+" js "+u.join(" ");return e}(this,this.document);


(function(){
  
// don't proceed unless CSS transforms are supported
if ( !Modernizr.csstransforms ) {
  return;
}

// ======================= getStyleProperty by kangax ===============================
// http://perfectionkills.com/feature-testing-css-properties/

var getStyleProperty = (function(){
 
  var prefixes = ['Moz', 'Webkit', 'Khtml', 'O', 'Ms'];
 
  function getStyleProperty(propName, element) {
    element = element || document.documentElement;
    var style = element.style,
        prefixed;
 
    // test standard property first
    if (typeof style[propName] == 'string') return propName;
 
    // capitalize
    propName = propName.charAt(0).toUpperCase() + propName.slice(1);
 
    // test vendor specific properties
    for (var i=0, l=prefixes.length; i<l; i++) { 
      prefixed = prefixes[i] + propName; 
      if (typeof style[prefixed] == 'string') return prefixed; 
    } 
  } 
 
  return getStyleProperty; 
})();



// ======================= Element.prototype.transform ===============================

var transformProp = getStyleProperty('transform');

Element.prototype.transform = function ( value ) {
  this.style[ transformProp ] = value;
};


// ======================= Wedding! ===============================


function Wedder() {
  this.transformProp = getStyleProperty('transform');
  
  // kick off init
  window.addEventListener( 'DOMContentLoaded', this, false );
}

// enables constructor to be used within event listener
// like obj.addEventListener( eventName, this, false )
Wedder.prototype.handleEvent = function( event ) {
  if ( this[event.type] ) {
    this[event.type](event);
  }
};




// init
Wedder.prototype.DOMContentLoaded = function( event ) {
  
  var h1 = document.querySelector('#header h1'),
      header = document.getElementById('header');
  
  
  this.erinElem = h1.querySelector('.erin'),
  this.davidElem = h1.querySelector('.david');
  
  this.dateElem = header.querySelector('.date');
  this.locationElem = header.querySelector('.location');
  
  this.marriedTopElem = header.querySelector('.married .top');
  this.marriedBottomElem = header.querySelector('.married .bottom');
  
  this.parseCharacters( this.dateElem );
  this.parseCharacters( this.locationElem );
  this.parseCharacters( this.marriedTopElem );
  this.parseCharacters( this.marriedBottomElem );
  
  
};

// kinda like lettering.js
Wedder.prototype.parseCharacters = function( elem ) {
  
  var text = elem.textContent,
      fragment = document.createDocumentFragment();
  
  for ( var i=0, len = text.length; i < len; i++ ) {
    var character = text[i];
        span = document.createElement('span');
    span.className = 'char c' + (i+1);
    span.textContent = character;
    
    // replace spaces with no-breaking spaces
    if ( character == ' ' ) {
      span.innerHTML = '&nbsp;'
    }
    
    fragment.appendChild( span );

  };
  
  elem.innerHTML = '';
  
  elem.appendChild( fragment );
  
};

Wedder.prototype.radialType = function ( elem, y, padding ) {
  // get width of elem
  
  var charWidths = [],
      angle = 0,
      charAngles = [];
  
  for (var i=0, len = elem.children.length; i < len; i++) {
    var charSpan = elem.children[i],
        w = charSpan.offsetWidth;
        
    charWidths.push( w );
    
    if ( charWidths[i-1] ) {
      angle += Math.atan( (charWidths[i-1] / 2 + padding) / y ) * -1;
    }
    
    angle += Math.atan( (w/2 + padding) / y ) * -1;
    
    charAngles.push( angle );
    
    charSpan.style.left = (w * -0.5) + 'px';
    charSpan.transform('rotate(' + (angle) + 'rad) translate(' + 0 + 'px, ' + y + 'px)');


  };
  
  var elemAngle = -angle/2 - charAngles[0]/2;
  
  elem.transform('rotate(' + elemAngle + 'rad)')
  
  
};

Wedder.prototype.fontsReady = function() {
  
  this.radialType( this.dateElem, -180, 6 );
  this.radialType( this.locationElem, 180, 6 );
  this.radialType( this.marriedTopElem, -150, 3 );
  this.radialType( this.marriedBottomElem, 150, 3 );
  
  
};

var MD = new Wedder();

// ======================= Typekit  ===============================

Typekit.load({
  active: function(){
    MD.fontsReady();
  },
  inactive: function(){
    MD.fontsReady();
  }
})

})()
