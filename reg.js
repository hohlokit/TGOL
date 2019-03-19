var DataBase = [];

function RegisterUser(event) {
    event.preventDefault();

    var arrLocalStorage = JSON.parse(window.localStorage.getItem('DataBase'));

    if (arrLocalStorage && arrLocalStorage.length) {
        alert("@");
    }
    var email = event.target.elements.email.value;
    var F_pass = event.target.elements.FirstPassword.value;
    var S_pass = event.target.elements.SecondPassword.value;

    if (F_pass === S_pass) {
        DataBase.push({
            email: email,
            pass: F_pass
        });

        window.localStorage.setItem('DataBase', JSON.stringify(DataBase));
        event.target.reset();
        document.location.href = "./log.html";
    } else {
        alert("pes");
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
            }
        });
    } else {
        alert("No user");
    }
}