import babelParser from '@babel/parser';
const code = "const name= 'jyy';";
const ast = babelParser.parse(code);
console.log(ast.program.body[0]);
