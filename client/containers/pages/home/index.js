import React, { Component } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import FilterTiltShiftIcon from '@material-ui/icons/FilterTiltShift';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CallSplitOutlinedIcon from '@material-ui/icons/CallSplitOutlined';
import AvTimerOutlinedIcon from '@material-ui/icons/AvTimerOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

class HomeContainer extends Component {

    constructor(props) {
        super(props);

        this.clickToDown = this.clickToDown.bind(this);
    }

    clickToDown(e) {
        let element = document.getElementById("about");
        element.scrollIntoView({block: "start", behavior: "smooth"});
    }

    render() {
        return (
            <div className="page-container">
                <div className="top-container">
                    <div className="bg-img absolute full-screen"></div>
                    <div className="title bg-dark">
                        <h2>Научно-производственный комплекс</h2>
                        <h2>Альтернативная энергетика</h2>
                        <p>Разработка и производство химических источников тока</p>
                    </div>
                    <button className="btn-down" onClick={this.clickToDown}>
                        <ArrowBackIosIcon/>
                    </button>
                </div>
                <div className="section" id="about">
                    <div className="line-block">
                        <div className="block numerable-block">
                            <ul>
                                <li><span>01</span><span>Производство аккумуляторных батарей</span></li>
                                <li><span>02</span><span>Производство первичных источников тока</span></li>
                                <li><span>03</span><span>Поставка зарядно-разрядных устройств</span></li>
                            </ul>
                        </div>
                        <div className="block">
                            <div className="title bg-white">
                                <h2>Кто мы?</h2>
                                <p>Коротко о том, что вам нужно знать</p>
                            </div>
                            <div className="descriptor bg-white">
                                <p className="about">
                                    АО «НПК «АЛЬТЭН» - это современное, динамично развивающееся предприятие, располагающее высококвалифицированным
                                    персоналом и мощной производственной базой, которые обеспечивают отличное качество и надежность при разработке и выпуске
                                    химических источникой тока и устройств для их обслуживания и диагностики.
                                </p>
                            </div>
                            <div className="link contained lblue">
                                <Link to="/activity"><span>Подробнее</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="block">
                        <div className="title bg-white">
                            <h2>Услуги</h2>
                            <p>Предприятие предоставляет все необходимые услуги нашим клиентам по выпускаемой продукции</p>
                        </div>
                    </div>
                    <div className="block">
                        <div className="diagram">
                            <FilterTiltShiftIcon id="svg-main"/>
                            <SupervisorAccountIcon className="diag-item" id="svg-elem-1"/>
                            <hr id="dot"/>
                            <HelpOutlineOutlinedIcon className="diag-item" id="svg-elem-2"/>
                            <hr id="dot"/>
                            <AssignmentOutlinedIcon className="diag-item" id="svg-elem-3"/>
                            <hr id="dot"/>
                            <CallSplitOutlinedIcon className="diag-item" id="svg-elem-4"/>
                            <hr id="dot"/>
                            <AvTimerOutlinedIcon className="diag-item" id="svg-elem-5"/>
                            <hr id="dot"/>
                            <SettingsOutlinedIcon className="diag-item" id="svg-elem-6"/>
                            <hr id="dot"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeContainer;