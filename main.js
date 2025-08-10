const video = document.getElementById('video');

async function start() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (e) {
    console.error('Camera error:', e);
    alert('Could not access camera.');
  }
}

start();
