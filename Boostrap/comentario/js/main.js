// JavaScript Document

$(function(){
 	
  'use strict';
  console.log("hola");
  mascaraObloqueo();
 });

	function mascaraObloqueo(){
		 $.blockUI({
		 message:'<img src="carga.gif" width="150" height="150"> <h2>Cargando ...</h2>', 
		 css: { 
            border: 'none', 
			color:'white',
            padding: '15px', 
            backgroundColor: 'transparent;', 
            '-webkit-border-radius': '0px', 
            '-moz-border-radius': '0px', 
            opacity: 0.5, 
            color: '#fff' 
        } }); 
 
        setTimeout($.unblockUI, 3000);
}