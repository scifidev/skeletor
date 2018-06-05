export default class HashGenerator {
    
    /* Generate the DJB2 hash using the algorith specified by Dan Bernstein */
    static toHash(stringToHash) {
        var hash = 5381;
        for (i = 0; i < stringToHash.length; i++) {
            char = stringToHash.charCodeAt(i);
            hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
        }
        return hash;
    }
}