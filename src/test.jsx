// named 
export function Test() {
    return (
        <>
            <h1>Test h1</h1>
        </>
    );
}

const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long'}
    ).format(date);
}

export default function TestDate() {
    return (
        <>
            <h2>The date is {formatDate(today)}</h2>
        </>
    )
}