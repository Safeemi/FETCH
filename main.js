const theInput = document.querySelector(".get-repos input");
const getButton = document.querySelector(".get-button");
const reposData = document.querySelector(".show-data");

getButton.onclick = function () {
 getRepos();
};
// Get repos function

function getRepos() {
  if (theInput.value == "") {
    reposData.innerHTML = "<span> Please Write Github Usename </span>";
  } else {
      let userListDom = document.querySelector("#userList")
    fetch(`https://randomuser.me/api/?results=150`)
      .then((response) => response.json())
      .then((response) => console.log(response));
      let results = responseJson.results;
      results.forEach(item => {
         let liDOM = document.createElement('li')
         liDOM.innerHTML = item.age
         userListDom.appendChild(liDOM)
            
          
          
      });
  }
}
