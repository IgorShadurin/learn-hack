import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {connect} from 'react-redux';

class InteractivePanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            test: this.props.test,
            currentQuestion: 1
        };
        this.owner = this.props.owner;
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onShowResult = this.onShowResult.bind(this);
        this.onStartTest = this.onStartTest.bind(this);
    }

    render() {
        const currentQuestionId = this.state.currentQuestion;
        const question = this.state.test.questions.filter((q) => q.id === currentQuestionId)[0];
        if (question) {
            const answersItems = question.answers.map((answer) =>
                <UI.Div
                    key={answer.id}>
                    <UI.Button
                        onClick={(e) => this.onButtonClick(e, answer)}
                        size="xl" stretched level="secondary">{answer.text}</UI.Button>
                </UI.Div>
            );

            return (
                <UI.Div>
                    <UI.Group title={"Вопрос"}>
                        <UI.Div>{question.text}</UI.Div>
                    </UI.Group>
                    {'image' in question ? (
                        <img src={question.image} style={{width: '100%', height: '100%'}}/>
                    ) : ('')}
                    <UI.Group title={"Варианты ответов"}>
                        {answersItems}
                    </UI.Group>
                </UI.Div>
            );
        } else {
            if (currentQuestionId === 0) {
                return (
                    <UI.Div>
                        Not implemented
                    </UI.Div>
                );
            } else {
                return (
                    <UI.Div>
                        <UI.Group title="">
                            <UI.Div>
                                <h3 style={{textAlign: 'center'}}>Поздравляем! Вы набрали баллов: {Math.floor(Math.random() * (80 - 30) + 30)}.</h3>
                            </UI.Div>
                            <UI.Div style={{textAlign: 'center'}}>
                                <img src="https://pp.userapi.com/c847124/v847124938/128f41/sy2aaBbiMg0.jpg"
                                     style={{width: '30%', height: '30%'}}/>
                            </UI.Div>
                        </UI.Group>

                        <UI.Group title="">
                            <UI.Button
                                onClick={this.onShowResult}
                                size="xl" stretched level="commerce">На главную</UI.Button>
                        </UI.Group>

                        <UI.Group title="Курсы для углубленного изучения">
                            <UI.List>
                                <UI.Cell
                                    before={<UI.Avatar
                                        type="image"
                                        src="https://pp.userapi.com/c844721/v844721446/132659/MFiHDz5oTaQ.jpg"/>
                                    }
                                    onClick={this.onShowResult}

                                    description="">Базовый</UI.Cell>
                                <UI.Cell
                                    before={<UI.Avatar
                                        type="image"
                                        src="https://pp.userapi.com/c844721/v844721446/132660/Yv6EwUg6cLU.jpg"/>}
                                    onClick={this.onShowResult}

                                    description="">Начальный</UI.Cell>
                                <UI.Cell
                                    before={<UI.Avatar
                                        type="image"
                                        src="https://pp.userapi.com/c844721/v844721446/132667/QoU2r8rQIMo.jpg"/>}
                                    onClick={this.onShowResult}

                                    description="">Средний</UI.Cell>
                                <UI.Cell
                                    before={<UI.Avatar
                                        type="image"
                                        src="https://pp.userapi.com/c844721/v844721446/13266e/iFxhwDXKPBk.jpg"/>}
                                    onClick={this.onShowResult}

                                    description="">Высший</UI.Cell>
                            </UI.List>
                        </UI.Group>
                    </UI.Div>
                );
            }
        }
    }

    onButtonClick(e, answer) {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        });
        console.log(this.state.currentQuestion);
    }

    onShowResult(e) {
        this.owner.setState({
            activePanel: 'panel1'
        })
    }

    onStartTest(e) {
        this.setState({
            currentQuestion: 1
        });
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(InteractivePanel);
