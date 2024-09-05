const { Worker } = require("bullmq");

const sendEmail = ()=> 
    new Promise((res,rej)=> setTimeout(()=> res(), 5*1000 ));

const worker =  new Worker("EmailQueue", async (job)=>{
    // console.log('I got a message ');
    console.log(`Message receive id: ${job.id} `);
    console.log(`sending email to ${job.data.email}`);
    await sendEmail();
    console.log("email sent");
});

