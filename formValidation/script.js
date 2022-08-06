function validate(){
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordsmatch(password, cpassword)
}

function checkusername(username){
    if(username.length > 2){
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error', 'success')
        document.getElementById('username_error').innerHTML = ''
    } else {
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText = 'Username must be 3 characters long'
    }
}

function checkemail(email){
    if(email.length > 7 && email.includes('@gmail.com') || email.includes('@ves.ac.in')){
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error', 'success')
        document.getElementById('email_error').innerHTML = ' '
    } else {
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText = 'Invalid Format'
    }
}

function checkpassword(password){
    if(password.length > 4){
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error', 'success')
        document.getElementById('password_error').innerHTML = ''
    } else {
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText = 'Password length too short'
    }
}

function checkpasswordsmatch(password, cpassword){
    if(cpassword == password && password != ''){
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error', 'success')
        document.getElementById('cpassword_error').innerHTML = ''
    } else {
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword_error').innerText = 'Passwords do not match'
    }
}