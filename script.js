function onesDigit(n) {
  // your code here
	const rem = n%10;
	return rem;
}

// Do not change the code below
 
const n = prompt("Enter Number:");
alert(onesDigit(n));
