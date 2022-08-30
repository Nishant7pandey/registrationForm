function validate () {
    let firstnameInput =document.getElementById('firstname').value
    let lastnameInput =document.getElementById('lastname').value
    let emailInput =document.getElementById('email').value
    let phoneInput =document.getElementById('phone').value
    let batchInput =document.getElementById('batch').value
    let moduleInput =document.getElementById('module').value
    let tncInput =document.getElementById('tnc').checked

    let error = false
    if(firstnameInput && firstnameInput.length >= 3){
        document.getElementById("first-name-valid").style.display = 'block'
        document.getElementById("first-name-invalid").style.display = 'none'
    }
    else{
        document.getElementById("first-name-invalid").style.display = 'block'
        document.getElementById("first-name-valid").style.display = 'none'
        error = true
    }

    if(lastnameInput && lastnameInput.length >= 3){
        document.getElementById("last-name-valid").style.display = 'block'
        document.getElementById("last-name-invalid").style.display = 'none'
    }
    else{
        document.getElementById("last-name-invalid").style.display = 'block'
        document.getElementById("last-name-valid").style.display = 'none'
        error = true
    }

    if(emailInput && emailInput.includes('@') && emailInput[0] != '@' && emailInput.includes('.') && emailInput.lastIndexOf('.') + 3 <= emailInput.length){
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else{
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        error = true
    }

    if(phoneInput && phoneInput.length == 10){
        document.getElementById("phone-valid").style.display = 'block'
        document.getElementById("phone-invalid").style.display = 'none'
    }
    else{
        document.getElementById("phone-invalid").style.display = 'block'
        document.getElementById("phone-valid").style.display = 'none'
        error = true
    }
    
    if(moduleInput != 'none'){
        document.getElementById("module-valid").style.display = 'block'
        document.getElementById("module-invalid").style.display = 'none'
    }
    else{
        document.getElementById("module-invalid").style.display = 'block'
        document.getElementById("module-valid").style.display = 'none'
        error = true
    }

    if(batchInput != 'none'){
        document.getElementById('batch-valid').style.display ='block'
        document.getElementById('batch-invalid').style.display ='none'
    }
    else{
        document.getElementById('batch-invalid').style.display ='block'
        document.getElementById('batch-valid').style.display ='none'
        error = true
    }
    if(tncInput){
        document.getElementById("tnc-invalid").style.display = "none"
    }
    else{
        document.getElementById('tnc-invalid').style.display = "block"
        error = true
    }

    if(!error){
        alert('Your details have been saved succeessfully!');
        document.getElementById('firstname').value = ""
        document.getElementById('lastname').value = ""
        document.getElementById('phone').value = ""
        document.getElementById('batch').value = "none"
        document.getElementById('module').value = ""
        document.getElementById('email').value = ""
        document.getElementById('tnc').checked = false

        document.getElementById("first-name-valid").style.display = 'none'
        document.getElementById("last-name-valid").style.display = 'none'
        document.getElementById("phone-valid").style.display = 'none'
        document.getElementById("batch-valid").style.display = 'none'
        document.getElementById("module-valid").style.display = 'none'
        document.getElementById("email-valid").style.display = 'none'
        
    }
}