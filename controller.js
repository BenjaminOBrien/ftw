startProgram = async function () {
  await drone.takeOff();
};

keyPressListeners.pressed.ArrowUp = async function () {
  await drone.fly("forward", 0.1, 100);
};
keyPressListeners.pressed.ArrowDown = async function () {
  await drone.fly("backward", 0.1, 100);
};
keyPressListeners.pressed.ArrowLeft = async function () {
  await drone.rotate(10, "counterclockwise");
};
keyPressListeners.pressed.ArrowRight = async function () {
  await drone.rotate(10, "clockwise");
};
keyPressListeners.pressed.q = async function () {
  await drone.fly("down", 0.1, 100);
};
keyPressListeners.pressed.e = async function () {
  await drone.fly("up", 0.1, 100);
};
