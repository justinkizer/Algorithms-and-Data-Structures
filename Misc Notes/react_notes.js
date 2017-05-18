// getInitialState() is not required with ES6, as the class's constructor is used in lieu thereof; still in use for ES5

// Use of Mixins is not recommended

// getDefaultProps() is a function for use with ES5; defaultProps in ES6 is set as a property of the component

// componentWillMount() is called before render() such that setting state synchronously will not trigger a re-rendering

// componentDidMount() is invoked immediately after a component is mounted, such that this is preferable to componentWillMount() when DOM nodes are required and/or data is loaded from a remote endpoint via network requests; additionally, setting state synchronously will trigger a re-rendering

// shouldComponentUpdate() takes in nextProps and nextState and can be used to override/block the default update/render behavior if the evalutaion nextProps/nextState parameters returns false
