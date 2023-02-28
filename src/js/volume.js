const volumeModify = value => {
  if (value != 0) {
    volumeButton.src = volumeHigh;
  } else {
    volumeButton.src = volumeLow;
  }
};

export { volumeModify };
