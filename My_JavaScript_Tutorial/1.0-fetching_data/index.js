// fetch an image and display on HTML page //
async function getImg() {
  const response = await fetch("buddha under a tree.JPG");
  const img = await response.blob();
  // document.getElementById("getImg").src = URL.createObjectURL(img);
}

getImg().catch(error => {
  console.log(error);
});

//=============================================================================//

// fetch csv data and display as paragraph text
async function getData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/learning-monk/datasets/master/suicide_rates_1985-2016.csv"
  );
  const data = await response.text();
  // console.log(data);
  // document.getElementById("showData").innerText = data;
}

getData().catch(error => {
  console.log(error);
});

//=============================================================================//

// fetch csv data and display as paragraph text //
async function getData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/learning-monk/datasets/master/suicide_rates_1985-2016.csv"
  );
  const data = await response.text();
  // console.log(data);
  // document.getElementById("showData").innerText = data;
}

getData().catch(error => {
  console.log(error);
});

//=============================================================================//

// parse CSV data //
async function getDataRows() {
  const response = await fetch(
    "https://raw.githubusercontent.com/learning-monk/datasets/master/suicide_rates_1985-2016.csv"
  );
  const data = await response.text();
  const region = [];
  const gender = [];
  const suicides = [];

  const rows = data.split("\n");
  rows.forEach(row => {
    const cols = row.split(",");
    region.push(cols[1]);
    gender.push(cols[3]);
    suicides.push(cols[5]);
  });
  return { region, gender, suicides };
}

getDataRows().catch(error => {
  console.log(error);
});
