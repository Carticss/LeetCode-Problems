function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let freeSpaces = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] != 1 && flowerbed[i - 1] != 1 && flowerbed[i + 1] != 1) {
            flowerbed[i] = 1;
            freeSpaces++;
        }
    }
    return freeSpaces >= n;
};