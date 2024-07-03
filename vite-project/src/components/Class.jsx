
export default function Class() {
    const isTitle = true;

    return(
        <div>
            <div className = 'component'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, saepe cupiditate dolores aspernatur voluptas iusto natus ut assumenda, tempora eius, aperiam vero placeat voluptates minima id mollitia? Deleniti, itaque fugiat!</p>
            </div>

            <div className = {isTitle ? "title" : "paragraph"}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, saepe cupiditate dolores aspernatur voluptas iusto natus ut assumenda, tempora eius, aperiam vero placeat voluptates minima id mollitia? Deleniti, itaque fugiat!</p>
            </div>
        </div>
    )
}