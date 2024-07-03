export default function Condicional() {
    const isAdmin = true;
    return (
        <div>
            {isAdmin && (<h3>Admin</h3>)} {/* /*If isAdmin is true, then show the h3 tag */}
        </div>
    )
}