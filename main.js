function include(file) { 
  
    var script  = document.createElement('script'); 
    script.src  = file; 
    script.type = 'text/javascript'; 
    script.defer = true; 
    
    document.getElementsByTagName('head').item(0).appendChild(script); 
    
  } 
    
  /* Include Many js files */
  include('itext.js'); 
  include('https://cdnjs.cloudflare.com/ajax/libs/fabric.js/2.0.0-beta.7/fabric.min.js'); 
  include('https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'); 
  