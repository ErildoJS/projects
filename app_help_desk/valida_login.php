<?php

    session_start();

    

    //verifica se a autenticaçao foi realizada
    $user_auth = false;

    //users do sistema
    $ususarios_app = Array(
        array('email' => 'erildo@gmail.com', 'senha' => '1234'),
        array('email' => 'admin@gmail.com', 'senha' => 'admin'),
    );

    foreach($ususarios_app as $user) {
        if($user['email'] == $_POST['email'] && $user['senha'] == $_POST['senha']){
            $user_auth = true;
        }
    };

    if($user_auth) {
        echo 'user autenticado';
        $_SESSION['autenticado'] = 'SIM';
        header('Location: home.php');
    }else {
        $_SESSION['autenticado'] = 'NAO';
        header('Location: index.php?login=erro');
    }

?>