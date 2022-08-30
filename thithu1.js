function findAvg(array)
{
    let average
    let sum = 0
    for(let i = 0;i<array.length;i++)
    {
        sum+= array[i]
    }
    average = sum/array.length
    return average
}
