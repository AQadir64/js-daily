const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!");
    }, duration);
  });
  return promise;
};

function getPosition(opt) {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {},
      opt
    );
  });

  return promise;
}

function getCurrentLocation() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData;
      return setTimer(2000);
    })
    .then(data => {
      console.log(data, positionData);
    });
  setTimer(0).then(data => {
    console.log("timer done!!!");
  });
  console.log("getting the location.....");
}

getCurrentLocation();
