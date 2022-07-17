function isIsomorphic (s, t) {
    let mapS = {};
    let mapT = {};

    for (let i in s) {
        let valueS = s[i];
        let valueT = t[i];

        if (!mapS[valueS]) {
            mapS[valueS] = valueT;
        } else if(mapS[valueS] != valueT) {
            return false;
        }

        if (!mapT[valueT]) {
            mapT[valueT] = valueS;
        } else if(mapT[valueT] != valueS) { 
            return false;
        }
    }

    return true;
}