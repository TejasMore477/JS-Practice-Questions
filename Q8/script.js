let input = document.querySelector("input");

let data = [{name:'tejas', src:"https://images.unsplash.com/photo-1542190891-2093d38760f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE2fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},
{name:'tejasvini', src:"https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
{name:'tejasvi', src:"https://images.unsplash.com/photo-1592621385645-e41659e8aabe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg2fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},
{name:'tejasrao', src:"https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
{name:'nishant', src:"https://images.unsplash.com/photo-1600603405959-6d623e92445c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},
{name:'nishantrao', src:"https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},
{name:'priti', src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
{name:'bandya', src:"https://plus.unsplash.com/premium_photo-1672907030834-d04f7f990528?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ5fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},
{name:'ranchoo', src:"https://images.unsplash.com/photo-1600603477970-7152b8ea521b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"},];

var person ="";

data.forEach((elem)=>{
    person += `<div class="person">
    <div class="img">
        <img src="${elem.src}">
    </div>
    <h3>${elem.name}</h3>
</div>`;
});

document.querySelector(".people").innerHTML = person;

input.addEventListener("input", ()=>{
    let matching = data.filter((e)=>{
        return e.name.startsWith(input.value);
    });
    var newUser = "";
    matching.forEach((elem)=>{
        newUser += `<div class="person">
        <div class="img">
            <img src="${elem.src}">
        </div>
        <h3>${elem.name}</h3>
    </div>`;
    });

document.querySelector(".people").innerHTML = newUser;
});




