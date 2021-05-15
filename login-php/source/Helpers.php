<?php

/**
 * @param null $param
 * 1 - se eu passar o parametro ela vai trazer o dado que to pedindo
 * 2-se eu nao passar o parametro ela vai trazer o indice root da constante site
 */
function site(string $param = null): string
{
    if ($param && SITE[$param]) {
        return SITE[$param];
    }

    return SITE["root"];
}

/**
 * funcao para acessar a pasta views
 */
function asset(string $path): string
{
    return SITE["root"] . "/views/assets/{$path}";
}

/**
 * funcao pra gerar mensagem quando faço redirecionamento
 * eu poderia add mais um parametro de icon se eu quizesse
 */

function flash(string $type = null, string $message = null): ?string
{
    //criando a mensagem caso nao exista
   if ($type && $message) {
       $_SESSION["flash"] = [
           "type" => $type,
           "message" => $message,
       ];

       return null;

   }

   //caso nao passar os parametros eu  estou verificando se existe a mensagem pra exibila
   if (!empty($_SESSION["flash"]) && $flash = $_SESSION["flash"]) {
       unset($_SESSION["flash"]);//elimino a seessao
       //message - caixa da mensagem em css
       //type - cor da mensagem
       return "<div class=\"message {$flash["type"]}\">{$flash["message"]}</div>";
   }

   return null;
}