import "./header.css";

const Title = "Zieho Choi's frontend developing study"

const Header = ({title, anyname}) => {
    return (
        <header className = 'header'>
            <h1 className = "title"> {Title} </h1>
            <h2 className = "props">{title}, {anyname}</h2>
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