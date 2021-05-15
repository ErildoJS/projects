<?php

/**
 *SITE CONFIG
 */
define("SITE", [
    "name" => "Auth rm mvc com php",
    "desc"  => "Aprenda a construir umna aplicaçao com mvc e php do jeito certo",
    "domain"  => "auth.com",
    "locale"  => "pt-BR",
    "root"  => "http://localhost/login"

]);

/**
 *SITE Minify
 */
//so minifico se estiver em localhost
if ($_SERVER["SERVER_NAME"] == "localhost") {
    require __DIR__. "/Minify.php";
}

/**
 * DATABASE CONNECT
 */
define("DATA_LAYER_CONFIG", [
    "driver" => "mysql",
    "host" => "localhost",
    "port" => "3306",
    "dbname" => "login",
    "username" => "root",
    "passwd" => "",
    "options" => [
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
        PDO::ATTR_CASE => PDO::CASE_NATURAL
    ]
]);

/**
 * SOCIAL CONFIG
 */
define("SOCIAL", [
    "facebook_page" => "erildojs",
    "facebook_author" => "erildojs",
    "facebook_appId" => "",
    "twitter_creator" => "@erildojs",
    "twitter_site" => "@erildojs",
]);

/**
 * MAIL CONNECT
 */
define("MAIL", [
    "facebook_page" => "erildojs",
    "facebook_author" => "erildojs",
    "facebook_appId" => "",
    "twitter_creator" => "@erildojs",
    "twitter_site" => "@erildojs",
]);

/**
 * SOCIAL LOGIN: FACEBOOK
 */
define("FACEBOOK_LOGIN", [

]);

/**
 * SOCIAL LOGIN: GOOGLE
 */
define("GOOGLE_LOGIN", [

]);