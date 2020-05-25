<?php

function queryResultados($categoria, $pattern, $conexion) {
    
	if ($_GET['categoria'] == "cerveza") $from = "FROM cerveza ";
	else if ($_GET['categoria'] == "local") $from = "FROM local "; 
	$sql = "SELECT * ".$from." WHERE nombre LIKE '%".$pattern."%'";
    $query = $conexion->prepare($sql);
    $query->execute();
    $result = $query->fetchAll(PDO::FETCH_CLASS);
    return $result;
}

if(isset($_GET['categoria']) && isset($_GET['pattern'])) {
    $server = "mysql:dbname=dbs328363";
    $user = 'root';
    $pw = '';
    $conexion = new PDO($server,$user,$pw);
    echo json_encode( queryResultados($_GET['categoria'],$_GET['pattern'],$conexion), JSON_UNESCAPED_UNICODE );
} else {
    echo "No has pasado los parámetros adecuados";
}
?>
