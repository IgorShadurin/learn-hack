import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import * as vkActions from '../store/vk/actions';
import CoursesPanel from './CoursesPanel';
import TestPanel from './TestPanel';
import InteractivePanel from './InteractivePanel';
import Icon24Story from '@vkontakte/icons/dist/24/story';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //activePanel: 'coursePanel',
            //activePanel: 'testPanel',
            activePanel: 'panel1',
            activeView: 'main',
            categoryTitle: '---',
            courseTitle: '---',
            currentCategory: [],
            currentInteractive: null
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
            },
            mnemonic: {
                questions: [
                    {
                        id: 1,
                        text: "Обычный человек может запомнить в среднем 7 слов из 20 за 1.5 минуты. Сейчас мы узнаем, есть ли у вас способности к запоминанию. Вы готовы?",
                        answers: [
                            {
                                id: 1,
                                text: 'Да!'
                            },
                        ]
                    },
                    {
                        id: 2,
                        text: "Попробуйте запомнить максимальное количество слов из этого списка за 1.5 минуты: слон, стакан, ведро, стул, лошадь, ручка, мозг, тарелка, клей, глаза, огонь, свеча, морж, лопата, пчела, девушка, машина, дерево, лужа, мышь",
                        answers: [
                            {
                                id: 1,
                                text: 'Готово!'
                            },
                        ]
                    },
                    {
                        id: 3,
                        text: "Теперь начнем проверку ваших способностей. Найдите слово, которого не было в списке",
                        answers: [
                            {
                                id: 1,
                                text: 'Огонь'
                            },
                            {
                                id: 2,
                                text: 'Стакан'
                            },
                            {
                                id: 3,
                                text: 'Стол'
                            },
                            {
                                id: 4,
                                text: 'Слон'
                            },
                            {
                                id: 5,
                                text: 'Ручка'
                            },
                        ]
                    },
                    {
                        id: 4,
                        text: "Сейчас тут есть несколько слов, которых не было в списке. Можете найти и выбрать любое",
                        answers: [
                            {
                                id: 1,
                                text: 'Ведро'
                            },
                            {
                                id: 2,
                                text: 'Корзина'
                            },
                            {
                                id: 3,
                                text: 'Конь'
                            },
                            {
                                id: 4,
                                text: 'Лошадь'
                            },
                            {
                                id: 5,
                                text: 'Карандаш'
                            },
                        ]
                    },
                    {
                        id: 5,
                        text: "Найдите самое последнее слово из списка",
                        answers: [
                            {
                                id: 1,
                                text: 'Девушка'
                            },
                            {
                                id: 2,
                                text: 'Лужа'
                            },
                            {
                                id: 3,
                                text: 'Мышь'
                            },
                            {
                                id: 4,
                                text: 'Тарелка'
                            },
                            {
                                id: 5,
                                text: 'Глаза'
                            },
                        ]
                    },
                    {
                        id: 6,
                        text: "Найдите 10-е слово из списка",
                        answers: [
                            {
                                id: 1,
                                text: 'Лужа'
                            },
                            {
                                id: 2,
                                text: 'Мышь'
                            },
                            {
                                id: 3,
                                text: 'Девушка'
                            },
                            {
                                id: 4,
                                text: 'Глаза'
                            },
                            {
                                id: 5,
                                text: 'Тарелка'
                            },
                        ]
                    },
                ]
            }
        };

        this.celebrities = {
            blogger: {
                title: 'Николай Соболев',
                photo: 'https://pp.userapi.com/c845419/v845419088/12f6ff/RJQBUQ3n--w.jpg',
                description: ''
            },
            traveler: {
                title: 'Беар Гриллс',
                photo: 'https://pp.userapi.com/c845419/v845419088/12f707/3cAoY6-k5WM.jpg',
                description: ''
            },
            olymp: {
                title: 'Хабиб Нурмагомедов',
                photo: 'https://pp.userapi.com/c845419/v845419088/12f716/ij8ybNQ9Sn4.jpg',
                description: ''
            },
            artist: {
                title: 'Бэнкси',
                photo: 'https://pp.userapi.com/c845419/v845419088/12f74a/X_qPD8wQQ2s.jpg',
                description: ''
            },
            actor: {
                title: 'Роберт Дауни',
                photo: 'https://pp.userapi.com/c845419/v845419088/12f759/NkzhCp7VYQ0.jpg',
                description: ''
            },
            businessman: {
                title: 'Павел Дуров',
                photo: 'https://pp.userapi.com/c845419/v845419088/12f761/6MBCmStOWhA.jpg',
                description: ''
            },
            chief: {
                title: 'Рамзи Гордон',
                photo: 'https://pp.userapi.com/c845419/v845419545/12de5b/ynj_cho17b8.jpg',
                description: ''
            },
        };

        this.courses = {
            dev: [
                {
                    name: 'javascript',
                    title: 'Javascript'
                },
                {
                    name: 'unity',
                    title: 'Unity'
                }
            ],
            design: [
                {
                    name: 'web-design',
                    title: 'Web Design'
                }
            ],
            languages: [
                {
                    name: 'english',
                    title: 'Английский'
                }
            ],
            ege: [
                {
                    name: 'ege',
                    title: 'ЕГЭ'
                }
            ],
        };

        this.test = {
            state: {
                currentQuestion: 0
            },
            questions: [
                {
                    id: 1,
                    text: "Сколько вам лет?",
                    //image: 'https://pp.userapi.com/c850332/v850332190/62a16/avSgVpltUBw.jpg',
                    answers: [
                        {
                            id: 1,
                            text: '10-17'
                        },
                        {
                            id: 2,
                            text: '18-22'
                        },
                        {
                            id: 3,
                            text: '23-28'
                        },
                        {
                            id: 4,
                            text: 'Более 28'
                        }
                    ]
                },
                {
                    id: 2,
                    text: "Если вы попадаете в новую страну, то в первую очередь...",
                    //image: 'https://pp.userapi.com/c847123/v847123058/dbebd/HLmy45IxreE.jpg?ava=1',
                    answers: [
                        {
                            id: 1,
                            text: 'Пробую новые блюда'
                        },
                        {
                            id: 2,
                            text: 'Хожу на экскурсии'
                        },
                        {
                            id: 3,
                            text: 'Ищу на ярмарках особенные вещи'
                        },
                        {
                            id: 4,
                            text: 'Пытаюсь узнать о жизне населения'
                        },
                        {
                            id: 5,
                            text: 'Иду в места по советам из интернета'
                        }
                    ]
                },
                {
                    id: 3,
                    text: "Представьте, что вы можете пообщаться лично с любым человеком в мире и узнать секреты его успеха. Кого бы вы выбрали?",
                    //image: 'https://pp.userapi.com/c847123/v847123058/dbebd/HLmy45IxreE.jpg?ava=1',
                    answers: [
                        {
                            id: 1,
                            text: 'Олимпийского чемпиона',
                            who: 'olymp'
                        },
                        {
                            id: 2,
                            text: 'Художника с мировым именем',
                            who: 'artist'
                        },
                        {
                            id: 3,
                            text: 'Создателя бизнес-империи',
                            who: 'businessman'
                        },
                        {
                            id: 4,
                            text: 'Блоггера с миллионом подписчиков',
                            who: 'blogger'
                        },
                        {
                            id: 5,
                            text: 'Шеф-повара, которого знает весь мир',
                            who: 'chief'
                        },
                        {
                            id: 6,
                            text: 'Путешественника, который был во всех странах',
                            who: 'traveler'
                        }
                    ]
                },
                {
                    id: 4,
                    text: "Какая фраза лучше всего вас характеризует?",
                    //image: 'https://pp.userapi.com/c847123/v847123058/dbebd/HLmy45IxreE.jpg?ava=1',
                    answers: [
                        {
                            id: 1,
                            text: 'Я не люблю сидеть на одном месте'
                        },
                        {
                            id: 2,
                            text: 'У меня хорошо развита интуиция'
                        },
                        {
                            id: 3,
                            text: 'Моя сильная сторона — великолепная память'
                        },
                        {
                            id: 4,
                            text: 'У меня практически нет свободного времени'
                        },
                        {
                            id: 5,
                            text: 'У меня богатое воображение'
                        },
                        {
                            id: 6,
                            text: 'Я очень тщательно слежу за своим питанием'
                        }
                    ]
                },
                {
                    id: 5,
                    text: "Чем вам больше всего нравилось заниматься в детстве?",
                    //image: 'https://pp.userapi.com/c847123/v847123058/dbebd/HLmy45IxreE.jpg?ava=1',
                    answers: [
                        {
                            id: 1,
                            text: 'Лепить, рисовать и делать гербарии'
                        },
                        {
                            id: 2,
                            text: 'Делать куличи в песочнице и помогать родителям на кухне'
                        },
                        {
                            id: 3,
                            text: 'Играть в «догонялки» и прыгать на батуте'
                        },
                        {
                            id: 4,
                            text: 'Читать книжки и придумывать собственные истории'
                        },
                        {
                            id: 5,
                            text: 'Придумывать новые игры и рассказывать правила своим друзьям'
                        },
                        {
                            id: 6,
                            text: 'Играть в видео-игры и смотреть телевизор'
                        }
                    ]
                },
                {
                    id: 6,
                    text: "Вы с друзьями организуете большую вечеринку. За что вам приятнее всего было бы отвечать на ней? ",
                    //image: 'https://pp.userapi.com/c847123/v847123058/dbebd/HLmy45IxreE.jpg?ava=1',
                    answers: [
                        {
                            id: 1,
                            text: 'За праздничное оформление'
                        },
                        {
                            id: 2,
                            text: 'За меню'
                        },
                        {
                            id: 3,
                            text: 'За музыку и танцы'
                        },
                        {
                            id: 4,
                            text: 'За фото и видео праздника в социальных сетях'
                        },
                        {
                            id: 5,
                            text: 'За общение, игры и конкурсы'
                        },
                        {
                            id: 6,
                            text: 'За то, чтобы всё прошло по плану'
                        }
                    ]
                },
                {
                    id: 7,
                    text: "Работа вашей мечты?",
                    //image: 'https://pp.userapi.com/c847123/v847123058/dbebd/HLmy45IxreE.jpg?ava=1',
                    answers: [
                        {
                            id: 1,
                            text: 'В крупной международной компании'
                        },
                        {
                            id: 2,
                            text: 'Со свободным графиком, без жёстких рамок'
                        },
                        {
                            id: 3,
                            text: 'Мечтаю открыть своё дело'
                        },
                        {
                            id: 4,
                            text: 'Главное условие — не сидеть в офисе или дома!'
                        },
                        {
                            id: 5,
                            text: 'Меня устраивает моё сегодняшнее место работы '
                        },
                        {
                            id: 6,
                            text: 'Бесплатные обеды и дружеская атмосфера в коллективе'
                        }
                    ]
                }
            ]
        };
    }

    componentWillMount() {
        this.props.dispatch(vkActions.initApp());
        this.props.dispatch(vkActions.fetchAccessToken());
    }

    render() {
        const osname = UI.platform();

        return (
            <UI.Root activeView={this.state.activeView}>
                <UI.View id="main" activePanel={this.state.activePanel}>
                    <UI.Panel id="testPanel">
                        <UI.PanelHeader
                        >
                            Тест
                        </UI.PanelHeader>

                        <TestPanel test={this.test} celebrities={this.celebrities} owner={this}/>

                    </UI.Panel>

                    <UI.Panel id="panel1">
                        <UI.PanelHeader
                        >
                            НауЧили 🌶
                        </UI.PanelHeader>

                        <UI.Group title="">
                            <UI.Div>Специально для вас была создана подборка курсов, которая поможет развить ваши
                                сильные стороны и усилить слабые.</UI.Div>
                        </UI.Group>
                        <UI.Group title="Курсы для вас">

                            <div style={{height: 150, backgroundColor: UI.colors.green}}
                                 onClick={() => this.setState({
                                     activePanel: 'coursePanel',
                                     courseTitle: 'English',
                                     currentInteractive: this.interactive.english
                                 })}
                            >
                                <img src="https://pp.userapi.com/c850332/v850332190/62a1e/OEmbbEsgAEc.jpg"
                                     style={{width: '100%', height: '100%', objectFit: 'cover'}} alt=""/>
                            </div>
                            <br/>

                            <div style={{height: 150, backgroundColor: UI.colors.white}}
                                 onClick={() => this.setState({
                                     activePanel: 'coursePanel',
                                     courseTitle: 'Мнемотехника',
                                     currentInteractive: this.interactive.mnemonic
                                 })}
                            >
                                <img src="https://pp.userapi.com/c847124/v847124010/1293dd/xq3Qa36zBU4.jpg"
                                     style={{width: '100%', height: '100%', objectFit: 'cover'}} alt=""/>
                            </div>
                            <br/>
                            <div style={{height: 150, backgroundColor: UI.colors.blue_300}}
                                 onClick={() => alert('Для демо, выберите курс английского языка')}
                            >
                                <img src="https://pp.userapi.com/c847124/v847124010/1293f1/i1FCcWH9POo.jpg"
                                     style={{width: '100%', height: '100%', objectFit: 'cover'}} alt=""/>
                            </div>

                        </UI.Group>

                        <UI.Group title="Мероприятия рядом">

                            <div style={{height: 150, backgroundColor: UI.colors.green}}
                                 onClick={() => this.setState({
                                     activePanel: 'coursePanel',
                                     courseTitle: 'English',
                                     currentInteractive: this.interactive.english
                                 })}
                            >
                                <img src="https://pp.userapi.com/c844721/v844721446/1325e5/zCdggxlOAVs.jpg"
                                     style={{width: '100%', height: '100%', objectFit: 'cover'}} alt=""/>
                            </div>

                        </UI.Group>

                        {/*<UI.Div>
                            <UI.Button level="outline" before={<Icon16Add/>}>Добавить курс</UI.Button>
                        </UI.Div>*/}

                        <UI.Group title="Все курсы"
                                  description="Необходимые курсы расположены в нужной категории">
                            <UI.List>
                                <UI.Cell
                                    before={<UI.Avatar
                                        type="image"
                                        src="https://pp.userapi.com/c852132/v852132423/3d38b/ie6-D2GHzUA.jpg"/>
                                    }
                                    onClick={() => this.setState({
                                        activePanel: 'coursesPanel',
                                        categoryTitle: 'Программирование',
                                        currentCategory: this.courses.dev
                                    })}
                                    description="">Программирование</UI.Cell>
                                <UI.Cell
                                    before={<UI.Avatar
                                        type="image"
                                        src="https://pp.userapi.com/c852132/v852132423/3d3ab/l20KyiPxNQE.jpg"/>}
                                    onClick={() => this.setState({
                                        activePanel: 'coursesPanel',
                                        categoryTitle: 'Дизайн и верстка',
                                        currentCategory: this.courses.design

                                    })}
                                    description="">Дизайн и верстка</UI.Cell>
                                <UI.Cell
                                    before={<UI.Avatar
                                        type="image"
                                        src="https://pp.userapi.com/c852132/v852132423/3d3b2/r5fp5o__uAg.jpg"/>}
                                    onClick={() => this.setState({
                                        activePanel: 'coursesPanel',
                                        categoryTitle: 'Языки',
                                        currentCategory: this.courses.languages

                                    })}
                                    description="">Языки</UI.Cell>
                                <UI.Cell
                                    before={<UI.Avatar
                                        type="image"
                                        src="https://pp.userapi.com/c852132/v852132423/3d3b9/MeCPTSa6jvo.jpg"/>}
                                    onClick={() => this.setState({
                                        activePanel: 'coursesPanel',
                                        categoryTitle: 'ЕГЭ и ОГЭ',
                                        currentCategory: this.courses.ege

                                    })}
                                    description="Школьная программа">ЕГЭ и ОГЭ</UI.Cell>
                            </UI.List>
                        </UI.Group>
                    </UI.Panel>

                    <UI.Panel id="coursesPanel">
                        <UI.PanelHeader
                            left={<UI.HeaderButton
                                onClick={() => this.setState({activePanel: 'panel1'})}>{osname === UI.IOS ?
                                <Icon28ChevronBack/> : <Icon24Back/>}</UI.HeaderButton>}
                            addon={<UI.HeaderButton
                                onClick={() => this.setState({activePanel: 'panel1'})}>Назад</UI.HeaderButton>}
                            right={<UI.HeaderButton onClick={() => {
                            }}><Icon24Story/></UI.HeaderButton>}
                        >
                            {this.state.categoryTitle}
                        </UI.PanelHeader>
                        <CoursesPanel courses={this.state.currentCategory} owner={this}/>
                    </UI.Panel>

                    <UI.Panel id="coursePanel">
                        <UI.PanelHeader
                            left={<UI.HeaderButton
                                onClick={() => this.setState({activePanel: 'panel1'})}>{osname === UI.IOS ?
                                <Icon28ChevronBack/> : <Icon24Back/>}</UI.HeaderButton>}
                            addon={<UI.HeaderButton
                                onClick={() => this.setState({activePanel: 'panel1'})}>Назад</UI.HeaderButton>}
                            right={<UI.HeaderButton onClick={() => {
                            }}><Icon24Story/></UI.HeaderButton>}
                        >
                            {this.state.courseTitle}
                        </UI.PanelHeader>
                        <UI.Group>
                            <InteractivePanel test={this.state.currentInteractive} owner={this}/>

                        </UI.Group>
                    </UI.Panel>
                </UI.View>

            </UI.Root>
        );
    }
}

function mapStateToProps(state) {
    return {
        //accessToken: vkSelectors.getAccessToken(state),
        //insets: vkSelectors.getInsets(state),
    };
}

export default connect(mapStateToProps)(App);
