1. Clone repo
2. npm install
3. npm start



EndPoints

AUTH
   
    http://domain.test/auth/signin GET
    
    "Content-Type": "application/json; charset=utf-8"
    Body: {
        "email": "test@test.test",
        "password: "secret"
        }
        ------------------------------
    http://domain.test/auth/signup POST
            
    "Content-Type": "application/json; "
    Body: {
        "email": "test@test.test",
        "password: "secret"
        }


ITEMS    
   
    http://domain.test/feed/items GET

    "Content-Type": "application/json; charset=utf-8"
 
        ------------------------------
    http://domain.test/feed/items POST
            
    "Content-Type": "application/json; "
    Body: {
        "title": "....",
        "description: "....",
        "price": "...."
        }
