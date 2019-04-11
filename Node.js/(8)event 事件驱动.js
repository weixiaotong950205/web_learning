const event=require('events');//const定义一个常量


evt=new event.EventEmitter();//event.EventEmitter()触发器


function eventHandler(){
	console.log('111');
	console.log('222');
}
evt.on('eventName',eventHandler);//当触发eventName时，去调用eventHandler函数

evt.emit('eventName');//触发这个事件，调用这个函数