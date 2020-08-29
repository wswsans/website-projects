h=Math.floor(reamaining/3600);
m=Math.floor(reamaining/3600/60);
s=Math.floor(reamaining/3600/60/60);

h=Math.floor( parseInt(str.slice(0,-2))/36 );
m=Math.floor( ( parseInt(str.slice(0,-2)) - h*36 + parseInt(str.slice(-2)) ) /6 );
s=Math.floor( ( ( parseInt(str.slice(0,-2)) - h*36 + parseInt(str.slice(-2)) - m*6) ) );

h=Math.floor( parseInt(str.slice(0,-2)) /36 ); ho=parseInt(str.slice(0,-2))-h*36
m=Math.floor( ( ho+ parseInt(str.slice(-2)) )/6 ); mi=parseInt(str.slice(-2))-m*6
s=Math.floor( ( (ho+mi) ) );

h=Math.floor( parseInt(str.slice(0,-2)) /36 ); ho=parseInt(str.slice(0,-2))-h*36
m=Math.floor( ( ho+ parseInt(str.slice(-2)) )/6 ); mi=ho+parseInt(str.slice(-2))-m*6
s=Math.floor( ( mi+ parseInt(str.slice(-1)) )/6 );

h=(str.length>=3) ? Math.floor( parseInt(str.slice(0,-2)) /36 ):0; ho=parseInt(str.slice(0,-2))-h*36;
m=(str.length>=2 && reamaining>=60) ? Math.floor( ( ho+ parseInt(str.slice(-2)) )/6 ):0; mi=ho+parseInt(str.slice(-2))-m*6;
s=(str.length>=1) ? Math.floor( ( mi+ parseInt(str.slice(-1)) )/6 ):0;

// h=(str.length>=3) ? Math.floor( parseInt(str.slice(0,-2)) /36 ):0; ho=parseInt(str.slice(0,-2))-h*36;
// m=(str.length>=2 && reamaining>=60) ? Math.floor( ( ho+ parseInt(str.slice(-2)) )/6 ):0; mi=ho+parseInt(str.slice(-2))-m*6;
// s=Math.floor( ( mi+ parseInt(str.slice(-1)) )/6 );

h=(str.length>=3)? Math.floor( parseInt(str.slice(0, -2))/36 ):0; ho=parseInt(str.slice(0, -2)); console.log(ho);
m=(str.length>=2 && reamaining>=60)? Math.floor( ( ho+parseInt(str.slice(-2)) )/6 ):0; mi=ho+parseInt(str.slice(-2))*6; console.log(mi);
s=Math.floor( mi+parseInt(str.slice(-1)) ); console.log(". ");
h=(h==NaN)?0:h; m=(m==NaN)?0:m; s=(s==NaN)?0:s;

//これ以降は、事故により消えた.

