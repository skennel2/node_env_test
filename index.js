import dotenv from 'dotenv'
import path from 'path';

// dotenv.config({
//     path: 환경설정파일 경로, // Default: path.resolve(process.cwd(), '.env')
//     encoding: 'latin1', // Default: utf8
//     debug:  // Default: false
// })

if (process.env.NODE_ENV === 'product') {
    dotenv.config({
        path: path.resolve(process.cwd(), '.env')
    })

    console.log('product mode start: ' + process.env.CONNECTION_STRING)
} else if (process.env.NODE_ENV === 'develop') {
    dotenv.config({
        path: path.resolve(process.cwd(), '.env.dev')
    })

    console.log('develop mode start' + process.env.CONNECTION_STRING)
} else {
    throw new Error('환경변수를 확인하세요.')
}