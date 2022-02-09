// Honk, cool program
startProgram = async function () {
  await drone.takeOff();
  await drone.fly("up", 0.9, 100);
  await drone.fly("right", 0.3, 100);
  await drone.fly("forward", 1, 100);
  await drone.fly("down", 1.1, 100);  // Go down more so we can hover over the thing
  await drone.fly("left", 0.5,  100);
  
  // yooo wait until the balls be gone
  await drone.wait(3);
  
  // aIGHT IMA HEAD OUT
  await drone.rotate(45, "clockwise");
  await drone.fly("forward", 2, 100);
  await drone.land();
};
