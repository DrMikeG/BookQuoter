const listEl = document.querySelector("ul")

const renderOptions = (currentDeviceId, devices) => {  
  listEl.innerHTML = ""
    
  devices
    .filter(deviceInfo => deviceInfo.kind === "videoinput")    
    .map(({ label, deviceId }) => {
      const el = document.createElement('li')
      
      if (deviceId == currentDeviceId)
        el.innerHTML = `<a href="#" onclick="selectCamera('${deviceId}')">${label}</a> [PREFERRED]`
      else
        el.innerHTML = `<a href="#" onclick="selectCamera('${deviceId}')">${label}</a>`
        
      return el
    })
    .forEach(el => listEl.appendChild(el))
}


let stream

const selectCamera = async deviceId => {
  try {
    console.log(deviceId)
    
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
    }
    
    const videoConstraints = {};
    if (!deviceId) {
       videoConstraints.facingMode = 'environment';
    } else {
       videoConstraints.deviceId = { exact: deviceId };
    }

    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: videoConstraints,
    })

    const videoEl = document.querySelector('video')
    videoEl.srcObject = stream

    const [ videoTrack ] = stream.getVideoTracks()

    renderOptions(
      videoTrack.getSettings().deviceId, 
      await navigator.mediaDevices.enumerateDevices()
    )
  } catch (error) {
    console.error(error)
  }
}

selectCamera()