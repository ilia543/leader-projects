const click = document.getElementById("click");
const score = document.getElementById("score");
const coins = document.getElementById("coins");
const btn = document.getElementById("btn");
const byBTn = document.getElementById("byBTn");
let perClick = 1;
let coinsPerClick = 1;

let count = 0;
let coins1 = 0;

const load = () => {
    let savedCookies = JSON.parse(localStorage.getItem('cookies')) || 0;
    let savedCoins = JSON.parse(localStorage.getItem('coins')) || 0;
    let savedFarmLevel = JSON.parse(localStorage.getItem('farmLevel')) || 0;
    let savedFarmPersec = JSON.parse(localStorage.getItem('farmPersec')) || 10;
    let savedFarmCost = JSON.parse(localStorage.getItem('farmCost')) || 100;
    let savedBankLevel = JSON.parse(localStorage.getItem('bankLevel')) || 0;
    let savedBankPersec = JSON.parse(localStorage.getItem('bankPersec')) || 50;
    let savedBankCost = JSON.parse(localStorage.getItem('bankCost')) || 400;
    let savedGrandmaLevel = JSON.parse(localStorage.getItem('grandmaLevel')) || 0;
    let savedGrandmaPersec = JSON.parse(localStorage.getItem('grandmaPersec')) || 2;
    let savedGrandmaCost = JSON.parse(localStorage.getItem('grandmaCost')) || 50;
    let savedGrandmaUpgradeLvl1Cost = JSON.parse(localStorage.getItem('grandmaUpgradeLvl1Cost')) || 10000;
    let savedGrandmaUpgradeLvl2Cost = JSON.parse(localStorage.getItem('grandmaUpgradeLvl2Cost')) || 20000;
    let savedGrandmaUpgradeLvl3Cost = JSON.parse(localStorage.getItem('grandmaUpgradeLvl3Cost')) || 30000;
    let savedBankUpgradeLvl1Cost = JSON.parse(localStorage.getItem('bankUpgradeLvl1Cost')) || 10000;
    let savedBankUpgradeLvl2Cost = JSON.parse(localStorage.getItem('bankUpgradeLvl2Cost')) || 20000;
    let savedBankUpgradeLvl3Cost = JSON.parse(localStorage.getItem('bankUpgradeLvl3Cost')) || 30000;
    let savedFarmUpgradeLvl1Cost = JSON.parse(localStorage.getItem('farmUpgradeLvl1Cost')) || 10000;
    let savedFarmUpgradeLvl2Cost = JSON.parse(localStorage.getItem('farmUpgradeLvl2Cost')) || 20000;
    let savedFarmUpgradeLvl3Cost = JSON.parse(localStorage.getItem('farmUpgradeLvl3Cost')) || 30000;
    let bigThumbLvl1Cost = JSON.parse(localStorage.getItem('bigThumbLvl1Cost')) || 100;
    let bigThumbLvl2Cost = JSON.parse(localStorage.getItem('bigThumbLvl2Cost')) || 300;
    let bigThumbLvl3Cost = JSON.parse(localStorage.getItem('bigThumbLvl3Cost')) || 500;

    count = savedCookies;
    score.textContent = count;
    coins1 = savedCoins;
    coins.textContent = coins1;
    farmLevel = savedFarmLevel;
    farmPersec = savedFarmPersec;
    farmCost = savedFarmCost;
    buyFarmButton.textContent = `Buy Farm ${farmCost} cookies`;
    bankLevel = savedBankLevel;
    bankPersec = savedBankPersec;
    bankCost = savedBankCost;
    buyBankButton.textContent = `Buy Bank ${bankCost} cookies`;
    grandmaLevel = savedGrandmaLevel;
    grandmaPersec = savedGrandmaPersec;
    grandmaCost = savedGrandmaCost;
    buyGrandmaButton.textContent = `Buy Grandma ${grandmaCost} cookies`;
    document.querySelector('.grandmaUpgradeLvl1').textContent = `Grandmas will be twice as efficient cost: ${savedGrandmaUpgradeLvl1Cost} cookies`;
    document.querySelector('.grandmaUpgradeLvl2').textContent = `Grandmas will be three times as efficient cost: ${savedGrandmaUpgradeLvl2Cost} cookies`;
    document.querySelector('.grandmaUpgradeLvl3').textContent = `Grandmas will be four times as efficient cost: ${savedGrandmaUpgradeLvl3Cost} cookies`;
    document.querySelector('.bankUpgradeLvl1').textContent = `Banks will be twice as efficient cost: ${savedBankUpgradeLvl1Cost} cookies`;
    document.querySelector('.bankUpgradeLvl2').textContent = `Banks will be three times as efficient cost: ${savedBankUpgradeLvl2Cost} cookies`;
    document.querySelector('.bankUpgradeLvl3').textContent = `Banks will be four times as efficient cost: ${savedBankUpgradeLvl3Cost} cookies`;
    document.querySelector('.farmUpgradeLvl1').textContent = `Farms will be twice as efficient cost: ${savedFarmUpgradeLvl1Cost} cookies`;
    document.querySelector('.farmUpgradeLvl2').textContent = `Farms will be three times as efficient cost: ${savedFarmUpgradeLvl2Cost} cookies`;
    document.querySelector('.farmUpgradeLvl3').textContent = `Farms will be four times as efficient cost: ${savedFarmUpgradeLvl3Cost} cookies`;
    bigThumbLvl1Cost = savedBigThumbLvl1Cost;
    bigThumbLvl2Cost = savedBigThumbLvl2Cost;
    bigThumbLvl3Cost = savedBigThumbLvl3Cost;
    document.querySelector('.level1bigThumb').textContent = `Big Thumb cost: ${bigThumbLvl1Cost} cookies`;
    document.querySelector('.level2bigThumb').textContent = `Big Thumb cost: ${bigThumbLvl2Cost} cookies`;
    document.querySelector('.level3bigThumb').textContent = `Big Thumb cost: ${bigThumbLvl3Cost} cookies`;
};

const save = () => {
    localStorage.setItem('cookies', JSON.stringify(count));
    localStorage.setItem('coins', JSON.stringify(coins1));
    localStorage.setItem('perClick', JSON.stringify(perClick));
    localStorage.setItem('farmLevel', JSON.stringify(farmLevel));
    localStorage.setItem('farmCost', JSON.stringify(farmCost));
    localStorage.setItem('farmPersec', JSON.stringify(farmPersec));
    localStorage.setItem('bankLevel', JSON.stringify(bankLevel));
    localStorage.setItem('bankCost', JSON.stringify(bankCost));
    localStorage.setItem('bankPersec', JSON.stringify(bankPersec));
    localStorage.setItem('grandmaLevel', JSON.stringify(grandmaLevel));
    localStorage.setItem('grandmaCost', JSON.stringify(grandmaCost));
    localStorage.setItem('grandmaPersec', JSON.stringify(grandmaPersec));
    localStorage.setItem('farmUpgradeLvl1Cost', JSON.stringify(farmUpgradeLvl1Cost));
    localStorage.setItem('farmUpgradeLvl2Cost', JSON.stringify(farmUpgradeLvl2Cost));
    localStorage.setItem('farmUpgradeLvl3Cost', JSON.stringify(farmUpgradeLvl3Cost));
    localStorage.setItem('bankUpgradeLvl1Cost', JSON.stringify(bankUpgradeLvl1Cost));
    localStorage.setItem('bankUpgradeLvl2Cost', JSON.stringify(bankUpgradeLvl2Cost));
    localStorage.setItem('bankUpgradeLvl3Cost', JSON.stringify(bankUpgradeLvl3Cost));
    localStorage.setItem('grandmaUpgradeLvl1Cost', JSON.stringify(grandmaUpgradeLvl1Cost));
    localStorage.setItem('grandmaUpgradeLvl2Cost', JSON.stringify(grandmaUpgradeLvl2Cost));
    localStorage.setItem('grandmaUpgradeLvl3Cost', JSON.stringify(grandmaUpgradeLvl3Cost));
    localStorage.setItem('autoClickerLvl1Cost', JSON.stringify(autoClickerLvl1Cost));
    localStorage.setItem('autoClickerLvl2Cost', JSON.stringify(autoClickerLvl2Cost));
    localStorage.setItem('autoClickerLvl3Cost', JSON.stringify(autoClickerLvl3Cost));
    localStorage.setItem('bigThumbLvl1Cost', JSON.stringify(bigThumbLvl1Cost));
    localStorage.setItem('bigThumbLvl2Cost', JSON.stringify(bigThumbLvl2Cost));
    localStorage.setItem('bigThumbLvl3Cost', JSON.stringify(bigThumbLvl3Cost));
};

window.addEventListener('load', load);


click.addEventListener('click', function() {
    count += perClick;
    score.textContent = count;

    if (count % 10 === 0) {
        coins1++;
        coins.textContent = coins1;
    }

    let elem = document.createElement('p');
    elem.className = "plus";
    elem.textContent = `+${perClick}`;
    elem.style.position = "absolute";
    elem.style.color = 'white';
    elem.style.fontSize = "35px";
    elem.style.bottom = "420px";
    elem.style.left = "450px";

    document.body.appendChild(elem);
    setTimeout(() => {
        elem.remove();
    }, 2000);
    save()
});

btn.addEventListener('click', function() {
    count = 0;
    score.textContent = count;
    save()
});

const buyFarmButton = document.getElementById("buyFarm");
let farmLevel = 0;
let farmCost = 100;
let farmPersec = 10;
// let farmsContainer = document.getElementById("farms-container");

buyFarmButton.addEventListener("click", () => {
    if (count >= farmCost) {
        count -= farmCost;
        farmLevel++;
        farmCost *= 2;
        buyFarmButton.textContent = `Buy Farm ${farmCost} cookies`;
        score.textContent = count;
        save()
        if (farmLevel >= 20) {
            buyFarmButton.disabled = true;
        }
    }
});

setInterval(() => {
    count += farmPersec * farmLevel; 
    score.textContent = count;
    save()
}, 1000);

const buyBankButton = document.getElementById("buyBank");
let bankLevel = 0;
let bankCost = 400;
let bankPersec = 50;


buyBankButton.addEventListener("click", () => {
    if (count >= bankCost) {
        count -= bankCost;
        bankLevel++;
        bankCost *= 2;
        buyBankButton.textContent = `Buy Bank ${bankCost} cookies`;
        score.textContent = `Score: ${count}`;
        save()
        if (bankLevel >= 20) {
            buyBankButton.disabled = true;
        }
    }
});

setInterval(() => {
    count += bankPersec * bankLevel; 
    score.textContent = count;
    save()
}, 1000);

const buyGrandmaButton = document.getElementById("buyGrandma");
let grandmaLevel = 0;
let grandmaCost = 50;
let grandmaPersec = 2;

buyGrandmaButton.addEventListener("click", () => {
    if (count >= grandmaCost) {
        count -= grandmaCost;
        grandmaLevel++;
        grandmaCost *= 2;
        buyGrandmaButton.textContent = `Buy Grandma ${grandmaCost} cookies`;
        score.textContent = `Score: ${count}`;
        save()
    }
});

setInterval(() => {
    count += grandmaPersec * grandmaLevel; 
    score.textContent = count;
    save()
}, 1000);


let grandmaUpgradeLvl1Cost = 10000;
let grandmaUpgradeLvl2Cost = 20000;
let grandmaUpgradeLvl3Cost = 30000;

document.querySelector('.grandmaUpgradeLvl1').addEventListener('click', function(){
    if(count > grandmaUpgradeLvl1Cost){
        count -= grandmaUpgradeLvl1Cost;
        grandmaPersec *= 2;
        grandmaUpgradeLvl1Cost *= 2;
        document.querySelector('.grandmaUpgradeLvl1').textContent = `Grandmas will be twice as efficient cost: ${grandmaUpgradeLvl1Cost} cookies`;
        save()
    };
});

document.querySelector('.grandmaUpgradeLvl2').addEventListener('click', function(){
    if(count > grandmaUpgradeLvl2Cost){
        count -= grandmaUpgradeLvl2Cost;
        grandmaPersec *= 3;
        grandmaUpgradeLvl2Cost *= 2;
        document.querySelector('.grandmaUpgradeLvl2').textContent = `Grandmas will be three times as efficient cost: ${grandmaUpgradeLvl2Cost} cookies`;
        save()
    };
});

document.querySelector('.grandmaUpgradeLvl3').addEventListener('click', function(){
    if(count > grandmaUpgradeLvl3Cost){
        count -= grandmaUpgradeLvl3Cost;
        grandmaPersec *= 4;
        grandmaUpgradeLvl3Cost *= 2;
        document.querySelector('.grandmaUpgradeLvl3').textContent = `Grandmas will be four times as efficient cost: ${grandmaUpgradeLvl3Cost} cookies`;
        save()
    };
});

let farmUpgradeLvl1Cost = 10000;
let farmUpgradeLvl2Cost = 20000;
let farmUpgradeLvl3Cost = 30000;

document.querySelector('.farmUpgradeLvl1').addEventListener('click', function(){
    if(count > farmUpgradeLvl1Cost){
        count -= farmUpgradeLvl1Cost;
        farmPersec *= 2;
        farmUpgradeLvl1Cost *= 2;
        document.querySelector('.farmUpgradeLvl1').textContent = `Farms will be twice as efficient cost: ${farmUpgradeLvl1Cost} cookies`;
        save()
    };
});

document.querySelector('.farmUpgradeLvl2').addEventListener('click', function(){
    if(count > farmUpgradeLvl2Cost){
        count -= farmUpgradeLvl2Cost;
        farmPersec *= 3;
        farmUpgradeLvl2Cost *= 2;
        document.querySelector('.farmUpgradeLvl2').textContent = `Farms will be three times as efficient cost: ${farmUpgradeLvl2Cost} cookies`
        save()
    };
});

document.querySelector('.farmUpgradeLvl3').addEventListener('click', function(){
    if(count > farmUpgradeLvl3Cost){
        count -= farmUpgradeLvl3Cost;
        farmPersec *= 4;
        farmUpgradeLvl3Cost *= 2;
        document.querySelector('.farmUpgradeLvl3').textContent = `Farms will be four times as efficient cost: ${farmUpgradeLvl3Cost} cookies`
        save()
    };
});

let bankUpgradeLvl1Cost = 10000;
let bankUpgradeLvl2Cost = 20000;
let bankUpgradeLvl3Cost = 30000;

document.querySelector('.bankUpgradeLvl1').addEventListener('click', function(){
    if(count > bankUpgradeLvl1Cost){
        count -= bankUpgradeLvl1Cost;
        bankPersec *= 2;
        bankUpgradeLvl1Cost *= 2;
        document.querySelector('.bankUpgradeLvl1').textContent = `Banks will be twice as efficient cost: ${bankUpgradeLvl1Cost} cookies`
        save()
    };
});

document.querySelector('.bankUpgradeLvl2').addEventListener('click', function(){
    if(count > bankUpgradeLvl2Cost){
        count -= bankUpgradeLvl2Cost;
        bankPersec *= 3;
        bankUpgradeLvl2Cost *= 2;
        document.querySelector('.bankUpgradeLvl2').textContent = `Banks will be three times as efficient cost: ${bankUpgradeLvl2Cost} cookies`
        save()
    };
});

document.querySelector('.bankUpgradeLvl3').addEventListener('click', function(){
    if(count > bankUpgradeLvl3Cost){
        count -= bankUpgradeLvl3Cost;
        bankPersec *= 4;
        bankUpgradeLvl3Cost *= 2;
        document.querySelector('.bankUpgradeLvl3').textContent = `Banks will be four times as efficient cost: ${bankUpgradeLvl3Cost} cookies`
        save()
    };
});

let autoClickerActive = false;
let autoClickerLvl1Cost = 2000;
let autoClickerLvl2Cost = 4000;
let autoClickerLvl3Cost = 1;

document.querySelector('.level1auto').addEventListener("click", () => {
    if (count >= autoClickerLvl1Cost) {
        count -= autoClickerLvl1Cost;
        score.textContent = count;
        save()
        document.querySelector('.level1auto').disabled = true;
        document.querySelector('.level2auto').disabled = true;
        document.querySelector('.level3auto').disabled = true;
        autoClickerActive = true;
        const t = setInterval(() => {
            count += perClick;
            score.textContent = count;
            save()
        }, 200);

        setTimeout(() => {
            autoClickerActive = false;
            clearInterval(t);
            document.querySelector('.level1auto').disabled = false;
            document.querySelector('.level2auto').disabled = false;
            document.querySelector('.level3auto').disabled = false;
        }, 300000);
        save()
    }
});

document.querySelector('.level2auto').addEventListener("click", () => {
    if (coins1 >= autoClickerLvl2Cost) {
        coins1 -= autoClickerLvl2Cost;
        coins.textContent = coins1;

        document.querySelector('.level1auto').disabled = true;
        document.querySelector('.level2auto').disabled = true;
        document.querySelector('.level3auto').disabled = true;

        autoClickerActive = true;
        const t = setInterval(() => {
            count += perClick;
            score.textContent = count;
            save()
        }, 150);

        setTimeout(() => {
            autoClickerActive = false;
            clearInterval(t);
            document.querySelector('.level1auto').disabled = false;
            document.querySelector('.level2auto').disabled = false;
            document.querySelector('.level3auto').disabled = false;
        }, 600000);
        save()
    }
});

document.querySelector('.level3auto').addEventListener("click", () => {
    if (coins1 >= autoClickerLvl3Cost) {
        coins1 -= autoClickerLvl3Cost;
        coins.textContent = coins1;

        document.querySelector('.level1auto').disabled = true;
        document.querySelector('.level2auto').disabled = true;
        document.querySelector('.level3auto').disabled = true;

        autoClickerActive = true;
        const t = setInterval(() => {
            count += perClick;
            score.textContent = count;
            save()
        }, 100);

        setTimeout(() => {
            autoClickerActive = false;
            clearInterval(t);
            document.querySelector('.level1auto').disabled = false;
            document.querySelector('.level2auto').disabled = false;
            document.querySelector('.level3auto').disabled = false;
        }, 1200000);
        save()
    }
});

let bigThumbActive = false;
let bigThumbLvl1Cost = 100;
let bigThumbLvl2Cost = 300;
let bigThumbLvl3Cost = 500;

document.querySelector('.level1bigThumb').addEventListener("click", () => {
    if (count >= bigThumbLvl1Cost) {
        count -= bigThumbLvl1Cost;
        score.textContent = count;
        document.querySelector('.level1bigThumb').disabled = true;
        document.querySelector('.level2bigThumb').disabled = false;
        perClick++;
        if (count % 20 === 0) {
            coins1++;
            coins.textContent = coins1;
            save()
        }
    }
    save()
});

document.querySelector('.level2bigThumb').addEventListener("click", () => {
    if (count >= bigThumbLvl2Cost) {
        count -= bigThumbLvl2Cost;
        score.textContent = count;
        document.querySelector('.level2bigThumb').disabled = true;
        document.querySelector('.level1bigThumb').disabled = true;
        document.querySelector('.level3bigThumb').disabled = false;
        perClick += 2;

        if (count % 20 === 0) {
            coins1++;
            coins.textContent = coins1;
            save()
        }
        save()
    }
});

document.querySelector('.level3bigThumb').addEventListener("click", () => {
    if (count >= bigThumbLvl3Cost) {
        count -= bigThumbLvl3Cost;
        score.textContent = count;
        document.querySelector('.level3bigThumb').disabled = false;
        document.querySelector('.level1bigThumb').disabled = true;
        document.querySelector('.level2bigThumb').disabled = true;
        perClick += 3;

        if (count % 20 === 0) {
            coins1++;
            coins.textContent = coins1;
            save()
        }
        bigThumbLvl3Cost *= 2;
        document.querySelector('.level3bigThumb').textContent = `Big Thumb cost: ${bigThumbLvl3Cost} cookies`
        save()
    }
});

const buyScoreInput = document.getElementById("byScore");
const buyButton = document.getElementById("byBTn");

buyButton.addEventListener("click", () => {
    const cookiesToBuy = parseInt(buyScoreInput.value);
    if (!isNaN(cookiesToBuy) && cookiesToBuy > 0) {
        const coinsRequired = Math.ceil(cookiesToBuy / 10);
        save()
        if (coins1 >= coinsRequired) {
            coins1 -= coinsRequired;
            count += cookiesToBuy;
            coins.textContent = coins1;
            score.textContent = count;
            save()
        } else {
            alert("You don't have enough coins to buy this many cookies.");
            save()
        }
    } else {
        alert("Please enter a valid number of cookies to buy.");
        save()
    }

    buyScoreInput.value = "";
    save()
});
