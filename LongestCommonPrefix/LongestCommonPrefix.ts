const longestCommonPrefix = (strs: string[]): string =>{

    if(strs.length === 0) return"";

    let shorter = strs.reduce((a,b) => a.length < b.length ? a : b);

    for( let i = 0; i< shorter.length; i++){
        for(let str of strs) {
            if(str[i] !== shorter[i]){
                return shorter.slice(0, i);
            }
        }
    }

    return shorter;
}