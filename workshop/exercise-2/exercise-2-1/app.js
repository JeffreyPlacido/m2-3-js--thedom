// Preset values

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

// 2. Create li

// 3. Create span and add it to the li

// 4. Assign an id to each lane
// Preset values


const FROGS = 3;
const racers = [];

for (let i = 0; i < FROGS ; i++) {

    const lane = document.createElement("li");
    const laneId = `lane-${i + 1}`
    lane.id = laneId;
    document.querySelector(".track").appendChild(lane);

    const frogIndex = Math.floor(Math.random() * frogStable.length)
    racers.push(frogStable[frogIndex]);
    frogStable.splice(frogIndex, 1);

    const racingFrog = racers[i];
    racingFrog.progress = 0;
    racingFrog.lane = i + 1;

    let span = document.createElement("span");
    span.className = "frog"
    span.innerHTML = `${racingFrog.name} ${racingFrog.number}`;
    span.setAttribute("progress", racingFrog.progress);
    document.querySelector(`#${laneId}`).appendChild(span);

    span.style.backgroundColor = `${racingFrog.color}`
}

const racingFrog = function(frog) {
    const delay = Math.floor(Math.random() * 3000);
    const jumps = setInterval(function() {

        const progress = (Math.floor(Math.random() * 100) + 1);
        frog.progress = frog.progress + progress;

        if (frog.progress > 100) {
            frog.progress = 100;
            console.log("End of the race");
            clearInterval(jumps);
        }
        console.log(frog.progress)
        document.querySelector(`.track #lane-${frog.lane} .frog`).style.left = frog.progress + '%' ;
    }, delay);
}
racers.forEach( racer => racingFrog(racer) );
