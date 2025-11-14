function getImageUrl(filename: string){
    return new URL(`../assets/images/${filename}`, import.meta.url).href
}

export {getImageUrl};