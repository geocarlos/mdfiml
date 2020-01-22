const getInitialLetters = async wordList => {
    const initials = await wordList.map(word => word[0]);
    initials.sort();
    return new Set(initials);
}

export default getInitialLetters;