const {db} = require('./server/db')
const {green, red} = require('chalk')
const Student = require('./server/db/Student')
const Campus = require('./server/db/Campus')


const seed = async () => {
  await db.sync({force: true})

const students =[
  {
    firstName: 'Grumpy',
    lastName: "Johnson",
    imageUrl:
      'http://animalsadda.com/wp-content/uploads/2015/03/Grumpy-Cat-5.jpg',
      gpa: 3.3,
      email: "grumpyCat@aol.com"
  },
  {
    firstName: 'Scaredy',
    lastName: 'Cat',
    imageUrl:
      'http://media.boingboing.net/wp-content/uploads/2017/03/surprised-cat-04.jpg',
      gpa: 2.5,
      email: "scardyCat@gmail.com"

  },
  {
    firstName: 'Giddy',
    lastName: 'Kitty',
    imageUrl:
      'https://pavma.files.wordpress.com/2014/09/istock_000005420886medium.jpg',
      email:'GT@gmail.com',
      gpa: 4.0
  }]



const campus = [{"id":1,"name":"Franchot","address":"95 Shasta Court","description":"the first campus","imageUrl":"https://i.forbesimg.com/media/lists/colleges/emory-university_416x416.jpg"},
{"id":2,"name":"Merle","address":"653 Dorton Point","description":"the second campus","imageUrl":"https://uconn-today-universityofconn.netdna-ssl.com/wp-content/uploads/2017/08/ClassPhoto170826a061crop-1024x683.jpg"},
{"id":3,"name":"Leslie","address":"6 Reindahl Avenue","description":"the third campus", "imageUrl":"https://specials-images.forbesimg.com/imageserve/55b8e4d0e4b05c2c343240f3/300x300.jpg?fit=scale&background=000000"}]


await Student.bulkCreate(students)
await Campus.bulkCreate(campus)
  // seed your database here!

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
