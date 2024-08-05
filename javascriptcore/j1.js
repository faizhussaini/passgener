const obj = {
    names:"faiz",
    colleged:{
      name:"jainuniversity",
      id:"3423",
    },
    Dobs:7121996,
  }
  
  
  const obj2 ={
      name:"rtrt",
    college:{
      name:"fdgdhfdhd",
      id:"cchg",
    },
    Dob:7121996,
  }
  let mergedobj=Object.assign({},obj,obj2)
  console.log(mergedobj)
  console.log(obj["college"]["id"])