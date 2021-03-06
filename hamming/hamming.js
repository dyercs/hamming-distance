var compute;

// a fucntion to compute hamming distance
// takes two strands of nucleotides as input
// and returns an integer representing distance 
  compute = function(s1, s2) {
    
    // if the strands are not the same length
    if(s1.length !== s2.length) {
    	// throw an error
    	throw new Error('DNA strands must be of equal length.')
    }

    // initialize distance variable
    // defaults to zero, i.e. strands are the same
    var dist = 0;
    // calculate Hamming distance
    // loop over every character in the two srands
   	for (var i = 0; i < s1.length ; i+= 1) {
      // if the i'th character in strand 1
      // is NOT equal to the i'th character
      // in strand 2
      if (s1.charAt(i) !== s2.charAt(i)) {
        // than increase the distance by 1
        dist = dist + 1;
      }
    }
    // return the distance
    return dist;
  };
module.exports = {
	compute: compute
};