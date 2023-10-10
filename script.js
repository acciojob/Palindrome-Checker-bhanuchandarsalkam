// complete the given function

function palindrome(str){
let i=0,j=str.length;
	while(i<str.length&&j>=0){
		if(str[i]!=str[j]){
			return false;
		}
		i++;
		j--;
	}
	return true;
}
module.exports = palindrome
