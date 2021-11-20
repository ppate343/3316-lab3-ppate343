//const newConnection = require('./DBConnection');

//let conn=newConnection();
//usinf script as a client to connect db
//importing mysql package 
const mysql = require ('mysql');
//after this call, what returns is the connection object 
let conn = mysql.createConnection({
    host: '34.136.98.79', 
    user: 'root', 
    password: '123', 
    database:'DoodleAppDB'

}); 

// establishing connection by calling the method call 
 
conn.connect(); 

//sending query
conn.query(`Drop Table Schedule` ,
                 (err, rows, fields) =>{
                    if(err)
                         console.log(err);
                    else
                         console.log('Table Dropped');
                }
            )         

conn.query(`CREATE TABLE Schedule 
(
    Slot1 varchar(100),
    Slot2 varchar(100),
    Slot3 varchar(100),
    Slot4 varchar(100),
    Slot5 varchar(100),
    Slot6 varchar(100),
    Slot7 varchar(100),
    Slot8 varchar(100),
    Slot9 varchar(100),
    Slot10 varchar(100)
)
`
,  (err, rows, fields) =>{
    if(err)
        console.log(err);
    else
        console.log('Table Created');
})

conn.query(`Drop Table History` ,
                 (err, rows, fields) =>{
                    if(err)
                         console.log(err);
                    else
                         console.log('Table Dropped');
                }
            )

conn.query(`CREATE TABLE History
 (
    Name varchar(100),
    slot1 varchar(100),
    slot2 varchar(100),
    slot3 varchar(100),
    slot4 varchar(100),
    slot5 varchar(100),
    slot6 varchar(100),
    slot7 varchar(100),
    slot8 varchar(100),
    slot9 varchar(100),
    slot10 varchar(100)
)
    `
    , (err, rows, fields) =>{
    if(err)
        console.log(err);
    else
        console.log('Table Created');
})



conn.query(`insert into Schedule values ("10:00","11:00","12:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00")`, 
    (err, rows, fields) =>{
    if(err)
        console.log(err);
    else
        console.log('One row inserted');
        
});
conn.query(`insert into History values("Puja", "10:00","11:00","12:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00")`, 
    (err, rows, fields) =>{
    if(err)
        console.log(err);
    else
        console.log('One row inserted');
        
});

//asynchronous : when theres something that takes time like a DB, it will be done on the side 
conn.query(`select * from Schedule`, 
    (err, rows, fields) =>{
    if(err)
        console.log(err);
    else
        console.log('One row inserted');
        for(r of rows)
            console.log(r);
            
});

conn.end(); 