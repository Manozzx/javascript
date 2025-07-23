class Sample1 {
    
        m1() {
        console.log('This is Sample1 class m1()'+legs);
    }
}

class Sample2 extends Sample1 {
          m2() {
        console.log('This is Sample2 class m2()'+legs);
    }
}


let obj = new Sample2();
legs = 4;
obj.m1();
obj.m2();
