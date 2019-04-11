//web模块
os=require('os');

//tot=os.totalmem;//内存总量
//tot=os.freemem;//剩余内存
//tot=os.tmpdir();//临时文件夹
//tot=os.hostname();//电脑的主机名
//tot=os.type();
//tot=os.platform();//平台---win32
//tot=os.loadavg();//平均负载--越小越好
//tot=os.cpus();//cpu的一些参数
tot=os.networkInterfaces();//网卡列表

console.log(tot);


