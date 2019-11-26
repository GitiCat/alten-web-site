import React from "react"
import { Link } from "react-router-dom"

class RootContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let renderData;
        renderData = (
            this.props.children
        )

        return (
            <div className="root-container">
            
                {/* header block */}
                <header className="header" id="header">
                    <div className="logo"></div>
                    <nav className="navigation">
                        <ul className="nav-list">
                            <li><Link to="/" className="nav-item">Главная</Link></li>
                            <li><Link to="/history" className="nav-item">История</Link></li>
                            <li><Link to="/activity" className="nav-item">Деятельность</Link></li>
                            <li><Link to="/documents" className="nav-item">Документы</Link></li>
                            <li><Link to="/company" className="nav-item">Предприятие</Link></li>
                            <li></li>
                            <li>
                                <Link to="/news" className="nav-item">Новости</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                
                {/* content block */}
                <article className="content" id="content">
                    {renderData}
                </article>

                {/* footer block */}
                <footer className="footer" id="footer">

                </footer>
            </div>
        )
    }
}

export default RootContainer;