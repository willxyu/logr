
// init()             handle logr behaviour
// readf(file)        read file
// parse(string)      read the xml/string

init = function() {
 $('body').on('dragover drop', function(e) { e.preventDefault() })
 $(document).on('draginit dragstart dragover dragend drag drop', function(e) {
   e.stopPropagation()
   e.preventDefault()
 })
 // click load
 $('#file').on('change', function(e) { readf(e.target.files) })
 // drop  load
 $('#main').on('drop',   function(e) { readf(e.originalEvent.dataTransfer.files) })
}

readf = function(file) {
 for (var i=0; i<file.length; i++) {
   var f = file[i]
   var s = f.size
   var r = new FileReader()
   r.onloadstart = function(e) {
    log('Loading started.') // show loading bar
   }
   r.onprogress = function(e) {
    if (e.lengthComputable) {
      var pct = Math.round((e.loaded / e.total) * 100)
      if (pct < 100) {
       log('Loaded ' + pct + '%')
      }
    }
   }
   r.onloadend = function(e) {
    log('Loading complete.')
   }
   r.onload = (function(y) {
    return function(e) {
      var u = e.target.result
      parse(u)
    }
   })(f)
   r.readAsText(f)
 }
}

parse = function(str) {
 // remove loading
 
 $('#uploadr').remove()
}

/*
  <line>
   <raw value="Kyrra flashes Mindshell a joyous smile." />
   <printed value="<span class=\"timestamp mute\" style=\"font-family: Lekton\">32:50:055 </span><span class=\"untrigger\">&compfn;</span> <span class=\"normal\"></span><span class=\"normal\"><span class=\"pdb\" style=\"color:rgba(150,65,240,1);\"><span class=\"pdb\" style=\"color:rgba(150,65,240,1);\"><span class=\"pdb\" style=\"color:rgba(150,65,240,1);\">Kyrra</span></span></span> flashes <span class=\"pdb\" style=\"color:rgba(150,65,240,1);\"><span class=\"pdb\" style=\"color:rgba(150,65,240,1);\"><span class=\"pdb\" style=\"color:rgba(150,65,240,1);\">Mindshell</span></span></span> a joyous smile.</span><br>" />
   
  </line>
 */