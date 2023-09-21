const REACT_SERVER = 'https://symphony-demo.vercel.app/';

window.onload = () => {
  const randRoom = () => `${REACT_SERVER}${Math.floor(Math.random() * 10000)}`;

  const singleWhiteboardFrame = document.getElementById('singleplayer-demo').children[0];
  const multiWhiteboardFrames = document.getElementById('multiplayer-demo').children;

  singleWhiteboardFrame.setAttribute('src', randRoom());

  const multiplayerDemoRoom = randRoom();
  [...multiWhiteboardFrames].forEach(frame => frame.src = multiplayerDemoRoom)
}
