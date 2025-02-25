const db =
   [{ "accno": 1000, "username": "joy", "password": 123, "balance": 15000, "transaction": [] },
   { "accno": 1001, "username": "ben", "password": 1234, "balance": 150000, "transaction": [] },
   { "accno": 1002, "username": "john", "password": 1231, "balance": 25000, "transaction":[]}

];

// function to ckeck account number,if acc no in db then return true else false?
  function accexist(accno){
      return db.some(x => x.accno === accno);
  };

  console.log(accexist(1000));
  console.log(accexist(1005));

//   the some method returns true if atleast one Element

