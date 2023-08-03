/* eslint-disable react/prop-types */
// "rafc"  enter -- or -- "ffc"  enter


function Course({ image, title, description }) {


    // ! props definition


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



