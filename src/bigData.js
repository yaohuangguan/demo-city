const data = [];

for (let i = 0; i <= 100000; i++) {
  const obj = {
    key: i,
    value: i + Math.random()
  };

  data.push(obj);
}

export default data;
