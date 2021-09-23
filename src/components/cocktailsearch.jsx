componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(res => res.json())
      .then(data => this.setState({ data }));
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(res => res.json())
      .then(data => this.setState({ categories: data.drinks }));
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  getData = e => {
    e.preventDefault();
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
        this.state.searchTerm
      }`
    )
      .then(res => res.json())
      .then(data => this.setState({ data }));
  };