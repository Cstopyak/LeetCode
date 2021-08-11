

function generateDocument(characters, document) {
	
  if( characters.length !== document.length){
		return false;
    } 
    const lookup = {};
	for( let i = 0; i < characters.length; i++){
		let letter = characters[i];
		
        lookup[letter] ? lookup[letter] += 1 : lookup[letter = 1];
    
    }
    console.log(lookup)
	for( let j = 0; j < document.length; j++){
		let letter = document[j];
		if(!lookup[letter]) {
            return false;
        }  else {
            lookup[letter] -= 1;
        }
    }
    console.log(lookup);
  return true;
}

generateDocument("Bste!hetsi ogEAxpelrt x", "AlgoExpert is the Best!")
