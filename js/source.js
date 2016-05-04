$(function() {
	
	var bCard = $('#businessCard').html();
	
	var  data =	{
			myName: 'Андрей Лабай',
			image: 'https://scontent.xx.fbcdn.net/v/t1.0-9/12418028_1265280393499039_5012552319670738981_n.jpg?oh=96fe1488820b095d5a2715c6f712af1e&oe=579D0DF1',
			occupation: 'Сотрудник банка',
			motivations: 'Хочу учить фронтенд, потому что:',
			arguments: ['Всю жизнь мечтал программировать',
							'Устал бумажки перекладывать',
							'Хочу работать в Google'
			],
			phone: 'Мой контактный телефон',
			phoneNumber: '+380505911747',
			fb: 'Мой профиль в Facebook',
			fbLink: '<a href="https://www.facebook.com/profile.php?id=100000512725910" >Facebook</a>',
			myFeedback: 'Мой фидбек:',
			myFeedbackAct: 'Могу выдать кредит или сверстать сайт'
			
		};
	

	var content = tmpl(bCard, data);
	
	$('body').append(content);
	
});