/* export default function Todo({ task, isDone }) {
    return( 
        <li>Task: {task}</li>
    )

} */


// Conditional Rendering Option 1 (if-else):
/* export default function Todo({ task, isDone }) {
    if(isDone === true){
        return <li>Finished: {task}</li>
    }
    else{
        return <li>Work on: {task}</li>
    }

} */

// Conditional Rendering Option 2 (if-else, shorter):
/* export default function Todo({ task, isDone }) {
    if (isDone) {
        return <li>Finished: {task}</li>
    }
    return <li>Work on: {task}</li>

} */

// Conditional Rendering Option 3 (Ternary Operator):
/* export default function Todo({ task, isDone }) {
    return( 
        <li>{isDone ? 'Finished' : 'Work on'}: {task}</li>
    )

} */

// Conditional Rendering Option 4 (Using && Operator):
/* export default function Todo({ task, isDone }) {
    return(
        <li>{task} {isDone && ': Done'}</li>
    )

} */

// Conditional Rendering Option 5 (Using || Operator):
/* export default function Todo({ task, isDone }) {
    return(
        <li>{task} {isDone || ': Doit'}</li>
    )

} */

// Conditional Rendering Option 6
export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li>Finished: {task}</li>
    }
    else {
        listItem = <li>Work on: {task}</li>
    }
    return listItem;
}