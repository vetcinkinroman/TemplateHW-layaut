jQuery(document).ready(function() {


	var pull = $('#navigation-toggle');
	var menu = $('.navigation ul');

	$(pull).on("click", function(e){

		// Отменяем стандартное поведение ссылки в браузере
		e.preventDefault();

		// Открываем/Скрываем меню
		menu.slideToggle();

		// Добавляем модификатор --active
		$(this).toggleClass('navigation__toggle-button--active');

	});

	// При изменении размера окна, в большую сторону, если меню было скрыто, показываем его
	// И у кнопки убираем модификатор --active
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 768) {
			menu.removeAttr('style');
			pull.removeClass('navigation__toggle-button--active');
		} else {

		}
	});

	$('nav.navigation a').on("click", function(){
		fnstart();
	});


	function fnstart(){
		if ( $("#navigation-toggle").hasClass("navigation__toggle-button--active")  ) {
			pull.toggleClass('navigation__toggle-button--active');
			menu.slideToggle();
		}
	};

	//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
		highlightSelector: "nav a"
	});


}); // ready