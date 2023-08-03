/* eslint-disable react/prop-types */
// "rafc" yazıp enter -- veya -- "ffc" yazıp enter


function Course({ image, title, description }) {

    // const { title, description } = props

    // const title = props.title
    // const description = props.description


    return (
        <>
            <img src={image} alt="" />
            <div> {title} </div>
            <div> {description} </div>
        </>
    );
}

export default Course;



/*

export const Course = () => {

    return (
        <div>
            <div> </div>
        </div>
    )
}

*/



