<?
//readfile("http://e5.e1media.ru".$_SERVER['REQUEST_URI']);
 ob_clean();
    flush();
readfile("http://e5.e1media.ru".$_SERVER['REQUEST_URI']);
//Header("Location: http://e5.e1media.ru".$_SERVER['REQUEST_URI']);
?>