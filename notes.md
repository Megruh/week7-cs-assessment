                Insert          Append
tinyArr         70.506 ms       125.051 ms
smallArr        62.52 ms        408.465 ms
mediumArr       169.044 ms      158.684 ms
largeArr        6.497 ms        627.43 ms
xlArr           950.132 ms      3.826 ms

Read over the results, and write a paragraph that explains the pattern you see. How does each function “scale”? Which of the two functions scales better? How can you tell?

The push method has a time complexity of O(1), but the overall append function has a time complexity of O(n). So the total runtime of the append function depends on the array it's looping over.

The unshift method has a runtime complexity of O(n), and the overall insert function has a runtime of O(n), which makes the overall function runtime equal O(n^2). The runtime for the insert function scales worse than the append function because unshift has to iterate through the entire array for each iteration of the for loop.

The append function will scale better than the insert function, because the push method is O(1) and the unshift method is O(n). This will especially be the case as we scale them up, as is shown in the table above.
