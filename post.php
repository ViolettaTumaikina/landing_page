<?php
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') //проверка на асинхронность
	{
    if (isset($_POST["name"]) && isset($_POST["tel"]) ) 
	{ 
    if ($_POST['name'] == '') 
    {
        return 'Не заполнено поле Имя'; //проверяем наличие обязательных полей
    }
    if ($_POST['tel'] == '') 
    {
        return 'Не заполнено поле номер телефона';
    } 
mail("violettatumaikina@mail.ru", "Заявка с сайта", "Имя:".$name.". Tel: ".$tel ,"From:  \r\n"); //здесь делаем отправку заявки на почту. не забудьте поменять оба адреса
    	return 'Заявка отправлена!'; //возвращаем сообщение пользователю
    }
    }
?>