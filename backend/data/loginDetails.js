import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10)
const loginDetails = [
  {
    name: 'Zoheb Ahmed',
    email: 'zohebcool1542@gmail.com',
    password: bcrypt.hashSync('123456', salt),
    confirmPassword: bcrypt.hashSync('123456', salt),
  },
  {
    name: 'elon musk',
    email: 'elon@tesla.com',
    password: bcrypt.hashSync('123456', salt),
    confirmPassword: bcrypt.hashSync('123456', salt),
  },
  {
    name: 'jeff bezos',
    email: 'jeff@amazon.com',
    password: bcrypt.hashSync('123456', salt),
    confirmPassword: bcrypt.hashSync('123456', salt),
  },
]

export default loginDetails
