const {Queue} = require('bullmq');

const notificationQ = new Queue("EmailQueue",{
    connection:{
        host:'127.0.0.1' ,
        port:"6379",
    }
});

async function initaliztion()
{
   const result = await notificationQ.add('Email to Rahul',{
        email:'rahulkumar@gmai.com',
        subject:'Welcome to site bhai',
        body:"Hi,Rahul happy you came here",
       

    });
    console.log("job added to queue",result.id);

}

initaliztion();