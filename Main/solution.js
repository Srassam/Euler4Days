function updateInventory(arr1, arr2) {
    return arr1;
}
//1) work through each item of the new inventory to see if it exists in the current inventory or not.
//2)create a variable that will store the location of the prodcut(index)

//3)create var getProductIndex() to return the index of a specified product. 

//It iterates through each element of the array that it is called on until it can find the name parameter. 
//If the product is not found in the inventory, undefined is returned.
// 4)search the new inventory for that product name and return its index.
//5)If the item is found, quantity of the product is added to the quantity of the same product in current inventory.
//6)If the item is not found, the entire product (name and quantity) is added to the current inventory.
//7)The updated inventory, arr1, is then sorted by product name 


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);