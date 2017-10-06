window.addEventListener('load',function(){
	let wenben = document.querySelector('#wenben');  //获取留言框的内容
	let writes = document.querySelector('.writes');  //获取120
	let max=wenben.maxLength;//留言框的最大长度
	let input=document.querySelector('.pinlun input');//获取文本框内容
	let submit=document.querySelector('.submit');//获取提交按钮
	let content = document.querySelector('.write .content');
	// let lis = document.querySelector('li');
	console.log(content);
	wenben.onkeyup=function(){ //键盘在留言框中弹起函数
		let str=wenben.value; //留言框中的元素设置为变量str
		writes.innerText=`${max-str.length}`//writes数值的变化
	}
	wenben.onkeydown = function(e){
		if(e.keyCode == 13){  //回车
			let write = document.querySelector('.write');
			let first =content.firstElementChild;
			let lis = document.createElement('li');
			// console.log(write);
			lis.innerHTML = `
				<img src="img/touxiang.png" alt="">
				<div class="middle">
					<h3>${input.value}</h3>
					<p>${wenben.value}</p>
				</div>`;
				if(first){
					content.insertBefore(lis,first);
				}else{
					content.appendChild(lis);
				}
			
			input.value='';//文本框内容元素为空
			wenben.value='';//留言框内容元素为空
			writes.innerText = 120;
			
		}
	}
	submit.onclick=function(){
			let write = document.querySelector('.write');
			let first =content.firstElementChild;
			let lis = document.createElement('li');
			console.log(write);
			lis.innerHTML =`
				<img src="img/touxiang.png" alt="">
				<div class="middle">
					<h3>${input.value}</h3>
					<p>${wenben.value}</p>
				</div>`;
				if(first){
					content.insertBefore(lis,first);
				}else{
					content.appendChild(lis);
				}
			input.value='';
			wenben.value='';
			writes.innerText = 120;
	}
	content.onmouseover = function(e){

		let element = e.target;
		console.log(element)
		if(element.nodeName == 'LI'){
		

			element.style.background = '#333';
		}
	}
	content.onmouseout = function(e){
		let element = e.target;
		if(element.nodeName == 'LI'){
			element.style.background = '';
		}
	}

})