import '../Styles/Banner.css'
const Banner = (props) => {
    let title = props.data
    return ( 
        <div className="banner d-flex align-items-center justify-content-center">
            <div className='title'>
           <h1 className='text-light fs-1 fw-bold'>{title}</h1>
           </div>
        </div>
     );
}
 
export default Banner;