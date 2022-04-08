const theInput = document.querySelector(".get-repos input");
const getButton = document.querySelector(".get-button");
const reposData = document.querySelector(".show-data");

getButton.onclick = function () {
  return getRepos();
};
// Get repos function

function getRepos() {
  if (theInput.value == "") {
    reposData.innerHTML = "<span> Please Write Github Usename </span>";
  } else {
      
    handleFetchUserMeeting = () => {
        fetch(`https://randomuser.me`)
        .then(response => response.json())
        .then(data => this.setstate{userList: data},() => {
            if (Array.isArray(data)){
                data.filter(el => el.age > 30).array.forEach(el => {
                    el.meetings.forEach(mtId => {
                        fetch(`https://randomuser.me/meetings/${mtId}`)
                        .then(response => response.json())
                        .then(data => console.log('meetings' , data.name)
                        
                    })
                    
                })
            }
        })
    }
  
  }
