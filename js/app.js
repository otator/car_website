
var clientName = userInput("Please enter your name");
var age = userInput('Welcome ' + clientName + ' Enter Your age to get a discount');
var discount;

displayHtml('Welcome ' + clientName + ' to our website');
if(age < 18 || age > 60){
    discount = 15;
    displayHtml('your age is: ' + age + ' and your discount is: ' + discount + '%');
}else{
    discount = 0;
    displayHtml('your age is: ' + age + ' and your discount is: ' + discount + '%');
}
//this image must be in the middle of the script, this why I moved it to js code.
document.write('<img src="https://image.freepik.com/free-photo/client-shaking-hand-woman_13339-39195.jpg" style="  display: block; margin-left: auto; margin-right: auto; width: 50%;"/>');

var choose = userInput("Enter 1 for Mercedes and 2 for BMW");
if (choose == 1){
    var times = userInput("Enter how many times you want to see the image?");
    displayImage(times, 'https://www.automasti.com/blog/wp-content/uploads/2020/10/c-classmodelimage.jpg');
    }
else if (choose == 2){
    var times = prompt("Enter how many times you want to see the image?");
    displayImage(times, 'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC90BMC681A021001.jpg');
}


function userInput(message){
    var input = prompt(message);
    while(input === '' || input === null || input === undefined){
        input = prompt('please input valid name\n' + message);
    }
    return input;
}

function displayHtml(text){
    var newText = '<h3>' + text + '</h3>';
    document.write(newText);
}

function displayImage(times, url){
     for(var i=1; i<=times; i++){
            document.write('<table><tr><td><h1>' + i + '</h1></td><td><img src = "' + url + '"/></td></tr></table>');
        }
}