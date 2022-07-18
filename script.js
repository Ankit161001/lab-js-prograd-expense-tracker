let storedata = () => {
    let text = document.querySelector("#text").value 
    let value = document.querySelector('#amount').value
    localStorage.setItem(text, value)

    let sum = 0
    positive = 0
    negative = 0
    for (var i = 0; i < localStorage.length; i++) {
        sum += parseFloat(localStorage.getItem(localStorage.key(i)));
        if (parseFloat(localStorage.getItem(localStorage.key(i))) >= 0) {
            positive += parseFloat(localStorage.getItem(localStorage.key(i)))
            // createplus(parseFloat(localStorage.getItem(localStorage.key(i))))
        }
        else {
            negative += parseFloat(localStorage.getItem(localStorage.key(i)))
            // createminus(parseFloat(localStorage.getItem(localStorage.key(i))))
        }
    }
    if (parseFloat(value) >= 0) {
        createplus(parseFloat(value))
    }
    else {
        createminus(parseFloat(value))
    }

    document.getElementById('balance').innerText = "$ " + sum
    document.getElementById('money-plus').innerText = "$ " + positive
    document.getElementById('money-minus').innerText = "$ " + negative
}


let deletealldata = () => {
    localStorage.clear()
    window.location.reload();
}


let createplus = (value1) => {
    mainkey = ""
    amount = ""
    for (let [key, value] of Object.entries(localStorage)) {
        console.log(key);
        if (value1 === parseFloat(value)) {
            console.log(key);
            mainkey = key;
            amount = value;
        }
    }
    let newli = document.createElement('li');
    newli.className = "plus";
    let sentence = mainkey + " : " + amount
    newli.innerHTML = sentence;

    document.getElementById('list').appendChild(newli)
    console.log(sentence)
}

let createminus = (value1) => {
    mainkey = ""
    amount = ""
    for (let [key, value] of Object.entries(localStorage)) {
        console.log(key);
        if (value1 === parseFloat(value)) {
            console.log(key);
            mainkey = key;
            amount = value;
        }
    }
    let newli = document.createElement('li');
    newli.className = "minus";
    let sentence = mainkey + " : " + amount
    newli.innerHTML = sentence;

    document.getElementById('list').appendChild(newli)
    console.log(sentence)
}

let afterload = () => {
    let sum = 0
    positive = 0
    negative = 0
    for (var i = 0; i < localStorage.length; i++) {
        sum += parseFloat(localStorage.getItem(localStorage.key(i)));
        if (parseFloat(localStorage.getItem(localStorage.key(i))) >= 0) {
            positive += parseFloat(localStorage.getItem(localStorage.key(i)))
            createplus(parseFloat(localStorage.getItem(localStorage.key(i))))
        }
        else {
            negative += parseFloat(localStorage.getItem(localStorage.key(i)))
            createminus(parseFloat(localStorage.getItem(localStorage.key(i))))
        }
    }

    document.getElementById('balance').innerText = "$ " + sum
    document.getElementById('money-plus').innerText = "$ " + positive
    document.getElementById('money-minus').innerText = "$ " + negative
}