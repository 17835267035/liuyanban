// 编辑
// 判断td  修改单元格td
// td保存下来oldv
// td清空
// input(oldv)  插入到td
// 事件委派
// 
// 更新
// 保存input
// input 删除
// newv  td
// 
// 删除  父元素的复元素  td tr
window.onload = function(){
	let table = document.querySelector('tbody');
	let add = document.querySelector('.add');
	// let students = [
	// 	{name:'张三',sex:'男',class:'131班',num:110,phone:12345},
	// 	{name:'李四',sex:'女',class:'132班',num:120,phone:12345},
	// 	{name:'王五',sex:'男',class:'131班',num:130,phone:35968},
	// 	{name:'赵六',sex:'女',class:'136班',num:140,phone:12345},
	// 	{name:'周七',sex:'男',class:'138班',num:110,phone:25686},
	// 	{name:'王八',sex:'女',class:'131班',num:180,phone:12345},
	// 	{name:'刘九',sex:'男',class:'135班',num:110,phone:12345}
	// ];
	let dataObj = new storage();
	// console.log(dataObj);
	load();
	function load(){
		let students = dataObj.getData();
		console.log(students); 
		// 查询
		students.forEach((element,index)=>{
			createDel(element,index);
		});
	}
	
	function createDel(obj,i){
		let trs = document.createElement('tr');
		trs.id = i;
		// for(let j in obj){
		// 	trs.innerHTML += `
		// 	<td type = "${j}">${obj[j]}</td>
		// 	`
		// }
		trs.innerHTML = `
			<td type = "name">${obj.name}</td>
			<td type = "sex">${obj.sex}</td>
			<td type = "class">${obj.class}</td>
			<td type = "num">${obj.num}</td>
			<td type = "phone">${obj.phone}</td>
			<td class="del"><button>删除</button></td>
		`;
		table.appendChild(trs);
	}
	
	//更新
	table.ondblclick = function(e){
		let element = e.target;
		if(element.nodeName == 'TD' && element.className != 'del'){
			let oldv = element.innerText;
			element.innerText = '';
			let inputs = document.createElement('input');
			inputs.value = oldv;
			element.appendChild(inputs);
			inputs.onblur = function(){  //失去焦点
				let newa = this.value.trim();
				element.removeChild(inputs);  //删除
				if(!newa){
					newa = oldv;
				}
				element.innerText = newa;

				//row  key  value
				let row = element.parentNode.id;
				let type = element.getAttribute('type');
				dataObj.update(row,type,newa);
				// inputs = null;
			}
		}else if(element.nodeName == 'BUTTON'){
			let trs = element.parentNode.parentNode;
			table.removeChild(trs);
			let index = element.parentNode.parentNode.id;
			dataObj.cancel(index);
			table.innerHTML = '';  //清空
			load();
		}
	}

	//添加
	add.ondblclick = function(){
		let obj = {name:'张三',sex:'男',class:'131班',num:110,phone:12345};
		createDel(obj,table.childElementCount);
		dataObj.push(obj);
	}
}