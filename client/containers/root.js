import React from "react"
import { Link } from "react-router-dom"

class RootContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        let headerObj = document.getElementById("header");

        document.addEventListener("scroll", (e) => {
            let scrollPosY = window.scrollY;
            
            if(scrollPosY >= 10) {
                headerObj.classList.add("scrolling");
            } else {
                headerObj.classList.remove("scrolling");
            }
        })
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
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/history">История</Link></li>
                            <li><Link to="/activity">Деятельность</Link></li>
                            <li><Link to="/documents">Документы</Link></li>
                            <li><Link to="/company">Предприятие</Link>
                                <ul className="nav-dropdown">
                                    <li><Link to="/company/leadership">Руководство</Link></li>
                                    <li><Link to="/company/publications">Публикации</Link></li>
                                    <li><Link to="/company/licences">Лицензии</Link></li>
                                    <li><Link to="/company/gallery">Галерея</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/products" className="nav-item">Продукция</Link>
                                <ul className="nav-dropdown">
                                    <li><Link to="/products/rechargeable-batteries">Аккумуляторные батареи</Link></li>
                                    <li><Link to="/products/primary-current-sources">Первичные источники тока</Link></li>
                                    <li><Link to="/products/zru">Зарядно - разрядные устройства</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/news" className="nav-item">Новости</Link></li>
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