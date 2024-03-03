import Jeopardy from "./Jeopardy";

//doing this to force component reload for routes
const DoubleJeopardy = props => {

    const dcats = ['HISTORY', 'TAINTED GOV', 'AMERICAN NICKNAMES', 'DOWN MEXICO WAY', 'SCOTLAND', 'SCIENCE & NATURE']
    const dvals = ['$400', '$800', '$1200', '$1600', '$2000']

    return (
        <Jeopardy cats={dcats} vals={dvals} />
    )
}

export default DoubleJeopardy