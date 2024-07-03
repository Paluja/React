export default function CondIfElse() {
    const isPremium = true;

    return (
        <div>
        {isPremium ? <a href="https://www.google.com">ir a google</a> : <p>no eres premium</p>}
        </div>
    )
}