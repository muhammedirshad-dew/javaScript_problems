//syntax

// class class-name{
// properties,functionalities
// }
  

class employee{
    setemployee(id,name,desg,salary){
        this.id=id,
        this.name=name,
        this.desg=desg,
        this.salary=salary
    }

    printemloyee(){
        console.log(this.id)
    }
}

// Create object
// object_name=new class-name()


emp=new employee()
emp.setemployee(1001,'dim','engg',124562)    
emp.printemloyee()


// create class for students(roll) no,name,grade,result)

//print student name,roll no,passe/fail
class student{
    setstudent(roll,name,grade,result){
        this.roll=roll,
        this.name=name,
        this.grade=grade,
        this.result=result
    }
    printstudent(){
        console.log(this.roll)
        console.log(this.name)
        console.log(this.grade)
        console.log(this.result)
    }
}


e = new student()
e.setstudent('amal','10','pass','o')
e.printstudent()