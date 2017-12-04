const postfix = 'a b + c *'
const postfixArr = postfix.split(' ');
const stack = [];
const n = postfixArr.length;

for (let i = 0; i < n; i++) {
  const item = postfixArr[i];
  switch(item) { 
    case '+':
    case '-':
    case '*':
    case '/':
      const first = stack.pop();
      const second = stack.pop();
      stack.push(`${second} ${item} ${first}`);
      break;
    default: stack.push(item);
  }
}

const infix = stack.pop();
console.log(infix);
