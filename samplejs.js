
// Initialize values
document.getElementById('sampleTextInput').value = "Sample text input pre-loaded";

//Event bindings
document.getElementById('sampleInputFile').addEventListener('change',onOpenSampleFile);
document.getElementById('sampleButton').addEventListener('click',onSampleButtonClick);
document.getElementById('formatStringButton').addEventListener('click',onFormatStringButtonClick);
formatStringButton

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

    var temp = document.createElement("div");
    temp.innerHTML = getHTMLBlock(testVal);

    var parent = document.getElementById('lowerArea');
    parent.appendChild(temp);

}

function getHTMLBlock(content){
    var html;
    html = '<div>' + content + '</div>';
    console.log(html);
    return html;
}

String.prototype.format = function() {
  a = this;
  for (k in arguments) {
      var rep = '/{' + k + '}/g';
      console.log(rep);
      console.log(arguments[k]);
    a = a.replace(rep, arguments[k])
  }
  return a
}

function onFormatStringButtonClick(){
    var str = "hello {0}, how are you {0}, {1} {0}".format("John","Val");
    console.log(str);
}
