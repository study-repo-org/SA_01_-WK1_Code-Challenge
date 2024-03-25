// Function to detect speed calculate demerit points
function speedDetector() {
    // Constants containing the speed limit, interval for demerit points calculation,
    // demerit points per interval, and maximum demerit points before license suspension
    const speedLimit = 70;
    const speedInterval = 5;
    const demeritPointsPerInterval = 1;
    const maxDemeritPoints = 12;

    // Prompt the user to enter the speed of the car
    const speed = parseInt(prompt("Enter the speed of the car:"), 10);

    // Check if the speed is less than the speed limit (70)
    if (speed < speedLimit) {
        // If speed is within the limit, log "Ok"
        console.log("Ok");
    } else {
        // If the speed exceeds the limit, calculate excess speed
        const excessSpeed = speed - speedLimit;

        // Calculate the number of complete intervals of (5 km/h) exceeded
        const completeIntervals = Math.floor(excessSpeed / speedInterval);

        // Calculate the total demerit points
        const demeritPoints = completeIntervals * demeritPointsPerInterval;

        // Check if demerit points exceed the maximum demerit point for license suspension
        if (demeritPoints > maxDemeritPoints) {
            // If demerit points exceeds log "License suspended"
            console.log("License suspended");
        } else {
            // Otherwise, log the total demerit points
            console.log("Points: " + demeritPoints);
        }
    }
}

// Call the function to execute the speed detector logic
speedDetector();
