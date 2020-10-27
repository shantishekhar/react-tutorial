//super class
class Holiday{
    constructor(destination,days){
        this.destination=destination;
        this.days=days
    }
    info(){
        console.log(`this ${this.destination} will take ${this.days} Days`)
    }
}

//sub class

class Expediation extends Holiday{
    constructor(destination, days, gear){
        super(destination,days);
        this.gear=gear;
    }
    
    info(){
        super.info();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}

const tripWithGear=new Expediation("Kathmandu, Nepal",30,["sunglasses","flags", "camera"]);
console.log(tripWithGear.info());

/*function holiday(destination,days){
    this.destination=destination
    this.days=days
}

holiday.prototype.info=function(){
    console.log(this.destination+" | "+this.days+" Days")
}

var Nepal= new holiday("Nepal",30);
console.log(Nepal.info())*/

//test
/*
var rivers=['Sunkoshi','Tamakoshi','Saptakoshi']
var[first,...rest]=rivers
console.log(rest)
*/

//var day={
//    breakfast:'toast with milk',
//    lunch:'rice with chicken curry'
//}
//var night={
//    dinner:'noodle soup'
//}
//var picnic={...day,...night}
//console.log(picnic)
/*var mountains=['EVEREST','FISH TAIL', 'ANNAPURNA'];
var MountainsFromJapan=['Fuji'];

var allMountains=[...mountains,...MountainsFromJapan];
console.log(allMountains)*/
/*var adventureClimbing={
    name:"Everest",
 height:8848,

output(){
    console.log(`${this.name} is ${this.height} meter tall`)}
};
adventureClimbing.output();*/

/*let [, ,firstMountain]=['Everest','Fish Tail','Annapurna']
console.log(firstMountain)*/
/*let uniStudent=({name,university})=>{
  //  let {name,university}=student;
    console.log(`${name} from ${university}`)
}
uniStudent({
    name:'Ryan',
    university:"university of sydney"
})*/

/*let thingsToDo= {
    morning:"Excercise",
    afternoon:"Work",
    evening:"code",
    night:["sleep","dream"]
}
let {morning,afternoon}=thingsToDo
morning="run";
console.log(morning,'-',afternoon);*/
/*
let nepal={
    //add property
    mountains:['Everest','Fish Tail','Annapurna'],
    //methods
    printWithDash:function(){
            
        setTimeout(()=>{
       
           console.log(this.mountains.join("-"));
        },3000);
    }
    
}
nepal.printWithDash();
*/


/*let result=`${fname} ${lname} is ${age} years old`
alert(result)*/
/*function greeting(mesage){
    return alert(`${mesage} everyone` )
}*/

//let greeting=()=>{alert(`Hello everyone`)}
//greeting("good morning")
//let createBlog=(title,body)=>{
//    if(!title){
//        throw new Error('A title is required');
//    }
//    
//    if(!body){
//        throw new Error('body can;t be empty');
//    }
//    return alert(`${title}- ${body}`);
//}
//
//createBlog('Blog title', 'Blog body')

//function sayHi(){
//    
//}
//console.log(this);