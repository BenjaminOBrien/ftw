// Left-side auto
startProgram = async function () {
	await drone.takeOff();
	await drone.fly("down", 0.4, 100);
  
  // Knock out the balls
  await drone.rotate(40, "clockwise");
  await drone.fly("backward", 0.6, 100);
  await drone.wait(2);       
  await drone.fly("backward", 0.3, 100);
  await drone.rotate(50, "clockwise");
  await drone.fly("forward", 1, 100);
  await drone.fly("down", 0.3, 100);
  await drone.wait(2);
  
  // Go through the arches
  await drone.rotate(90, "counterclockwise");
  await drone.fly("forward",  1, 100);
  await drone.rotate(90, "clockwise");
	await drone.fly("forward", 2, 100);

  // Land
 	await drone.rotate(90, "clockwise");
  await drone.fly("forward", 0.8, 100);
  await drone.land();
}; 
