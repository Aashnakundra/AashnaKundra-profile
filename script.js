//Vadid Canadian Postal Code, with or without a space, regex pattern 
function check() {
    let regexCheck =
      /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ ]?\d[ABCEGHJ-NPRSTV-Z]\d$/;
    let postal = document.getElementById('postal').value;
    if (!regexCheck.test(postal)) {
      alert("Postal Code Invalid");
      return false;
    } else {
      return true;
    }
};

// dynamically display input box when clicked Other 
function display() {
    let radio = document.getElementById('oth');
    oth.style.display = "block";
    oth.setAttribute("required", "required");
}

//hide input box when clicked Job Offer or School
function hide() {
    let radio = document.getElementById('oth');
    oth.style.display = "none";
    oth.value= "none";
}


