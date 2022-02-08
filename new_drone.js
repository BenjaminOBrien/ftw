// Honk, cool program
startProgram = async function () {
  await drone.takeOff();
  await drone.fly("up", 0.7, 100);
  await drone.fly("right", 0.3, 100);
  await drone.fly("forward", 1, 100);
  await drone.fly("down", 0.8, 100);  // Go down more so we can hover over the thing
  await drone.fly("left", 0.5,  100);
  await drone.fly("backward", 0.4, 100);
  await drone.land();
};
