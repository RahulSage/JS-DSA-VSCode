function productOfArray(arr){
    let product = 1;

    function productHelper(arr1) {
        if(arr1.length === 0) return 1

        return arr1[0] * productHelper(arr1.slice(1));
    }

    product = productHelper(arr);

    return product; 
}