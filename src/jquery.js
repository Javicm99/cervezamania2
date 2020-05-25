$(document).ready(function() {
	console.log("los bordes los he puesto solo pa ver las areas que ocupan los divs y maquetar jeje")
	
	
	
	$("header p").css("margin-left","500px")
	
	$(".enviar").css("margin-left","500px")
	
	
	console.log($("#categoria").prop("checked"))
	
	
	
	$("#enviar").click(function(){
		if($("#inputBuscador").val()){
			$(".cucu").hide()
			$.ajax({
				url: "load.php",
				method:"get",
				data:{
					categoria: comprobarCategoria(), 
					pattern: $("#inputBuscador").val()
				},
				dataType:"json",
				success: function(json){
					 for(var i=0;i<json.length;i++){
                             nombre=json[i].nombre
                             descripcion=json[i].descripcion
                             ubicacion=json[i].ubicacion
                             valoracion=5
					
						$nuevoResultado=("<a href='#' class='list-group-item list-group-item-action flex-column align-items-start resultado'>\
											<div class='d-flex w-100 justify-content-between'>\
												<h5 class='mb-1'>"+nombre+"</h5>\
												<span class='separador'></span>\
												<small>"+valoracion+"<i class='fa fa-star'></i></small>\
											</div>\
											<p class='mb-1'>"+descripcion+"</p>\
											<small class='masomenos'>Click para ver la ubicacion</small>\
											<div class='infoExtra'>\
												<iframe "+ubicacion+" </iframe>\
											</div>\
										  </a>")
				
						$("#resultadosBusqueda").append($nuevoResultado)
					
					}
                
					}
		
			})
		}
		else if($(".form-row p").length>0){
			$(".form-row p").addClass("alert")
			$(".form-row p").html("QUE NO HAS RELLENAO ESTO COLEGA!")
			
		}
			else
			$(".form-row").append($("<p class='cucu'>rellena los campos</p>"))
		
		
	})
	$("#enviar").mouseenter(function(){
		
		//$(this).find("img").css("transform","skewX(20deg)")
		$(this).toggleClass("botonhover")
		$(this).find("img").attr("src","beerhover.svg")
		
	})
	
	$("#enviar").mouseleave(function(){
		
		//$(this).find("i").css("transform","skewX(-20deg)")
		$(this).toggleClass("botonhover")
$(this).find("img").attr("src","beer.svg")		
		
	})
	
	$(".resultado").click(function(){
		comprobarVisibilidad()
		$(this).find(".infoExtra").toggleClass("mostrar")
		
	})
});

function comprobarVisibilidad(){
	if($(".infoExtra").hasClass("mostrar")){
		
		$(".masomenos").html("Click para mas informacion")
	}
	else{
		
		$(".masomenos").html("Click para menos informacion")
	}
}

function comprobarCategoria(){
	
	if($("#categoria").prop("checked")==true)
		return "cerveza"
	else
		return "local"
	
}

