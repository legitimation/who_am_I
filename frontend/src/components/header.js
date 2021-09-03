const Title = "Zieho"

const Header = ({title, anyname}) => {
    return (
        <header>
            <h1>{Title}</h1>
            <h2>{title}, {anyname}</h2>
            <button> BUTTON </button>
        </header>
    )
}

// const Header = (props) => {
//     return (
//         <header>
//             <h1>{title}</h1>
//             <h2>{props.title}, {props.anyname}</h2>
//         </header>
//     )
// }

export default Header