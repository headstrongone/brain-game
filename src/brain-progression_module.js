export const brain_progression = () => {
    let progressionLength = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    let progressionBegin = Math.floor(Math.random() * 90 + 10);
    let progressionStep = Math.floor(Math.random() * 90 + 10);

    let progarr = [];

    progarr.push(progressionBegin);

    for (let i = 0; i < progressionLength - 1; i++){
        progressionBegin += progressionStep;
        progarr.push(progressionBegin);
    }

    let progressionUndefinednumber = Math.floor(Math.random() * (progressionLength + 1));
    let deletedValue = progarr[progressionUndefinednumber];

    progarr[progressionUndefinednumber] = null;

    return [progarr, deletedValue];
};



