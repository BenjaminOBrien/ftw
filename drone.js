startProgram = async function () {
  await drone.takeOff();

  // Knock out ping-pong balls
  await drone.fly("backward", 1, 100);
  await drone.fly("down", 1, 100);
  await drone.wait(2);

  // Head through obstacle
  await drone.fly("forward", 3.2, 100);

  // Goto air-powered ball thing
  await drone.rotate(92, "clockwise");
  await drone.fly("forward", 3.42, 100);

  // Haha, air goes brrrrrrrrrrrr
  await drone.wait(2);

  // Land drone
  await drone.wait(2);
  await drone.rotate(5, "counterclockwise")
  await drone.fly("backward", 1.5, 100);
};
