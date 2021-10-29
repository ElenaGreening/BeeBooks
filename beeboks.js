let beeMobSection = document.querySelector(".BeeMob-section")

let makeOrderForm = document.querySelector(".BeeMob-makeOrderForm")
beeMobSection.append(makeOrderForm)

let fillOutForm = document.querySelector(".fillOutForm")
fillOutForm.classList.add("borderTop")

let selectedServicesHeader = document.querySelector(".BeeMob-selectedServices_header")

let makeOrderFormContainer = document.querySelector(".BeeMob-displayRow")
makeOrderForm.append(selectedServicesHeader)
makeOrderForm.append(makeOrderFormContainer)
makeOrderForm.append(fillOutForm)


let containerForServices = document.querySelector(".BeeMob-selectedServices")
makeOrderFormContainer.append(containerForServices)


let totalPrice = document.querySelector(".totalPrice")
makeOrderFormContainer.append(totalPrice)

document.getElementById("20").checked = false;
document.getElementById("346").checked = false;
document.getElementById("C106").checked = false;

let selectedServicesArr = []
let prices = []
 let chosenLabel = Array.from(document.querySelectorAll(".BeeMob-calculator-fieldset__label"))

let inputs = Array.from(document.querySelectorAll(".BeeMob-calculator-CustomRadio")
).map(item => item.addEventListener("click", makeServices ))

// Array.from(document.querySelectorAll(".BeeMob-calculator-CustomRadio").map( item => item.addEventListener("click", function (){
//     if (item.checked === true){
//         item.checked = false
//     }
// })))


function makeServices () {
    let selectedServicesArr = []
    let prices = []

    Array.from(document.querySelectorAll(".BeeMob-calculator-CustomRadio")
    ).map(input => {
        if (input.checked) {
            selectedServicesArr.push(input)
        }
    })
    console.log(selectedServicesArr)

    containerForServices.innerHTML = "";
    selectedServicesArr.map(item => {
        let serviceItem = document.createElement('div')
        serviceItem.classList.add("BeeMob-selectedServices_item")
        containerForServices.append(serviceItem)
        let serviceDescription = document.createElement('p')
        serviceDescription.classList.add("BeeMob-selectedServices-elem")
        switch (item.id){
            case "346":
                serviceDescription.innerHTML = "Monthly Expenses 0-15.6k";
                break;
            case "447":
                serviceDescription.innerHTML = "Expenses per month 15.7-48.6k"
                break;
            case "577":
                serviceDescription.innerHTML = "Expenses per month  48.7-100.6k"
                break;
            case "question":
                serviceDescription.innerHTML = "Other"
                break;
            case "C106":
                serviceDescription.innerHTML = "C-Corporation per month "
                break;
            case "S106":
                serviceDescription.innerHTML = "S-corporation/Partnership"
                break;
            case "76":
                serviceDescription.innerHTML = "Self Employed"
                break;
            case "other":
                serviceDescription.innerHTML = "Other"
                break;
            case "20":
                serviceDescription.innerHTML = "Monthly Base"
                break;
            case "r10":
                serviceDescription.innerHTML = "Monthly Rental Property"
                break;
            case "i10":
                serviceDescription.innerHTML = "Monthyl Invetsments+K1"
                break;
            case  "q":
                serviceDescription.innerHTML = "Other"
                break;
            default:
                serviceDescription.innerHTML = "whoops something went wrong"
        }
        serviceItem.append(serviceDescription)

        let servicePrice = document.createElement("p")
        servicePrice.classList.add("BeeMob-selectedServices-elem")
        if (item.id === "346") {
           let price = 346
            servicePrice.innerText = price + `$`
            prices.push(price)
        }
        else if (item.id === "447") {
            let price = 447
            servicePrice.innerText = price + `$`
            prices.push(price)
        }

       else if (item.id === "577") {
            let price = 577
            servicePrice.innerText = price + `$`
            prices.push(price)
        }
       else if (item.id === "question") {
            let price = 0
            prices.push(price)
            let pictureQuestion = document.createElement("img")
            pictureQuestion.classList.add("pictureQuestion")
            pictureQuestion.src = "socmed/Group.svg"
            servicePrice.append(pictureQuestion)
        }
        else if (item.id === "C106") {
            let price = 106
            servicePrice.innerText = price + `$`
            prices.push(price)
        }
        else if (item.id === "S106") {
            let price = 106
            servicePrice.innerText = price + `$`
            prices.push(price)
        }
        else if (item.id === "76") {
            let price = 76
            servicePrice.innerText = price + `$`
            prices.push(price)
        }
        else if (item.id === "other") {
            let price = 0
            prices.push(price)
            let pictureQuestion = document.createElement("img")
            pictureQuestion.classList.add("pictureQuestion")
            pictureQuestion.src = "socmed/Group.svg"
            servicePrice.append(pictureQuestion)
        }
        else if (item.id === "20") {
            let price = 20
            servicePrice.innerText = price + `$`
            prices.push(price)
        }
        else if (item.id === "r10") {
            let price = 10
            servicePrice.innerText = price + `$`
             prices.push(price)
        }
        else if (item.id === "i10") {
            let price = 10
            servicePrice.innerText = price + `$`
            prices.push(price)
        }
        else if (item.id === "q") {
            let price = 0
            prices.push(price)
            let pictureQuestion = document.createElement("img")
            pictureQuestion.classList.add("pictureQuestion")
                pictureQuestion.src = "socmed/Group.svg"
            servicePrice.append(pictureQuestion)
        }

        serviceItem.append(servicePrice)

        let serviceImg = document.createElement("div")
        serviceImg.classList.add("BeeMob-crossImg")
        serviceItem.append(serviceImg)

        function calcPrices (prices){
            let sum = 0;
            for (let i = 0; i < prices.length; i++){
                sum += prices[i]
            }
            console.log(sum)
            return sum
        }
        calcPrices()
    })
    console.log(prices)
}





