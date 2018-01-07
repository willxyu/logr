
// helper functions
log    = console.log

clean  = function(n) { var x = Number(n.replace(/[^-\d\.]/g, '')); return x }

rpad   = function(s,l,c) {
 if (typeof s =='number') { s = s.toString() }
 if (c == null) { c = ' ' }
 return s + c.repeat(Math.max((l - s.length),0))
}

lpad   = function(s,l,c) {
 if (typeof s =='number') { s = s.toString() }
 if (c == null) { c = ' ' }
 return c.repeat(Math.max(0,(l - s.length))) + s
}

uuid   = function() {
 s4 = function() {
   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
 }
 return s4() + s4() + '-' + s4() + '-' + s4() + '-' +s4() + '-' + s4() + s4() + s4()
}