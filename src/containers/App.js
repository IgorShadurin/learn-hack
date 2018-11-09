import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {isWebView} from '@vkontakte/vkui/src/lib/webview';
import * as vkSelectors from '../store/vk/reducer';
import * as vkActions from '../store/vk/actions';
import AboutPanel from './AboutPanel';
import MainPanel from './MainPanel';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //activePanel: 'coursePanel',
            activePanel: 'testPanel',
            //activePanel: 'panel1',
            activeView: 'main',
            categoryTitle: '---',
            courseTitle: '---',
            currentCategory: []
        };

        this.interactive = {
            english: {
                questions: [
                    {
                        id: 1,
                        text: "Could you tell me your surname?",
                        answers: [
                            {
                                id: 1,
                                text: 'Would you like me to spell it?'
                            },
                            {
                                id: 2,
                                text: 'Do you like my family name?'
                            },
                            {
                                id: 3,
                                text: 'How do I say that?'
                            },
                        ]
                    },
                    {
                        id: 2,
                        text: "This plant looks dead.",
                        answers: [
                            {
                                id: 1,
                                text: 'It\'s in the garden.'
                            },
                            {
                                id: 2,
                                text: 'It only needs some water.'
                            },
                            {
                                id: 3,
                                text: 'It\'s sleeping.'
                            },
                        ]
                    },
                    {
                        id: 3,
                        text: "I hope it doesn't rain.",
                        answers: [
                            {
                                id: 1,
                                text: 'Of course not.'
                            },
                            {
                                id: 2,
                                text: 'Will it be wet?'
                            },
                            {
                                id: 3,
                                text: 'So do I.'
                            },
                        ]
                    },
                    {
                        id: 4,
                        text: "Are you going to come inside soon?",
                        answers: [
                            {
                                id: 1,
                                text: 'For ever.'
                            },
                            {
                                id: 2,
                                text: 'Not long.'
                            },
                            {
                                id: 3,
                                text: 'In a minute.'
                            },
                        ]
                    },
                    {
                        id: 5,
                        text: "Who gave you this book, Lucy?",
                        answers: [
                            {
                                id: 1,
                                text: 'I bought it.'
                            },
                            {
                                id: 2,
                                text: 'For my birthday.'
                            },
                            {
                                id: 3,
                                text: 'My uncle was.'
                            },
                        ]
                    },
                    {
                        id: 6,
                        text: "I know that.",
                        answers: [
                            {
                                id: 1,
                                text: 'I know that.'
                            },
                            {
                                id: 2,
                                text: 'It\'s very good.'
                            },
                            {
                                id: 3,
                                text: 'I\'m too tired.'
                            },
                        ]
                    },
                    {
                        id: 7,
                        text: "Do you mind if I come too?",
                        answers: [
                            {
                                id: 1,
                                text: 'That\'s fine!'
                            },
                            {
                                id: 2,
                                text: 'I\'d like to.'
                            },
                            {
                                id: 3,
                                text: 'I don\'t know if I can.'
                            },
                        ]
                    },
                    {
                        id: 8,
                        text: " There's someone at the door.",
                        answers: [
                            {
                                id: 1,
                                text: 'Can I help you?'
                            },
                            {
                                id: 2,
                                text: 'Well, go and answer it then.'
                            },
                            {
                                id: 3,
                                text: 'He\'s busy at the moment.'
                            },
                        ]
                    },
                    {
                        id: 9,
                        text: "How much butter do I need for this cake?",
                        answers: [
                            {
                                id: 1,
                                text: 'I\'d like one.'
                            },
                            {
                                id: 2,
                                text: 'I\'ll use some.'
                            },
                            {
                                id: 3,
                                text: 'I\'m not sure.'
                            },
                        ]
                    },
                    {
                        id: 10,
                        text: "How long are you here for?",
                        answers: [
                            {
                                id: 1,
                                text: 'Since last week.'
                            },
                            {
                                id: 2,
                                text: 'Ten days ago.'
                            },
                            {
                                id: 3,
                                text: 'Till tomorrow.'
                            },
                        ]
                    },
                ]
            }
        };
    }

    componentWillMount() {
        this.props.dispatch(vkActions.initApp());
        this.props.dispatch(vkActions.fetchAccessToken());
    }

    render() {
        let activePanel = this.props.pageId === 'about' ? 'aboutPanel' : 'mainPanel';

        return (
            <UI.ConfigProvider insets={this.props.insets} isWebView={isWebView}>
                <UI.Root activeView="mainView">
                    <UI.View id="mainView" activePanel={activePanel}>
                        <MainPanel id="mainPanel" accessToken={this.props.accessToken}/>
                        <AboutPanel id="aboutPanel"/>
                    </UI.View>
                </UI.Root>
            </UI.ConfigProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        accessToken: vkSelectors.getAccessToken(state),
        insets: vkSelectors.getInsets(state),
    };
}

export default connect(mapStateToProps)(App);
