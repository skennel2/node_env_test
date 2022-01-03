import dotenv from 'dotenv'
dotenv.config()

console.log(process.env)
if (process.env.NODE_ENV === 'product') {
    console.log('product mode start')
} else if (process.env.NODE_ENV === 'develop') {
    console.log('develop mode start')
} else {
    throw new Error('환경변수를 확인하세요.')
}