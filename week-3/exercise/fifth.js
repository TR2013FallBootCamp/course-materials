function addElement() {
  //three elements are required: p, b, br
  var theNewParagraph = document.createElement('p');
  var boldElement = document.createElement('b');
  var lineBreak = document.createElement('br');

  //set up theNewParagraph
  theNewParagraph.setAttribute('title', 'The test paragraph');

  //prepare the text nodes
  var theText1 = document.createTextNode('This is a sample of some ');
  var theText2 = document.createTextNode('HTML you might');
  var theText3 = document.createTextNode('have');
  var theText4 = document.createTextNode(' in your document');

  //put together the bold element
  boldElement.appendChild(theText2);
  boldElement.appendChild(lineBreak);
  boldElement.appendChild(theText3);

  //put together the whole paragraph
  theNewParagraph.appendChild(theText1);
  theNewParagraph.appendChild(boldElement);
  theNewParagraph.appendChild(theText4);

  //insert it into the document somewhere
  document.getElementById('someElementId').appendChild(theNewParagraph);
}
