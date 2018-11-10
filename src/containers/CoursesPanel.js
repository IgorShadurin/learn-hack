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
                key={course.id}
                description="">
                <iframe width="100%" src={"https://www.youtube.com/embed/" + course.youtubeId} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </UI.Cell>
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
