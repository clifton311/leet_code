// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval 
// and intervals is sorted in ascending order by starti. 
// You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by 
// starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
var insert = function(intervals, newInterval) {
    
   let result = [];
    
    for (let i = 0; i < intervals.length; i++) {
        // New interval is after this interval.
        // !newInterval means, already in result. 
        if (!newInterval || newInterval[0] > intervals[i][1]) {
            result.push(intervals[i]);
        } 
        // New interval is before this interval.
        else if (newInterval[1] < intervals[i][0]) {
            // Done, don't need to worry of new interval anymore.
            result.push(newInterval);
            newInterval = null;
            result.push(intervals[i]);
        }
        // else, it means interval is part of this interval. 
        // Find min and max between interval and new interval. 
        // Set the new min and max.
        else {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        }
        
    }
    
    //If new interval is at the end, never get pushed to the array. 
    if (newInterval) {
        result.push(newInterval);
    }
    
    return result;
}