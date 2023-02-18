let storage = document.querySelector(".storage")
let transfer = document.querySelector(".transfer")
let outBackblaze = document.querySelector(".outBackblaze")


function outputUpdate1(vol) {
    let output = document.querySelector("#volumeFirst")
    output.value = vol
    output.style.left = vol / 10 + "px"
}
function outputUpdate2(vol) {
    let output = document.querySelector("#volumeSecond")
    output.value = vol
    output.style.left = vol / 10 + "px"
}





let resultBackblaze = 0
function backblaze() {
    let storageValue = storage.value * 0.005
    let transferValue = transfer.value * 0.01
    let result = storageValue + transferValue
    if (result < 7) {
        result = 7
    }
    resultBackblaze = result
    outBackblaze.innerHTML = result.toFixed(2) + "$"

    return resultBackblaze
}

storage.addEventListener("input", backblaze)
transfer.addEventListener("input", backblaze)
backblaze()









let radio = document.querySelectorAll(".storage2")
let outBunny = document.querySelector(".outBunny")
let resultbunny = 0


let bunny = () => {
    let selected
    selectedValue = document.querySelector(".storage2:checked")

    if (selectedValue != null) {
        selected = selectedValue.value
    }
    else {
        selected = radio[0].value
    }
    let storageValue = storage.value * selected
    let transferValue = transfer.value * 0.01
    let result = storageValue + transferValue
    if (result > 10) {
        result = 10
    }
    resultbunny = result
    outBunny.innerHTML = result.toFixed(2) + "$"
    return resultbunny
}
radio.forEach(radio => {
    radio.addEventListener("click", bunny)
})
storage.addEventListener("input", bunny)
transfer.addEventListener("input", bunny)
bunny()








let scalewayRadio = document.querySelectorAll(".scaleway")
let scalewayOut = document.querySelector(".scalewayOut")
let resultscaleway = 0


let scaleway = () => {

    let selected
    selectedValue = document.querySelector(".scaleway:checked")
    if (selectedValue != null) {
        selected = selectedValue.value
    } else {
        selected = scalewayRadio[0].value
    }
    let storageValue = storage.value * selected
    let transferValue = transfer.value * 0.02
    if (storage.value > 75) {
        storageValue = (storage.value * selected) - (75 * selected)
    }
    if (transfer.value > 75) {
        transferValue = (transfer.value * 0.02) - (75 * 0.02)
    }
    let result = storageValue + transferValue
    resultscaleway = result
    scalewayOut.innerHTML = result.toFixed(2) + "$"

    return resultscaleway
}
scalewayRadio.forEach(scalewayRadio => {
    scalewayRadio.addEventListener("click", scaleway)
})

storage.addEventListener("input", scaleway)
transfer.addEventListener("input", scaleway)
scaleway()







let vultrOut = document.querySelector(".vultrOut")


let resultVultr = addEventListener("input", (event) => {
    vultr()
})

function vultr() {
    let storageValue = storage.value * 0.01
    let transferValue = transfer.value * 0.01
    let result = storageValue + transferValue
    if (result < 5) {
        result = 5
    }
    resultVultr = result
    vultrOut.innerHTML = result.toFixed(2) + "$"
    return resultVultr
}
storage.addEventListener("input", vultr)
transfer.addEventListener("input", vultr)
vultr()


function culcHeight() {
    let maxValue = 80
    let maxHeight = 180
    let heightBackblaze = ((backblaze() / maxValue) * maxHeight).toFixed(2)
    let heightBunny = ((bunny() / maxValue) * maxHeight).toFixed(2)
    let heightScaleway = ((scaleway() / maxValue) * maxHeight).toFixed(2)
    let heightVultr = ((vultr() / maxValue) * maxHeight).toFixed(2)

    // console.log(heightBackblaze)
    // console.log(heightBunny)
    // console.log(heightScaleway)
    // console.log(heightVultr)

    document.querySelector(".backblazeColumn").style.height = heightBackblaze + "px"
    document.querySelector(".bunnyColumn").style.height = heightBunny + "px"
    document.querySelector(".scalewayColumn").style.height = heightScaleway + "px"
    document.querySelector(".vultrColumn").style.height = heightVultr + "px"

}
culcHeight()
storage.addEventListener("input", culcHeight)
transfer.addEventListener("input", culcHeight)

