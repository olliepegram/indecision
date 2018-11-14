var nameVar = 'Ollie';
var nameVar = 'Nick';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Mike';
console.log('nameLet', nameLet);

var fullName = 'Ollie Pegram';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}