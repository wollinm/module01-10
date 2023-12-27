let sally = 'Sally Eight'
let mark = 'Mark Martin'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let molly = 'Molly'
let tim = 'Tim'
const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{sally}</li>
        <li>{mark}</li>
        <li>{holly}</li>
        <li>{amol.toUpperCase()}</li>
        <li>{molly}</li>
        <li>{tim}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))