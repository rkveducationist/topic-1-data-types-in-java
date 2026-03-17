const questions = [

/* =========================
MCQ QUESTIONS
========================= */

{
type:"mcq",
question:"Which data type is used to store whole numbers in Java?",
options:["int","float","char","boolean"],
answer:"int",
hint:"Used for integers like 10, 20"
},

{
type:"mcq",
question:"Which data type is used to store decimal numbers?",
options:["double","int","char","boolean"],
answer:"double",
hint:"Used for values like 10.5"
},

{
type:"mcq",
question:"Which data type stores a single character?",
options:["char","String","int","boolean"],
answer:"char",
hint:"Stores 'A', 'B' etc."
},

{
type:"mcq",
question:"Which data type is used for true/false values?",
options:["boolean","int","char","double"],
answer:"boolean",
hint:"Stores true or false"
},

{
type:"mcq",
question:"Which data type has the largest size?",
options:["double","int","char","boolean"],
answer:"double",
hint:"Used for high precision decimals"
},

{
type:"mcq",
question:"Which keyword is used to declare a variable?",
options:["datatype","var","let","const"],
answer:"datatype",
hint:"Example: int a = 10;"
},

{
type:"mcq",
question:"What is the default value of int in Java?",
options:["0","1","null","undefined"],
answer:"0",
hint:"Primitive default values"
},

{
type:"mcq",
question:"Which of the following is NOT a primitive data type?",
options:["String","int","char","boolean"],
answer:"String",
hint:"String is a class"
},

{
type:"mcq",
question:"Which data type is used for large integer values?",
options:["long","int","char","float"],
answer:"long",
hint:"Bigger than int"
},

{
type:"mcq",
question:"Which symbol is used to assign value?",
options:["=","==","!=","<"],
answer:"=",
hint:"Assignment operator"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Declare an integer variable and assign value 10",

required:["int","10"],

hint:"int a = 10;",

solution:`class Demo {
  public static void main(String[] args){
    int a = 10;
    System.out.println(a);
  }
}`
},

{
type:"code",
question:"Declare a double variable and print its value",

required:["double","system.out.println"],

hint:"double d = 10.5;",

solution:`class Demo {
  public static void main(String[] args){
    double d = 10.5;
    System.out.println(d);
  }
}`
},

{
type:"code",
question:"Declare a char variable with value 'A' and print it",

required:["char","'a'","system.out.println"],

hint:"char c = 'A';",

solution:`class Demo {
  public static void main(String[] args){
    char c = 'A';
    System.out.println(c);
  }
}`
},

{
type:"code",
question:"Declare a boolean variable and print true",

required:["boolean","true","system.out.println"],

hint:"boolean b = true;",

solution:`class Demo {
  public static void main(String[] args){
    boolean b = true;
    System.out.println(b);
  }
}`
},

{
type:"code",
question:"Declare variables of int, double and char and print all",

required:["int","double","char","system.out.println"],

hint:"Declare multiple variables",

solution:`class Demo {
  public static void main(String[] args){
    int a = 5;
    double d = 5.5;
    char c = 'A';

    System.out.println(a);
    System.out.println(d);
    System.out.println(c);
  }
}`
}

]