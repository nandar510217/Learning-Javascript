
// Change Text
let text = document.getElementById('text');
let changeText = () => {
    text.innerHTML= 'Hello lady and gentlemen!';
    text.style.color = 'green';
}

let changeText1 = () => {
    text.innerHTML= 'Hello Men and Women!';
    text.style.color = 'blue';
}

//join function
let names = ["mg mg", "ma ma", "ko ko", "zaw zaw"]
let joinn = names.join(' - ');
console.log(joinn);

//map function
let mapp = names.map((name) => {
    var look = " is handsome.";
    if(name == "ma ma" ) {
        look = " is pretty."
    }
    return name + look;
});
console.log(mapp);

//filter function
let filterMaMa = names.filter((name) => { 
    return name == 'ma ma';
})
console.log(names);
console.log(filterMaMa)

//reduce function
let prices = [1000, 2000, 1500]
let totalPrice = prices.reduce((current, num) => {
    return current + num;
});
console.log(totalPrice);

//array spread

