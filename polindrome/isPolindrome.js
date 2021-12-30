const input = "ro";

function isPolindrome(str) {
  let regRem = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(regRem, "");
  let reverseStr = lowRegStr.split("").reverse().join("");
  if (reverseStr === lowRegStr) {
    console.log("true");
  } else {
    console.log("false");
  }
}

isPolindrome(input);
