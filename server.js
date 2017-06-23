var cron = require('node-cron');
var fs = require('fs');


cron.schedule('*/2 * * * * *', function(){

	var d = new Date();
	var mask_date=d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
	var mask_time=d.getHours()+'-'+d.getMinutes()+'-'+d.getSeconds();
	fs.writeFile("./backup/bk"+mask_time+".txt", "Time:"+mask_time+"\nDate"+mask_date, function(err) {
    if(err) {
        return console.log(err);
    		}
    console.log("The file was saved!");
	}); 
  //console.log('running a task every minute');
});