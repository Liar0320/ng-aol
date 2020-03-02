function p() {
  return new Promise(resolve => {
    resolve('done');
  });
}

async function test() {
  const a = await p();

  console.log(a);

  return a;
}

test();
