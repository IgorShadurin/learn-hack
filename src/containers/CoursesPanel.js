import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {connect} from 'react-redux';

class CoursesPanel extends Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render() {
        const numbers = this.props.courses;
        const self = this;
        const listItems = numbers.map((course) =>
            <UI.Cell
                key={course.name}
                before={<UI.Avatar
                    type="image"
                    src="https://pp.userapi.com/c852132/v852132423/3d3c9/tI_IhafnGbE.jpg"/>}
                onClick={() => self.onClick()}
                description="">{course.title}</UI.Cell>
        );
        return (
            <UI.Group title="Выберите подходящий курс">
                {listItems}
            </UI.Group>
        );
    }

    onClick() {
        alert('Курс пока недоступен. Выберите Английский язык из раздела Курсы для вас для просмотра демо');
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(CoursesPanel);
