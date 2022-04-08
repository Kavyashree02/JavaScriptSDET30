function randomNumber(){
    var random = Math.random()*1000
    var ran = Math.ceil(random)
    return ran
}

module.exports = randomNumber