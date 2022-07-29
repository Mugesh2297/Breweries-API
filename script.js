let division = document.createElement('div');
document.body.append(division);
division.setAttribute('class', 'div1');

let h1 = document.createElement('h1');
h1.className = "h1";
h1.innerHTML = "Breweries Details";


let textbox = document.createElement('input');
textbox.setAttribute("type", "input");
textbox.setAttribute('id', 'id1');
textbox.setAttribute('class', 'textbox');
textbox.className = "form-control input-bar"
textbox.placeholder = "Enter a text to search";
division.appendChild(textbox);


let button = document.createElement('button');
button.setAttribute('type', 'submit');
button.setAttribute('id', 'button1');
var a = document.createTextNode("Search");
button.className = "btn btn-primary search-button"
button.appendChild(a);
division.appendChild(button);

let result = document.createElement('div');
document.body.append(result);
result.setAttribute('class', 'result');
result.className = "container result";

let bg = document.createElement('div');
bg.setAttribute('class', 'bg');
bg.className = "bg";
bg.appendChild(h1);
bg.appendChild(division);
bg.appendChild(result);
document.body.append(bg);


let footer = document.createElement('footer');
footer.className="footer";
bg.appendChild(footer);

textbox.addEventListener('keypress', (event) => {
  if (event.key === "Enter") {

    button.click();
  }
})


button.addEventListener("click", () => {
  if (textbox.value == "") {
    alert("Enter a text to search")
  }
  else {
    try{

    fetch(`https://api.openbrewerydb.org/breweries/search?query=${textbox.value}`)
      .then((res) => res.json())
      .then((data) => displayData(data));
    }
    catch(err){
      console.log(err);
      alert("Enter a valid Key word")

    }
  }
})

const displayData = (data) => {
  result.innerHTML = "";
  data.forEach((ele) => {
    if (`${ele.website_url}` == "null" || `${ele.street}` == "null" || `${ele.phone}`== "null") {
      const div = document.createElement('div');
      div.className = "card m-5 shadow";
      div.style.width = "20rem";
      div.innerHTML = ` <div>
      <img src="https://media.istockphoto.com/photos/draught-beer-in-glasses-picture-id1040303026?b=1&k=20&m=1040303026&s=170667a&w=0&h=8jsu7hsDAeHIau-_A9O36MgiJ3ZptfVE4EhSliXmfXY=" class="card-img-top" alt="...">
      </div>
      <div class="card-body m-0">
    <h2 class="card-text h2">Breweries Details</h2>
    <h4 class="card-text h4">Name: ${ele.name}</h4>
    <h4 class="card-text h4" id="type">Type: ${ele.brewery_type}</h4>
    <h4 class="card-text h4">Street: 399 Business Park Ct Ste 506</h4>
    <h4 class="card-text h4">City: ${ele.city}</h4>
    <h4 class="card-text h4">State: ${ele.state}</h4>
    <h4 class="card-text h4">Phone <i class="fa fa-phone"></i> : 5034278619</h4>
    <h4 class="card-text h4" id="website"> Website <i class="fa fa-globe" aria-hidden="true"> <a href="https://www.openbrewerydb.org/" target=_blank> https://www.openbrewerydb.org/ </a>  </h4>
    </div>`
      result.appendChild(div)
    }
    else {
      const div = document.createElement('div');
      div.className = "card m-5 shadow";
      div.style.width = "20rem";
      div.innerHTML = ` <div>
      <img src="https://media.istockphoto.com/photos/draught-beer-in-glasses-picture-id1040303026?b=1&k=20&m=1040303026&s=170667a&w=0&h=8jsu7hsDAeHIau-_A9O36MgiJ3ZptfVE4EhSliXmfXY=" class="card-img-top" alt="...">
      </div>
      <div class="card-body m-0">
    <h2 class="card-text h2">Breweries Details</h2>
    <h4 class="card-text h4">Name: ${ele.name}</h4>
    <h4 class="card-text h4" id="type">Type: ${ele.brewery_type}</h4>
    <h4 class="card-text h4">Street: ${ele.street}</h4>
    <h4 class="card-text h4">City: ${ele.city}</h4>
    <h4 class="card-text h4">State: ${ele.state}</h4>
    <h4 class="card-text h4">Phone <i class="fa fa-phone"></i> : ${ele.phone}</h4>
    <h4 class="card-text h4" id="website"> Website <i class="fa fa-globe" aria-hidden="true"></i><a href=" ${ele.website_url}" target=_blank> ${ele.website_url} </a>  </h4>

    </div>`
      result.appendChild(div)
    }
  })

}




async function getCountry() {
  try {
    const url = await fetch("https://api.openbrewerydb.org/breweries?page=1&per_page=100");
    const res = await url.json();
    res.forEach(element => {
      displayCountries(element)

    });
  }
  catch (err) {
    console.log(err);
  }
}
getCountry()

function displayCountries(data) {
  if (`${data.website_url}` == "null" || `${data.street}` == "null" || `${data.phone}`=="null") {
    const breweries = document.createElement('div');
    breweries.classList.add("breweries")
    breweries.className = "card m-5 shadow";
    breweries.style.width = "20rem";
    breweries.innerHTML = `<div>
        <img src="https://media.istockphoto.com/photos/draught-beer-in-glasses-picture-id1040303026?b=1&k=20&m=1040303026&s=170667a&w=0&h=8jsu7hsDAeHIau-_A9O36MgiJ3ZptfVE4EhSliXmfXY=" class="card-img-top" alt="...">
        </div>
        <div class="card-body m-0">
    <h2 class="card-text h2">Breweries Details</h2>
    <h4 class="card-text h4">Name: ${data.name}</h4>
    <h4 class="card-text h4" id="type">Type: ${data.brewery_type}</h4>
    <h4 class="card-text h4">Street: 399 Business Park Ct Ste 506</h4>
    <h4 class="card-text h4">City: ${data.city}</h4>
    <h4 class="card-text h4">State: ${data.state}</h4>
    <h4 class="card-text h4">Phone <i class="fa fa-phone"></i> : 5034278619</h4>
         <h4 class="card-text h4" id="website"> Website <i class="fa fa-globe" aria-hidden="true"></i>  <a href="https://www.openbrewerydb.org/" target=_blank> https://www.openbrewerydb.org/ </a>  </h4>
         
      </div>`
    result.appendChild(breweries);
  }
  else {
    const breweries = document.createElement('div');
    breweries.classList.add("breweries")
    breweries.className = "card m-5 shadow";
    breweries.style.width = "20rem";
    breweries.innerHTML = `<div>
    <img src="https://media.istockphoto.com/photos/draught-beer-in-glasses-picture-id1040303026?b=1&k=20&m=1040303026&s=170667a&w=0&h=8jsu7hsDAeHIau-_A9O36MgiJ3ZptfVE4EhSliXmfXY=" class="card-img-top" alt="...">
    <div class="card-body m-0">
    <h2 class="card-text h2">Breweries Details</h2>
    <h4 class="card-text h4">Name: ${data.name}</h4>
    <h4 class="card-text h4" id="type">Type: ${data.brewery_type}</h4>
    <h4 class="card-text h4">Street: ${data.street}</h4>
    <h4 class="card-text h4">City: ${data.city}</h4>
    <h4 class="card-text h4">State: ${data.state}</h4>
    <h4 class="card-text h4">Phone <i class="fa fa-phone"></i> : ${data.phone}</h4>
    <h4 class="card-text h4" id="website"> Website <i class="fa fa-globe" aria-hidden="true"></i>  <a href="${data.website_url}" target=_blank> ${data.website_url} </a>  </h4>

    </div>`
    result.appendChild(breweries);
  }
}