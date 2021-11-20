//importing express library downloaded from npm install express
//const { application, response } = require('express');
const express = require('express'); 



const newConnection = require('./DBConnection');

//execution returns an instance of the server, (app is just a convention can be named anything)
const app = express(); 

app.use(express.static('static')); 


app.get('/login', (req,res) => {
   

        res.sendFile(__dirname + "/static/editSchedule.html");
   
});

app.get('/updateSchedule', (req,res) => {
    let conn=newConnection();
    conn.connect();
    
    conn.query(`UPDATE Schedule SET (Slot1 = '${req.query.s1}',Slot2 = '${req.query.s2}',Slot3 = '${req.query.s3}',
    Slot4 = '${req.query.s4}', Slot5 = '${req.query.s5}', Slot6 = '${req.query.s6}',Slot7 = '${req.query.s7}'
    ,Slot8 = '${req.query.s8}',Slot9 = '${req.query.s9}',Slot10 = '${req.query.s10}' )`
    ,(err,rows,fields) => {
        res.sendFile(__dirname + "/static/index.html");       
    } );
conn.end(); 
     
   });

app.get('/DoodlePage', (req,res) => {

    res.sendFile(__dirname + "/static/addGuest.html"); 
   });

   app.get('/History', (req,res) => {









    //res.sendFile(__dirname + "/static/History.html"); 
   });

// app.get('/Guest', (req, res)=> {

//     let conn=newConnection();
//     conn.connect();
//     let Users;
//     conn.query(`select * from Schedule`, (err,rows,fields) => {

//         if (err)
//             response.send('ERROR: ' +err)
//         else
//         {
//             Users = rows;

//             let content ='';
//             for (u of Users)
//             {
//                 content += '<div>';
//                 content += p.Description + ":" + p.Price 
//                 content += ` <a href='/prod-img?path=${p.imgPath}&desc=${p.description}'> See Image</a>`
//                 content += '</div>'
//                 content += '\n';
//             }

//             response.send(content);
//         }
//     })    

//     conn.end();
// res.send(req.query.name + " was added to doodle app guests"); 
// });

app.get('/History', (request, response) => {
    let conn=newConnection();
    conn.connect();
    let Users;
    conn.query(`select * from History`, (err,rows,fields) => {

        if (err)
            response.send('ERROR: ' +err)
        else
        {
            Users = rows;

            let content ='';
            for (c of Users)
            {
                content += '<div>';
                content += c.Name + ":" + c.Slot1 + ":" + c.Slot2 + ":" + c.Slot3 + ":" + c.Slot4 + ":" + c.Slot5 + ":" + c.Slot6 + ":" + c.Slot7 + ":" + c.Slot8 + ":" + c.Slot9 + ":" + c.Slot10; 
                content += '</div>'
                content += '\n';
            }

            response.send(content);
        }
    })    

    conn.end();
})

app.listen(80); 
