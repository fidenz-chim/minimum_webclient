
// Initialize values
document.getElementById('sampleTextInput').value = "Sample text input pre-loaded";

//Event bindings
document.getElementById('sampleInputFile').addEventListener('change',onOpenSampleFile);
document.getElementById('sampleButton').addEventListener('click',onSampleButtonClick);


//Event listener funtions
function onOpenSampleFile(event){
    var input = event.target;
    var reader = new FileReader();

    reader.onloadend = function() {
        deployContractFromFile(reader.result);
    };
    reader.readAsText(input.files[0],'UTF-8');
}

function onSampleButtonClick(){
    var testVal = document.getElementById('sampleTextInput').value;
    alert(testVal);
}
