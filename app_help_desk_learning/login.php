<?php

    $auth = false;

    $users = Array(
        array('email' => 'erildo@gmail.com', 'senha' => '1234'),
        array('email' => 'admin@gmail.com', 'senha' => 'admin'),
    );

    foreach($users as $user) {
        if($user['email'] == $_POST['email'] && $user['senha'] == $_POST['senha']) {
            $auth = true;
        }
    }

    if($auth) {
        echo "user autenticado";

    }else {
        echo "nao autenticado";
    }

?>

