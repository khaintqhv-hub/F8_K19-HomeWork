//Bài 1
const student={
    name:"hoang",
    parent:{
        name:"bo hoang"
    }
}

const mentor={...student}
//spread chỉ copy tầng ngoài (shallow copy) nghĩa là
//mentor là object mới
//nhưng mentor.parent và student.parent vẫn trỏ cùng 1 object

mentor.name="bang"
//student.name không đổi
//vì name là string, đã được copy giá trị riêng

mentor.parent.name="bo bang"
//student.parent.name có đổi
//vì parent là object lồng bên trong, vẫn dùng chung tham chiếu
console.log(student)
// {name:"hoang, parent :{name: "bo bang"} }

console.log(mentor)
//{name:"bang", parent:{name :"bo bang"}}

//Bài 2
const student={
    name:"hoang",
    parent:{
        name:"bo hoang"
    }
}

 const mentor=JSON.parse(JSON.stringify(student))
 //Đây là deep copy
 //mentor là object mới
 //mentor.parent cũng là object mới, không dùng chung với student.parent

 mentor.parent.name="bo bang"
 //student.parent.name không bị ảnh hưởng

 console.log(student)
 //{name: "hoang" , parent:{name:"bo hoang"}}

 console.log(mentor)
 //{name:"hoang", parent:{name:"bo bang"}}

 //Bài 3
 const students=[
    {name: 'a'},
    {name: 'b'}
 ]

 const newStudents=[...students]
//Spread tạo ra mảng mới 
//nhưng các object bên trong mảng vẫn dùng chung tham chiều 
newStudents[0].name='z'
//students[0].name có bị đổi theo 
//vì students[0] và newStudents[0] đang trỏ cùng 1 ọbject

console.log(students)
//[{name:"z"}, {name:"b"}]

console.log(newStudents)
//[{name:"z"}, {name:"b"}]

// Bài 4
const user={
    name:"hoang",
    address:{
        city:"HN",
        location:{
            lat:123
        }
    }
}

const newUser={...user}
//Spread chỉ là copy tầng ngoài
//newUser là object mới
//nhưng newUser.address và user.address
//newUser.address.location và user.address.location cũng dùng chung object

newUser.address.location.lat=999
//vì location dùng chung tham chiếu
//nên sửa newUser.address.location.lat
//cũng làm user.address.location.lat đổi theo

console.log(user.address.location.lat)
//Kết quả:999 