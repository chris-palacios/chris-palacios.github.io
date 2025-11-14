function Path(args: String[]){
    let path: string = "";
    args.forEach(element => {
        path = path + element
    });
    return path
}

export default Path