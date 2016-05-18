var my_news = [
	{
		author: 'Саша Печкин',
		text: 'В четчерг, четвертого числа...',
		bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
	},
	{
		author: 'Просто Вася',
		text: 'Считаю, что $ должен стоить 35 рублей!',
		bigText: 'А евро 42!'
	},
	{
		author: 'Гость',
		text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
		bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
	}
];

window.ee = new EventEmitter();

var Article  = React.createClass({
	propTypes: {
		data: React.PropTypes.shape({
			author: React.PropTypes.string.isRequired,
			text: React.PropTypes.string.isRequired,
			bigText: React.PropTypes.string.isRequired
		})
	},
	getInitialState: function() {
		return {
			visible: false
		}
	},
	readmoreClick: function(e) {
		e.preventDefault();
		this.setState({visible: true}, function() {
			console.log('Состояние изменилось: ' + this.state.visible);
		});
	},
	render: function () {
		var author = this.props.data.author,
			text = this.props.data.text,
			bigText = this.props.data.bigText,
			visible = this.state.visible;

		console.log('render',this);

		return (
			<div className="article">
				<p className="news__author">{author}:</p>
				<p className="news_text">{text}</p>
				<a href="#" onClick={this.readmoreClick} className={'news__readmore ' + (visible ? 'none': '')}>Подробнее</a>
				<p className={'news_text ' + (visible ? '': 'none') }>{bigText}</p>
			</div>
		)
	}
});

var News = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired
	},
	render: function() {
		var data = this.props.data;
		var newsTemplate;

		if (data.length > 0) {
			newsTemplate = data.map(function(item, index) {
				return (
					<div key={index}>
						<Article data={item} />
					</div>
				)
			})
		} else {
			newsTemplate = <p>К сожалению новостей нет</p>
		}

		console.log(data.length);

		return (
			<div className="news">
				{newsTemplate}
				<strong className={'news__count ' + (data.length > 0 ? '':'none')}>Всего новостей: {data.length}</strong>
			</div>
		);
	}
});

var Add = React.createClass({
	getInitialState: function() {
		return {
			agreeNotChecked: true,
			authorIsEmpty: true,
			textIsEmpty: true
		}
	},
	componentDidMount: function() {
		ReactDOM.findDOMNode(this.refs.author).focus();
	},
	onBtnClickHandler: function(e) {
		e.preventDefault();

		var author = ReactDOM.findDOMNode(this.refs.author).value,
			textEl = ReactDOM.findDOMNode(this.refs.text),
			text = textEl.value;

		var item = [{
			author: author,
			text: text,
			bigText: '...'
		}]

		window.ee.emit('News.add', item);

		textEl.value = '';
		this.setState({textIsEmpty: true});

		console.log('Author: ' + author + '\nText: ' + text);
	},
	onCheckRuleClick: function() {
		this.setState({agreeNotChecked: !this.state.agreeNotChecked})
	},
	onFieldChange: function(fieldName, e) {
		if (e.target.value.trim().length > 0) {
			this.setState({['' + fieldName]: false})
		} else {
			this.setState({['' + fieldName]: true})
		}
	},
	render: function () {
		var agreeNotChecked = this.state.agreeNotChecked,
			authorIsEmpty = this.state.authorIsEmpty,
			textIsEmpty = this.state.textIsEmpty;
		return (
			<form className='add cf'>
				<input type="text" className="add__author" defaulValue="" ref="author" onChange={this.onFieldChange.bind(this, 'authorIsEmpty')} placeholder="Ваше имя"/>
				<textarea className="add__text" defaultValue="" placeholder="Текст новости" ref="text" onChange={this.onFieldChange.bind(this, 'textIsEmpty')}></textarea>
				<label className="add__checkrule">
					<input type="checkbox" ref="checkrule" onChange={this.onCheckRuleClick}/>Я согласен с правилами
				</label>
				<button className="add__btn" onClick={this.onBtnClickHandler} ref="alert_button" disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}>Добавить новость</button>
			</form>
		)
	}
});

var App = React.createClass({
	getInitialState: function() {
		return {
			news: my_news
		}
	},
	componentDidMount: function() {
		var _this = this;

		window.ee.addListener('News.add', function(item) {
			var nextNews = item.concat(_this.state.news);
			_this.setState({news: nextNews});
		})
	},
	componentWillUnmount: function() {
		window.ee.removeListener('News.add');
	},
	render: function() {
		return (
			<div className="app">
				<h3>Новости</h3>
				<Add />
				<News data={this.state.news} />
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);