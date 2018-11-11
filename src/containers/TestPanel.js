import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {connect} from 'react-redux';

class TestPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            test: this.props.test
        };
        this.owner = this.props.owner;
        this.celebrities = this.props.celebrities;
        this.myCelebrity = this.celebrities.actor;
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onShowResult = this.onShowResult.bind(this);
        this.onStartTest = this.onStartTest.bind(this);
    }

    render() {
        const currentQuestionId = this.state.test.state.currentQuestion;
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
                        <UI.Group title="">
                            <UI.Div>
                                <h3>Узнайте кем из знаменитостей вы могли бы быть</h3>
                                <p>Для этого ответьте на несколько вопросов и мы определим на кого из знаменитостей вы
                                    похожи больше всего. А так же, расскажем что нужно знать, чтобы добиться таких же
                                    результатов.</p>
                            </UI.Div>
                        </UI.Group>

                        <UI.Group title="">
                            <UI.Div>
                                <img src="https://pp.userapi.com/c850424/v850424981/3eca6/Lm2y_lFG0uk.jpg" style={{width:'100%'}} alt=""/>
                            </UI.Div>
                        </UI.Group>

                        <UI.Group title="">
                            <UI.Div>
                                <UI.Button
                                    onClick={this.onStartTest}
                                    size="xl" stretched level="commerce">Начать</UI.Button>
                            </UI.Div>
                        </UI.Group>
                    </UI.Div>
                );
            } else {
                return (
                    <UI.Div>
                        <UI.Group title="">
                            <UI.Div>Вы - {this.myCelebrity.title}</UI.Div>
                            <UI.Div>
                                <img src={this.myCelebrity.photo}
                                     style={{width: '100%', height: '100%'}}/>
                            </UI.Div>

                        </UI.Group>

                        <UI.Group title="">

                            <UI.Button
                                onClick={this.onShowResult}
                                size="xl" stretched level="commerce">Как стать таким же?</UI.Button>
                        </UI.Group>
                    </UI.Div>
                );
            }
        }
    }

    onButtonClick(e, answer) {
        let currentQuestionId = this.state.test.state.currentQuestion;
        if (currentQuestionId === 3) {
            this.myCelebrity = this.celebrities[answer.who];
        }

        this.state.test.state.currentQuestion++;
        this.setState({
            test: this.state.test
        });
        console.log(this.state.test.state.currentQuestion);
    }

    onShowResult(e) {
        this.owner.setState({
            activePanel: 'panel1'
        })
    }

    onStartTest(e) {
        this.state.test.state.currentQuestion = 1;
        this.setState({
            test: this.state.test
        });
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(TestPanel);
