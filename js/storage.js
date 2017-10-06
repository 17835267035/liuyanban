//增删改查

//属性 
//  存储data、
//方法
//  增删改查
//  init初始化  add增  del删  update改  clear清除  search查  getData获取数据 sava保存
class storage{
	constructor(){
		this.data = [];

	}
	_init(){    //对内部进行调用
		let students = [
		{name:'张三',sex:'男',class:'131班',num:'110',phone:'12345'},
		{name:'李四',sex:'女',class:'132班',num:'120',phone:'12345'},
		{name:'王五',sex:'男',class:'131班',num:'130',phone:'35968'},
		{name:'赵六',sex:'女',class:'136班',num:'140',phone:'12345'},
		{name:'周七',sex:'男',class:'138班',num:'110',phone:'25686'},
		{name:'王八',sex:'女',class:'131班',num:'180',phone:'12345'},
		{name:'刘九',sex:'男',class:'135班',num:'110',phone:'12345'}
		];
		localStorage.setItem('students',JSON.stringify(students));
		console.log(students);
	}
	getData(){
		let data = localStorage.getItem('students');
		if(!data){
			this._init();
		}
		return this.data = JSON.parse(localStorage.getItem('students'));
	}
	update(row,type,value){
		// let data = this.getData();
		this.data[row][type] = value;
		this.save();
	}
	cancel(index){
		this.data.splice(index,1);
		this.save();
	}
	push(obj){
		this.data.push(obj);
		this.save();
	}
	save(){
		localStorage.students = JSON.stringify(this.data);
	}
}