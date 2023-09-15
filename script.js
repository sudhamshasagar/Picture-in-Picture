const videoElement = document.querySelector('.video');
const btnElement = document.querySelector('.button');

async function captureScreen(displayMediaOptions){
    
    try {
        const mediaMode = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaMode;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    }

    // 
    btnElement.addEventListener('click' , async () =>{
        btnElement.disabled =true;
        await videoElement.requestPictureInPicture();

        btnElement.disabled=false;
    });

    captureScreen();