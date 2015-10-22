	$.ajax({
		url: 'travel_json/new_add.json',
		type: 'GET',
		dataType:'json',
		data: {param1: 'value1'},
	})
	.done(function(mess) {//闭包的使用
		for (num in mess){
			var new_message=document.createElement("li");
			new_message.className='add_message';
			var new_message_img=document.createElement("div");
			new_message_img.className='add_img';
			new_message_img.style.background='url('+mess[num][0]+')';
			new_message_img.style.backgroundRepeat='no-repeat';
			new_message_img.style.backgroundSize='100% 100%';
			var new_message_word=document.createElement("div");
			new_message_word.innerHTML=mess[num][1];
			new_message_word.className='add_word';
			new_message.appendChild(new_message_img);
			new_message.appendChild(new_message_word);
			var herf_new= mess[num][2];
			(function(herf_new){
				new_message.onclick=function (){
				window.open(herf_new);
				}
			})(herf_new)
			$(".travel_message").prepend(new_message);
		}
		$(".add_message").mouseover(function(){
			$(this).css({
				zoom: '125%'
			});
			$(this).children(".add_img").css({
				opacity: '1',
			});
		});
		$(".add_message").mouseout(function(){
			$(this).css({
				zoom: '100%'
			});
			$(this).children(".add_img").css({
				opacity: '0.4',
			});
		});
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});	
