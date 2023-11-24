const mydata = await fetch("/taskdetail").then((res) => {
  return res.json();
});

export default mydata;
