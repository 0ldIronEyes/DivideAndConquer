function countZeroes(arr)
{
    if (findFirstOneZero(arr) === -1) 
    {return 0; }

    return arr.length  - findFirstOneZero(arr);
}

function findFirstOneZero(arr, first = 0, last = arr-1)
{
    if (last >= first)
    {
        let mid = first + Math.floor((last - first) / 2);
        if (mid == 0 || arr[mid -1] === 1 && arr[mid +1] === 0 )
        {
            return mid;
        }
        else if (arr[mid]=== 1)
        {
            return findFirstOneZero(arr, mid +1, last);
        }
        else 
        {
            return findFirstOneZero(arr, first, mid -1)
        }
    }
    return -1;
}

function findFirst(arr, num, first = 0, last = arr-1)
{
    if ( last >= first)
    {
        let mid = first + Math.floor((last - first) / 2);
    if (mid === 0 ||  arr[mid] === mid && num > arr[mid -1] )
    {
        return mid;
    }
    else if (num > arr[mid])
    {
        return findFirst(arr, num, mid +1, last);
    }
    else 
    {
        return findFirst(arr, num, first, mid -1)
    }
    }
    return -1;
}

function findLast(arr, num, first = 0, last = arr-1)
{
    if(last >= first)
    {
        let mid = first + Math.floor((last - first) / 2);
        if (mid == arr.length -1 ||  arr[mid] === mid && num < arr[mid +1] )
        {
            return mid;
        }
        else if (num > arr[mid])
        {
            return findLast(arr, num, mid +1, last);
        }
        else 
        {
            return findLast(arr, num, first, mid -1)
        }
    }
    return -1
   
}

function sortedFrequency(array, num)
{
    return findLast(array, num) - findFirst(array, num) + 1;
}


function findRotatedIndex(array, num)
{   
    const pivot = findPivot(array);
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
        return binarySearch(array, num, 0, pivot - 1);
      } else {
        return binarySearch(array, num, pivot, array.length - 1);
      }
}

function binarySearch(array, num, start, end) {
    if (array.length === 0) return -1;
    if (num < array[start] || num > array[end]) return -1;
    while (start <= end)
    {
        const mid = Math.floor((start +end)/ 2);
        if (array[mid === num])
        { return; }
        else if (array[mid] >  num)
        {  end = mid - 1; }
        else
        {
            end = mid + 1;
        }
    }
    return -1;
}

function findPivot(arr)
{
    let start = 0;
    let end = arr.length - 1;
    while (start <= end)
    {
        let mid = Math.floor((start + end)/ 2);
        if (arr[mid] > arr[mid +1]) return mid +1;
        else if (arr[start] <= arr[mid]) {
            start = mid +1
        }
        else
        {
            start = mid -1
        }
    }
}

function findRotationCount(arr, low = 0, high = arr.length -1)
{
    if (high < low) return 0;
    if (high === low) return low;
    let mid = Math.floor((low +high) / 2);

    if (mid < high && arr[mid + 1] < arr[mid])
    {
        return mid + 1;
    }

    if ( arr[mid] < arr[mid-1] && arr[mid] < arr[mid+1] )
    {
        return mid;
    }
    if (arr[high] > arr[mid])
    {
        return findRotationCount(arr, low, mid - 1);
    }
    return findRotationCount(arr, mid + 1, high);
}

function findFloor(arr, num, low = 0, high = arr.length -1)
{
    if (low > high) { return -1 ; }
    if (num >= arr[high]) return arr[high];
    
    let mid = Math.floor((low + high) / 2);

    if (arr[mid]===num) return arr[mid];

    if (mid > 0 && arr[mid -1] <= num && num < arr[mid]) 
    {
        return arr[mid -1];
    }

    if (num <arr[mid])
    {
        return findFloor(arr, num, low, mid - 1);
    }
    return findFloor(arr, num, mid +1, high)
}