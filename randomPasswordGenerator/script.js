let password = document.getElementById('password')

function genpassword(){
    let chars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let passwordLen = 12
    let password = ''

    for(let i=0; i<passwordLen; i++){
        let randomnumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomnumber, randomnumber+1)   
    }
    document.getElementById('password').value = password
}

function copypassword(password){
    let copytext = document.getElementById('password')
    copytext.select()
    copytext.getSelecyionRange(0, 999)
    navigator.clipboard.writeText(password)
}