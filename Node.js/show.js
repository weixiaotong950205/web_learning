//自定义show模块
//定义show类---js中如果变量和方法都带this,那么这个函数是-类；

function show(){
	this.name='user1';
	this.say=function(){
		console.log('my name is ' + this.name);
	}
}

module.exports=new show();