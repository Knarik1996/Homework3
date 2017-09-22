 //The first part of homework
//-A function that takes at least three arguments and returns the result of some set of operations using those arguments
//A function that will do addition
<script>
//made function,put it into a variable
 const add = function (a, b, c){
 	return a + b;
 };
 const result = add(5, 8, 6);
 //print the result
 console.log(result);
 </script>

//example_2

<script>
 //some fonction that will do multiplication
 const multiplication = function (a, b, c){
 return a * b *c;
};
//call the function,put the results into a variable
const result = multiplication(5, 7, 9);
console.log(result);
</script>

//another example of function that will do the divition
<script>
const division = function (a, b, c){
  return (a / b / c);
};
//call the function,put the results into a cariable
const result = division (8, 2, 9);
//print the result
console.log(result);
</script>      

//The second part of our homework
//Functions that takes and argumant and gives nothing
<script>
//now we need in any case to create an function
const a = function (a, b,){
(a * b);
};
a(6, 23);  
</script>

//another example
<script>
//now we need to create 
const t = function (a, f, k){
	(a + f +k );
};
t(5, 7, 9);
</script>
//so as i needed a function to do something and do not return or show something i just missed the words return and console.log(just for printing something)

//The 3rd part of our work
//-A function that takes no arguments and returns something 
<script>
    // make a function, put it into a variable
    const a = function() {
        console.log('Save our sould');
        console.log('I need to get goooood grades');
        console.log('AUA rocks');
    };

    a(); // call the function
</script>

//-A function called fullName that takes as argument first name and last name and returns the full name of the person (first name concatenated with last name with a space in between) - 6 points
 
 <script>

 const FullName = function (FistName,LastName){
 	const result = (FistName + " " + LastName);
    return result
 };
   console.log(FullName("Knarik", "Hovhannisyan"));
   
 </script>

//A function that takes three strings and returns the string that is the longest.  - 6 points Note that you can find out the length of a string by doing .length
 
<script>
 
  const Longest = function (str1, str2, str3){

    const l1 = aqString.GetListLength(str1);
    const l2 = aqString.GetListLength(str2);
    const l3 = aqString.GetListLength(str3);
    const longest_str = 'b';
    if(l1 >= l2 && l1 >=l3) {
       console.log longest_str === str1;
    };
    if(l2 >= l1 && l2 >=l3) {
         console.log longest_str === str2;
    };
    if(l3 >= l1 && l3 >=l1) {
        console.log longest_str === str3;
    };
    return longest_str;
    
    
};
   console.log(Longest('srt1','srt2','srt3'))

</script>	

<script>
  const Longest = function (str1, str2, str3){
    const str1 = 'Hey';
    console.log (str1.lenght);
    const str2 = 'Hello';
    const.log (str2.lenght);
    const str2 = 'Bonjorno';
    console.log (str3.lenght);
    if(str1 >=str3 && str1 >= str2 {
       console.log longest_str === str1;
    };
    if(str2 >= str1 && str2 >= str3){
      console.log longest_str === str2;
    };
    if (str3 >= str1 && str3 >= str2) {
      console.log longest_str ===str3;
    };
    return longest_str;
  };
  console.log(Longest ('str1' , 'str2' , 'str3'))
</script>