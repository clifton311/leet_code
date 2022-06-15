// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], r
// eturn the minimum number of conference rooms required.

// Example 1:

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2
// Example 2:

// Input: intervals = [[7,10],[2,4]]
// Output: 1

var minMeetingRooms = function(intervals) {
    
    let start = [];
    let end = [];
    let res = 0;
    let count = 0
    let i = 0
    let j = 0
    
    //looop through the intervals and push all the start times and end times
    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i]
        start.push(interval[0])
        end.push(interval[1])
    }
    
    //sort the intervals by start date and end date
    start.sort((a, b) => a-b)
    end.sort((a, b) => a-b)
    
    while (i < start.length) {
        if (start[i] < end[j]) {
            count++
            i++
        } else {
            count--;
            j++
        }
        
        //grab the maximum
        res = Math.max(count,res)
    }
    return res
};