// speet limit = 70
// 5 -> 1 point
// math.floor(1.3)
// 12 point -> suspended

checkSpeed(120);

function checkSpeed(speed) {
    const speedLimit = 70;
    const KMPerPoint = 5;

    if (speed < speedLimit + KMPerPoint) {
        console.log('ok');
        return;
    }

    else {
        const points = Math.floor((speed - speedLimit) / (KMPerPoint)) 
        if (points >= 12)
            console.log('Licence suspended');
        else
            console.log('points', points);  
            
        }
}