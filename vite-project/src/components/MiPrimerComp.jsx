export default function MiPrimerComp() {
 const post = {
    title: "Mi componente",
    date: "11-06-24",
    description: "El primero componente del bootcamp"
 }
 return (
    <div>
         <h2>{post.title}</h2>
         <p>{post.date}</p>
         <p>{post.description}</p>
    </div>
 )
}