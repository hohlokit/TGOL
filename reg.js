var DataBase = [];

var users = {
    email: "admin@admin.com",
    pass: "admin",
    isonline: false
}

function RegisterUser(event) {
    event.preventDefault();


    var email = event.target.elements.email.value;
    var F_pass = event.target.elements.FirstPassword.value;
    var S_pass = event.target.elements.SecondPassword.value;

    if (F_pass === S_pass) {
        users = {
            email: email,
            pass: F_pass,
            isonline: false
        };

        DataBase.push(users);

        window.localStorage.setItem('DataBase', JSON.stringify(DataBase));
        event.target.reset();
        document.location.href = "./log.html";
    } else {
        alert("2");
    }
}

function Login(event) {
    event.preventDefault();

    var email = event.target.elements.email.value;
    var pass = event.target.elements.Password.value;

    var arrLocalStorage = JSON.parse(window.localStorage.getItem('DataBase'));



    if (arrLocalStorage && arrLocalStorage.length) {
        DataBase = arrLocalStorage;
        DataBase.forEach(element => {
            if (element.email === email && element.pass === pass) {
                alert("ok");


                var myJSON = JSON.stringify(DataBase)
                localStorage.setItem('DataBase', myJSON);
                users.email = email;
                users.pass = pass;
                users.isonline = true;
                var myJSON = JSON.stringify(users);
                localStorage.setItem('DataBase', myJSON);

                document.location.href = "./field.html";
            }
        });
    } else {
        alert("No user");
    }
}