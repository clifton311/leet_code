// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

const canAttendMeetings = intervals => {

    if(!intervals || intervals.length === 1) return true;
    
    //sort the intervals
    let sorted = intervals.sort((a,b) => a[0] - b[0]);
    
    
    //loop through interval and don't last one
    for(let i = 0; i < sorted.length - 1; i++) {
        //if the first end time is greater then next start time
        if(sorted[i][1] > sorted[i+1][0]) return false;
    }
    return true;


//     Complexity Analysis

// Time complexity : O(nlog n) O(nlogn). The time complexity is dominated by sorting. Once the array has been sorted, only O(n log end) 
//time is taken to go through the array and determine if there is any overlap.

// Space complexity : O(1). Since no additional space is allocated.
};

module.exports = canAttendMeetings;
