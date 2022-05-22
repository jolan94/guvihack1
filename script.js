async function getBrews() {
  let url = 'https://api.openbrewerydb.org/breweries/random';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderBrews() {
  let resData = await getBrews();
  // console.log(brews[0]);

  let brewDiv = document.createElement('div');
  brewDiv.classList.add('brewdiv');
  brewDiv.setAttribute('id', 'brew');

  let brewName = document.createElement('p');
  brewName.classList.add('brewname');
  brewName.innerText = resData[0].name;
  brewDiv.append(brewName);

  let brewType = document.createElement('p');
  brewType.classList.add('brewtype');
  brewType.innerText = 'Brew type: ' + resData[0].brewery_type;
  brewDiv.append(brewType);

  let brewAddress = document.createElement('p');
  brewAddress.classList.add('brewaddress');
  brewAddress.innerText =
    'Address: \n' +
    resData[0].street +
    ', \n' +
    resData[0].city +
    ', \n' +
    resData[0].state +
    ', \n' +
    resData[0].country +
    ', \n' +
    resData[0].postal_code;
  brewDiv.append(brewAddress);

  let brewSite = document.createElement('p');
  brewSite.classList.add('brewsite');
  brewSite.innerText = 'Website: ' + resData[0].website_url;
  brewDiv.append(brewSite);

  let brewPhone = document.createElement('p');
  brewPhone.classList.add('brewphone');
  brewPhone.innerText = 'Mobile: ' + resData[0].phone;
  brewDiv.append(brewPhone);

  document.body.append(brewDiv);
}

renderBrews();
