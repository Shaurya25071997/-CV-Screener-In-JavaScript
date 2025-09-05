console.log("This is my index.js")
// Data is an array  of objects which contain information about the candidates
const data = [
    {
        name: "Rohan Das",
        age: 18,
        city: "Kolkata",
        language: "python",
        framework: "Django",
        image: "https://randomuser.me/api/portraits/men/79.jpg"
    },

      {
        name: "Shaurya Tiwari",
        age: 19,
        city: "Kanpur",
        language: "python",
        framework: "Flask",
        image: "https://randomuser.me/api/portraits/men/78.jpg"
    },
    
      {
        name: "Akshay",
        age: 20,
        city: "Bangalore",
        language: "JS",
        framework: "Node",
        image: "https://randomuser.me/api/portraits/men/77.jpg"
    },

    {
        name: "Shaun",
        age: 20,
        city: "Bangalore",
        language: "React",
        framework: "SQL",
        image: "https://randomuser.me/api/portraits/men/80.jpg"
    }



]

// CV Iterator

function cvIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        
        }

    };
}
const candidates = cvIterator(data);
nextCV();

// Button listener for next button

const next = document.getElementById("next")
next.addEventListener('click', nextCV);



function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile')
    if(currentCandidate != undefined){

    image.innerHTML = `<img src='${currentCandidate.image}'>`;

    profile.innerHTML = `<ul class="list-group">
  
  <li class="list-group-item">Name: ${currentCandidate.name}</li>
  <li class="list-group-item">${currentCandidate.age} years old</li>
  <li class="list-group-item">Lives in${currentCandidate.city}</li>
  <li class="list-group-item">Primarly works on${currentCandidate.language}</li>
   <li class="list-group-item">${currentCandidate.framework} framework</li>
   
  
</ul>`
    }
    else{
        alert('End of candidate Applications');
    }



}


