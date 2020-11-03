const brain_progression_module = () => {
  const progressionLength = Math.floor(Math.random() * (10 - 5 + 1) + 5);
  let progressionBegin = Math.floor(Math.random() * 90 + 10);
  const progressionStep = Math.floor(Math.random() * 90 + 10);

  const progarr = [];

  progarr.push(progressionBegin);

  for (let i = 0; i < progressionLength - 1; i++) {
    progressionBegin += progressionStep;
    progarr.push(progressionBegin);
  }

  const progressionUndefinednumber = Math.floor(Math.random() * (progressionLength + 1));
  const deletedValue = progarr[progressionUndefinednumber];

  progarr[progressionUndefinednumber] = null;

  return [progarr, deletedValue];
};

export default brain_progression_module;
