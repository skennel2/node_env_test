import dotenv from 'dotenv'
import path from 'path';

dotenv.config()

// dotenv.config({
//     path: 환경설정파일 경로, // Default: path.resolve(process.cwd(), '.env')
//     encoding: 'latin1', // Default: utf8
//     debug:  // Default: false
// })

if (process.env.NODE_ENV === 'product') {
    console.log('product mode start')
} else if (process.env.NODE_ENV === 'develop') {
    console.log('develop mode start')
} else {
    throw new Error('환경변수를 확인하세요.')
}