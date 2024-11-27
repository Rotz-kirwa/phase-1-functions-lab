// 1. distanceFromHqInBlocks: calculates distance in blocks from HQ (42nd street)
function distanceFromHqInBlocks(block) {
    const hq = 42; // HQ is at 42nd street
    return Math.abs(block - hq);
  }
  
  // 2. distanceFromHqInFeet: calculates distance in feet from HQ
  function distanceFromHqInFeet(block) {
    const feetPerBlock = 264; // Each block is 264 feet
    return distanceFromHqInBlocks(block) * feetPerBlock;
  }
  
  // 3. distanceTravelledInFeet: calculates distance travelled in feet between two blocks
  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; // Each block is 264 feet
    return Math.abs(destination - start) * feetPerBlock;
  }
  
  // 4. calculatesFarePrice: calculates fare based on start and destination
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // Distance travelled in feet
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25 for distances over 2000 feet but less than or equal to 2500 feet
    } else {
      return "cannot travel that far"; // Rides over 2500 feet are not allowed
    }
  }