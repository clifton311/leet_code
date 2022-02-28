/*
Given an array of intervals where intervals[i] = [starti, endi],
 merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
*/



const merge = intervals => {
  //sort the intervals by first element in interval

    intervals.sort((a,b) => a[0]-b[0])
    
    // we take the first item of the sorted intervals as part of the result
   let result = [intervals[0]]
 // i start at 1 because we pushed sorted intervals[0] to result already
   for (let i = 1; i < intervals.length; i++) {
       
     let currStart = intervals[i][0]
     let currEnd = intervals[i][1];
       
    // set variables to define interval already in result array
     let prevStart = result[result.length-1][0]
     let prevEnd = result[result.length-1][1]
    
      //if the start of the intervals[i][0] is smaller than the last digit of the last item in result
      //we know there is an overlap
     if (currStart <= prevEnd) {
         
     //update the last digit of the last item in result
      result[result.length-1] = [Math.min(currStart, prevStart), Math.max(prevEnd, currEnd)]
     } else {
         
        //if no overlap, push intervals[i] to result, update result index
       result.push(intervals[i])
     }
   }
   return result

};


// Time complexity : O(n\log{}n)O(nlogn)

// Other than the sort invocation, we do a simple linear scan of the list, so the runtime is dominated by the O(n\log{}n)O(nlogn) complexity of sorting.

// Space complexity : O(\log N)O(logN) (or O(n)O(n))

module.exports = merge;
