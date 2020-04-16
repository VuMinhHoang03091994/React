
//var and let
function run(){
    var foo = "sd toàn cục";
    let bar = "ksdtc";

    console.log(foo, bar);

    {
        var fiz = 10;
        console.log("inner: ", fiz)
        let biz = "bizz"
        console.log(biz);
    }
    console.log("outer: ",fiz )

 //   console.log(biz);
}

run()

//kiểm tra kiểu dữ liệu

const name = "Hoang"
const age = 22
const score = 8.5
const isCool = true
const test = null
const check = undefined

console.log(typeof age)
console.log(typeof test)
console.log(typeof check)


// lenght, hoa,thường
const greeting = `Name: ${name} , age: &{age}`;

console.log(greeting);

console.log(name.length)
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(1, 4));
console.log(name.split(' '));



//mảng
const numbers = new Array(2, 4, 3, 5, 4, 3, 2, 3, 3);
const langs = ['java', 'C++', 'python']
//lấy phần tử trong mảng
console.log(langs[2])

//thay đổi
langs[0] = 'javascript'

//thêm vào cuối
langs.push('themcuoi')
console.log(langs)

//thêm vào trước
langs.unshift('themtruoc')
console.log(langs)

//thêm vào cuối
langs.push('themcuoi')
console.log(langs)

//bỏ cái cuối
langs.pop()
console.log(langs)

//bỏ cái đầu
langs.shift()
console.log(langs)

//lấy chỉ số thứ tự trong mảng
const index = langs.indexOf('C++');
console.log(index)
//gán vị trí trong mảng
const[j,c] = langs;
console.log(j)
console.log(c)
//in ra mảng
// const[j, ...x] = langs;
// console.log(x)



//khai báo mảng sinhvien
const sinhvien ={
    name: 'Hoang',
    age: 22,
    hobbies: ['shopping', 'sport', 'travel'],
    address: {
        street: 'Nguyen Sinh Sac',
        city: 'Kon Tum'
    }
};
console.log(sinhvien);
//lấy hobbies trong mảng
console.log(sinhvien.hobbies);
//lấy name,  age trong mảng
// const {
//     name,age
// } = sinhvien;
// console.log(name);
// console.log(age);

// thêm email vào mảng
sinhvien.email = 'hoangcfqq@gmail.com'
console.log(sinhvien);
//thay đổi tên thanh Minh
sinhvien.name = 'Minh'
console.log(sinhvien);

//Sao chép mảng và thay đổi
person ={
    ...sinhvien,
    email: "emaildathaydoi@gmail.com"
};
console.log(person)


